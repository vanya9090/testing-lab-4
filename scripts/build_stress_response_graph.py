#!/usr/bin/env python3
import csv
import html
import math
import statistics
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path


INPUT_CSV = Path("result_stress2.csv")
OUTPUT_SVG = Path("docs/resources/stress_response_by_load.svg")
OUTPUT_TIME_SVG = Path("docs/resources/stress_response_by_time.svg")
MAX_ALLOWED_MS = 800
MAX_THREADS = 100


def text(x, y, value, size=24, anchor="middle", fill="#111", weight="400"):
    escaped = html.escape(value)
    return (
        f'<text x="{x:.1f}" y="{y:.1f}" font-size="{size}" '
        f'text-anchor="{anchor}" fill="{fill}" font-weight="{weight}">'
        f"{escaped}</text>"
    )


def build_svg(
    output_path,
    x_values,
    averages,
    title,
    x_label,
    x_min,
    x_max,
    x_tick_step,
    first_avg_failure=None,
    first_avg_label=None,
):
    width, height = 1200, 680
    margin_left, margin_top, margin_right, margin_bottom = 90, 70, 40, 95
    plot_width = width - margin_left - margin_right
    plot_height = height - margin_top - margin_bottom
    clipped_points = [
        (x, average)
        for x, average in zip(x_values, averages)
        if x_min <= x <= x_max
    ]
    x_values = [x for x, _ in clipped_points]
    averages = [average for _, average in clipped_points]
    y_max = math.ceil(max(max(averages), MAX_ALLOWED_MS) * 1.15 / 250) * 250

    def scale_x(value):
        return margin_left + (value - x_min) / (x_max - x_min) * plot_width

    def scale_y(value):
        return margin_top + plot_height - (value / y_max) * plot_height

    def polyline(values):
        return " ".join(
            f"{scale_x(x):.1f},{scale_y(value):.1f}"
            for x, value in zip(x_values, values)
        )

    elements = [f'<rect width="{width}" height="{height}" fill="white"/>']
    elements.append(text(width / 2, 38, title, 26, weight="700"))

    for y in range(0, y_max + 1, 500):
        scaled_y = scale_y(y)
        elements.append(
            f'<line x1="{margin_left}" y1="{scaled_y:.1f}" '
            f'x2="{width - margin_right}" y2="{scaled_y:.1f}" '
            f'stroke="#d9d9d9" stroke-width="1"/>'
        )
        elements.append(text(margin_left - 12, scaled_y + 7, str(y), 18, "end", "#333"))

    first_tick = math.ceil(x_min / x_tick_step) * x_tick_step
    tick = first_tick
    while tick <= x_max:
        scaled_x = scale_x(tick)
        elements.append(
            f'<line x1="{scaled_x:.1f}" y1="{margin_top}" '
            f'x2="{scaled_x:.1f}" y2="{height - margin_bottom}" '
            f'stroke="#eeeeee" stroke-width="1"/>'
        )
        elements.append(text(scaled_x, height - margin_bottom + 30, str(tick), 18, fill="#333"))
        tick += x_tick_step

    elements.append(
        f'<line x1="{margin_left}" y1="{margin_top}" '
        f'x2="{margin_left}" y2="{height - margin_bottom}" '
        f'stroke="#111" stroke-width="2"/>'
    )
    elements.append(
        f'<line x1="{margin_left}" y1="{height - margin_bottom}" '
        f'x2="{width - margin_right}" y2="{height - margin_bottom}" '
        f'stroke="#111" stroke-width="2"/>'
    )

    threshold_y = scale_y(MAX_ALLOWED_MS)
    elements.append(
        f'<line x1="{margin_left}" y1="{threshold_y:.1f}" '
        f'x2="{width - margin_right}" y2="{threshold_y:.1f}" '
        f'stroke="#111" stroke-width="2" stroke-dasharray="9 7"/>'
    )
    elements.append(
        text(width - margin_right - 6, threshold_y - 8, "Порог 800 мс", 19, "end", "#111", "700")
    )

    elements.append(
        f'<polyline points="{polyline(averages)}" fill="none" '
        f'stroke="#2364aa" stroke-width="4"/>'
    )

    marker_step = max(1, round((x_max - x_min) / 12))
    for x, average in zip(x_values, averages):
        if round(x) % marker_step == 0 or x in (first_avg_failure, x_values[0], x_values[-1]):
            elements.append(
                f'<circle cx="{scale_x(x):.1f}" cy="{scale_y(average):.1f}" '
                f'r="4" fill="#2364aa"/>'
            )

    if first_avg_failure is not None:
        scaled_x = scale_x(first_avg_failure)
        elements.append(
            f'<line x1="{scaled_x:.1f}" y1="{margin_top}" '
            f'x2="{scaled_x:.1f}" y2="{height - margin_bottom}" '
            f'stroke="#2364aa" stroke-width="2" stroke-dasharray="4 6"/>'
        )
        elements.append(
            text(
                min(scale_x(first_avg_failure) + 56, width - 430),
                scale_y(500),
                first_avg_label or f"среднее выше порога: {first_avg_failure}",
                18,
                "start",
                "#174878",
                "700",
            )
        )

    elements.append(text(width / 2, height - 28, x_label, 22))
    elements.append(
        f'<text x="24" y="{height / 2:.1f}" font-size="22" text-anchor="middle" '
        f'transform="rotate(-90 24 {height / 2:.1f})" fill="#111">'
        f"Время отклика, мс</text>"
    )

    legend_x, legend_y = 745, 92
    elements.append(
        f'<rect x="{legend_x}" y="{legend_y}" width="390" height="52" '
        f'fill="white" stroke="#cfcfcf" stroke-width="1.3"/>'
    )

    legend = [("#2364aa", "Среднее время отклика")]
    for index, (color, label) in enumerate(legend):
        y = legend_y + 30 + index * 30
        elements.append(
            f'<line x1="{legend_x + 18}" y1="{y}" '
            f'x2="{legend_x + 72}" y2="{y}" stroke="{color}" stroke-width="5"/>'
        )
        elements.append(text(legend_x + 86, y + 6, label, 18, "start"))

    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" '
        f'viewBox="0 0 {width} {height}">'
        + "\n".join(elements)
        + "</svg>\n"
    )

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(svg, encoding="utf-8")


