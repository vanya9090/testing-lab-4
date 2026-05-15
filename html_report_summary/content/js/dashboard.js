/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 33.333333333333336, "KoPercent": 66.66666666666667};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.16666666666666666, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.5, 500, 1500, "Config #3"], "isController": false}, {"data": [0.0, 500, 1500, "Config #1"], "isController": false}, {"data": [0.0, 500, 1500, "Config #2"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 420, 280, 66.66666666666667, 1024.1880952380955, 575, 1601, 1021.0, 1425.0, 1430.0, 1497.9600000000005, 6.723550034418174, 1.5167383378423809, 1.057120659708326], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Config #3", 140, 0, 0.0, 621.4357142857142, 575, 718, 620.0, 632.9, 654.0, 713.49, 2.2712892811369425, 0.5123709218189783, 0.35710700611625756], "isController": false}, {"data": ["Config #1", 140, 140, 100.0, 1426.0714285714294, 1375, 1601, 1423.0, 1441.0, 1471.85, 1565.7400000000002, 2.2413268655043788, 0.5056118221987417, 0.35239611850215324], "isController": false}, {"data": ["Config #2", 140, 140, 100.0, 1025.0571428571427, 971, 1116, 1021.0, 1043.3, 1078.85, 1113.13, 2.256281326048768, 0.5089853382004544, 0.35474735692758946], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 1,375 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,503 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,008 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,420 milliseconds, but should not have lasted longer than 800 milliseconds.", 10, 3.5714285714285716, 2.380952380952381], "isController": false}, {"data": ["The operation lasted too long: It took 1,479 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,601 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,044 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,441 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.7142857142857143, 0.47619047619047616], "isController": false}, {"data": ["The operation lasted too long: It took 1,437 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 984 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,012 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,416 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.0714285714285714, 0.7142857142857143], "isController": false}, {"data": ["The operation lasted too long: It took 1,430 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.7142857142857143, 0.47619047619047616], "isController": false}, {"data": ["The operation lasted too long: It took 1,469 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,019 milliseconds, but should not have lasted longer than 800 milliseconds.", 11, 3.9285714285714284, 2.619047619047619], "isController": false}, {"data": ["The operation lasted too long: It took 1,033 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.7142857142857143, 0.47619047619047616], "isController": false}, {"data": ["The operation lasted too long: It took 1,415 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.0714285714285714, 0.7142857142857143], "isController": false}, {"data": ["The operation lasted too long: It took 1,013 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,018 milliseconds, but should not have lasted longer than 800 milliseconds.", 9, 3.2142857142857144, 2.142857142857143], "isController": false}, {"data": ["The operation lasted too long: It took 1,447 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,386 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.7142857142857143, 0.47619047619047616], "isController": false}, {"data": ["The operation lasted too long: It took 1,116 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,100 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,405 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,023 milliseconds, but should not have lasted longer than 800 milliseconds.", 9, 3.2142857142857144, 2.142857142857143], "isController": false}, {"data": ["The operation lasted too long: It took 1,076 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,002 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.7142857142857143, 0.47619047619047616], "isController": false}, {"data": ["The operation lasted too long: It took 1,426 milliseconds, but should not have lasted longer than 800 milliseconds.", 6, 2.142857142857143, 1.4285714285714286], "isController": false}, {"data": ["The operation lasted too long: It took 1,017 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.7142857142857143, 0.47619047619047616], "isController": false}, {"data": ["The operation lasted too long: It took 1,056 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,384 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,428 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.0714285714285714, 0.7142857142857143], "isController": false}, {"data": ["The operation lasted too long: It took 1,425 milliseconds, but should not have lasted longer than 800 milliseconds.", 6, 2.142857142857143, 1.4285714285714286], "isController": false}, {"data": ["The operation lasted too long: It took 1,515 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,024 milliseconds, but should not have lasted longer than 800 milliseconds.", 7, 2.5, 1.6666666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 980 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,021 milliseconds, but should not have lasted longer than 800 milliseconds.", 20, 7.142857142857143, 4.761904761904762], "isController": false}, {"data": ["The operation lasted too long: It took 1,046 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,027 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.0714285714285714, 0.7142857142857143], "isController": false}, {"data": ["The operation lasted too long: It took 1,451 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,403 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.7142857142857143, 0.47619047619047616], "isController": false}, {"data": ["The operation lasted too long: It took 1,422 milliseconds, but should not have lasted longer than 800 milliseconds.", 11, 3.9285714285714284, 2.619047619047619], "isController": false}, {"data": ["The operation lasted too long: It took 1,011 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,435 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.7142857142857143, 0.47619047619047616], "isController": false}, {"data": ["The operation lasted too long: It took 1,438 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,014 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,109 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,399 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.7142857142857143, 0.47619047619047616], "isController": false}, {"data": ["The operation lasted too long: It took 1,089 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 971 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,068 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,015 milliseconds, but should not have lasted longer than 800 milliseconds.", 5, 1.7857142857142858, 1.1904761904761905], "isController": false}, {"data": ["The operation lasted too long: It took 1,016 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 1.4285714285714286, 0.9523809523809523], "isController": false}, {"data": ["The operation lasted too long: It took 1,419 milliseconds, but should not have lasted longer than 800 milliseconds.", 11, 3.9285714285714284, 2.619047619047619], "isController": false}, {"data": ["The operation lasted too long: It took 999 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,418 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.7142857142857143, 0.47619047619047616], "isController": false}, {"data": ["The operation lasted too long: It took 1,108 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 993 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.7142857142857143, 0.47619047619047616], "isController": false}, {"data": ["The operation lasted too long: It took 1,037 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.7142857142857143, 0.47619047619047616], "isController": false}, {"data": ["The operation lasted too long: It took 1,079 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.7142857142857143, 0.47619047619047616], "isController": false}, {"data": ["The operation lasted too long: It took 1,408 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,020 milliseconds, but should not have lasted longer than 800 milliseconds.", 12, 4.285714285714286, 2.857142857142857], "isController": false}, {"data": ["The operation lasted too long: It took 1,429 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,423 milliseconds, but should not have lasted longer than 800 milliseconds.", 13, 4.642857142857143, 3.0952380952380953], "isController": false}, {"data": ["The operation lasted too long: It took 1,476 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,383 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,026 milliseconds, but should not have lasted longer than 800 milliseconds.", 6, 2.142857142857143, 1.4285714285714286], "isController": false}, {"data": ["The operation lasted too long: It took 1,449 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,074 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,032 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,446 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,028 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,421 milliseconds, but should not have lasted longer than 800 milliseconds.", 11, 3.9285714285714284, 2.619047619047619], "isController": false}, {"data": ["The operation lasted too long: It took 1,424 milliseconds, but should not have lasted longer than 800 milliseconds.", 15, 5.357142857142857, 3.5714285714285716], "isController": false}, {"data": ["The operation lasted too long: It took 1,022 milliseconds, but should not have lasted longer than 800 milliseconds.", 13, 4.642857142857143, 3.0952380952380953], "isController": false}, {"data": ["The operation lasted too long: It took 1,472 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 991 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,025 milliseconds, but should not have lasted longer than 800 milliseconds.", 5, 1.7857142857142858, 1.1904761904761905], "isController": false}, {"data": ["The operation lasted too long: It took 1,427 milliseconds, but should not have lasted longer than 800 milliseconds.", 5, 1.7857142857142858, 1.1904761904761905], "isController": false}, {"data": ["The operation lasted too long: It took 1,456 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,417 milliseconds, but should not have lasted longer than 800 milliseconds.", 6, 2.142857142857143, 1.4285714285714286], "isController": false}, {"data": ["The operation lasted too long: It took 1,395 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,064 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,507 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}, {"data": ["The operation lasted too long: It took 1,440 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.35714285714285715, 0.23809523809523808], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 420, 280, "The operation lasted too long: It took 1,021 milliseconds, but should not have lasted longer than 800 milliseconds.", 20, "The operation lasted too long: It took 1,424 milliseconds, but should not have lasted longer than 800 milliseconds.", 15, "The operation lasted too long: It took 1,423 milliseconds, but should not have lasted longer than 800 milliseconds.", 13, "The operation lasted too long: It took 1,022 milliseconds, but should not have lasted longer than 800 milliseconds.", 13, "The operation lasted too long: It took 1,020 milliseconds, but should not have lasted longer than 800 milliseconds.", 12], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": ["Config #1", 140, 140, "The operation lasted too long: It took 1,424 milliseconds, but should not have lasted longer than 800 milliseconds.", 15, "The operation lasted too long: It took 1,423 milliseconds, but should not have lasted longer than 800 milliseconds.", 13, "The operation lasted too long: It took 1,419 milliseconds, but should not have lasted longer than 800 milliseconds.", 11, "The operation lasted too long: It took 1,421 milliseconds, but should not have lasted longer than 800 milliseconds.", 11, "The operation lasted too long: It took 1,422 milliseconds, but should not have lasted longer than 800 milliseconds.", 11], "isController": false}, {"data": ["Config #2", 140, 140, "The operation lasted too long: It took 1,021 milliseconds, but should not have lasted longer than 800 milliseconds.", 20, "The operation lasted too long: It took 1,022 milliseconds, but should not have lasted longer than 800 milliseconds.", 13, "The operation lasted too long: It took 1,020 milliseconds, but should not have lasted longer than 800 milliseconds.", 12, "The operation lasted too long: It took 1,019 milliseconds, but should not have lasted longer than 800 milliseconds.", 11, "The operation lasted too long: It took 1,018 milliseconds, but should not have lasted longer than 800 milliseconds.", 9], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