def main():
    rows = []
    with INPUT_CSV.open(newline="") as file:
        for row in csv.DictReader(file):
            rows.append((int(row["timeStamp"]), int(row["elapsed"])))

    start = min(timestamp for timestamp, _ in rows)

    by_second = defaultdict(list)
    timestamps_by_second = defaultdict(list)
    for timestamp, elapsed in rows:
        second = int((timestamp - start) / 1000)
        by_second[second].append(elapsed)
        timestamps_by_second[second].append(timestamp)

    first_avg_failure_second = None
    first_avg_failure_timestamp = None
    first_avg_failure_value = None
    for second in sorted(by_second):
        average = statistics.mean(by_second[second])
        if average > MAX_ALLOWED_MS:
            first_avg_failure_second = second
            first_avg_failure_timestamp = min(timestamps_by_second[second])
            first_avg_failure_value = average
            break

    # Ramp-up в stress-test.jmx: 100 пользователей за 100 секунд,
    # значит приблизительная нагрузка равна номеру секунды + 1.
    by_load = defaultdict(list)
    for second in sorted(by_second):
        load = min(MAX_THREADS, second + 1)
        by_load[load].append(statistics.mean(by_second[second]))

    loads = []
    averages = []

    for load in sorted(by_load):
        loads.append(load)
        averages.append(statistics.mean(by_load[load]))

    first_avg_failure = next(
        (load for load, value in zip(loads, averages) if value > MAX_ALLOWED_MS),
        None,
    )

    build_svg(
        OUTPUT_SVG,
        loads,
        averages,
        "Зависимость времени отклика от нагрузки при стресс-тестировании",
        "Нагрузка, параллельные пользователи",
        1,
        30,
        5,
        first_avg_failure,
        f"среднее выше порога: {first_avg_failure} польз.",
    )

    seconds = []
    time_averages = []
    for second in sorted(by_second):
        seconds.append(second)
        time_averages.append(statistics.mean(by_second[second]))

    first_time_avg_failure = next(
        (second for second, value in zip(seconds, time_averages) if value > MAX_ALLOWED_MS),
        None,
    )

    build_svg(
        OUTPUT_TIME_SVG,
        seconds,
        time_averages,
        "Зависимость времени отклика от времени при стресс-тестировании",
        "Время от начала теста, с",
        min(seconds),
        60,
        10,
        first_time_avg_failure,
        f"среднее выше порога: {first_time_avg_failure} с",
    )

    print(f"Saved: {OUTPUT_SVG}")
    print(f"Saved: {OUTPUT_TIME_SVG}")
    print(f"Rows: {len(rows)}")
    print(f"First average response failure: {first_avg_failure} users")
    if first_avg_failure_timestamp is not None:
        print(
            "First second with average response > "
            f"{MAX_ALLOWED_MS} ms: +{first_avg_failure_timestamp - start} ms "
            f"from test start, timestamp {first_avg_failure_timestamp} "
            f"({datetime.fromtimestamp(first_avg_failure_timestamp / 1000, tz=timezone.utc).isoformat()} UTC), "
            f"bucket second {first_avg_failure_second}, "
            f"average {first_avg_failure_value:.2f} ms"
        )


if __name__ == "__main__":
    main()
