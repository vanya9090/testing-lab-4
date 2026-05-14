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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 519.0, "minX": 0.0, "maxY": 6712.0, "series": [{"data": [[0.0, 519.0], [0.1, 523.0], [0.2, 528.0], [0.3, 531.0], [0.4, 533.0], [0.5, 538.0], [0.6, 545.0], [0.7, 548.0], [0.8, 550.0], [0.9, 552.0], [1.0, 558.0], [1.1, 562.0], [1.2, 567.0], [1.3, 570.0], [1.4, 571.0], [1.5, 573.0], [1.6, 578.0], [1.7, 584.0], [1.8, 590.0], [1.9, 595.0], [2.0, 597.0], [2.1, 600.0], [2.2, 610.0], [2.3, 623.0], [2.4, 624.0], [2.5, 625.0], [2.6, 632.0], [2.7, 637.0], [2.8, 639.0], [2.9, 644.0], [3.0, 647.0], [3.1, 653.0], [3.2, 655.0], [3.3, 664.0], [3.4, 668.0], [3.5, 676.0], [3.6, 683.0], [3.7, 687.0], [3.8, 689.0], [3.9, 694.0], [4.0, 694.0], [4.1, 700.0], [4.2, 702.0], [4.3, 707.0], [4.4, 714.0], [4.5, 716.0], [4.6, 720.0], [4.7, 723.0], [4.8, 726.0], [4.9, 731.0], [5.0, 736.0], [5.1, 737.0], [5.2, 742.0], [5.3, 746.0], [5.4, 749.0], [5.5, 755.0], [5.6, 765.0], [5.7, 769.0], [5.8, 772.0], [5.9, 773.0], [6.0, 781.0], [6.1, 791.0], [6.2, 791.0], [6.3, 795.0], [6.4, 800.0], [6.5, 801.0], [6.6, 803.0], [6.7, 806.0], [6.8, 809.0], [6.9, 813.0], [7.0, 815.0], [7.1, 817.0], [7.2, 821.0], [7.3, 823.0], [7.4, 824.0], [7.5, 825.0], [7.6, 827.0], [7.7, 831.0], [7.8, 837.0], [7.9, 838.0], [8.0, 840.0], [8.1, 842.0], [8.2, 846.0], [8.3, 850.0], [8.4, 853.0], [8.5, 858.0], [8.6, 863.0], [8.7, 867.0], [8.8, 869.0], [8.9, 873.0], [9.0, 880.0], [9.1, 886.0], [9.2, 889.0], [9.3, 890.0], [9.4, 894.0], [9.5, 896.0], [9.6, 901.0], [9.7, 904.0], [9.8, 906.0], [9.9, 907.0], [10.0, 910.0], [10.1, 914.0], [10.2, 915.0], [10.3, 917.0], [10.4, 920.0], [10.5, 923.0], [10.6, 924.0], [10.7, 926.0], [10.8, 931.0], [10.9, 935.0], [11.0, 936.0], [11.1, 940.0], [11.2, 944.0], [11.3, 950.0], [11.4, 951.0], [11.5, 953.0], [11.6, 957.0], [11.7, 958.0], [11.8, 969.0], [11.9, 974.0], [12.0, 976.0], [12.1, 978.0], [12.2, 980.0], [12.3, 983.0], [12.4, 988.0], [12.5, 990.0], [12.6, 1000.0], [12.7, 1005.0], [12.8, 1008.0], [12.9, 1016.0], [13.0, 1021.0], [13.1, 1029.0], [13.2, 1030.0], [13.3, 1032.0], [13.4, 1033.0], [13.5, 1036.0], [13.6, 1037.0], [13.7, 1038.0], [13.8, 1041.0], [13.9, 1042.0], [14.0, 1043.0], [14.1, 1045.0], [14.2, 1045.0], [14.3, 1046.0], [14.4, 1048.0], [14.5, 1048.0], [14.6, 1049.0], [14.7, 1051.0], [14.8, 1051.0], [14.9, 1053.0], [15.0, 1054.0], [15.1, 1054.0], [15.2, 1054.0], [15.3, 1055.0], [15.4, 1056.0], [15.5, 1058.0], [15.6, 1059.0], [15.7, 1059.0], [15.8, 1061.0], [15.9, 1067.0], [16.0, 1070.0], [16.1, 1071.0], [16.2, 1072.0], [16.3, 1076.0], [16.4, 1079.0], [16.5, 1081.0], [16.6, 1085.0], [16.7, 1087.0], [16.8, 1089.0], [16.9, 1091.0], [17.0, 1094.0], [17.1, 1099.0], [17.2, 1103.0], [17.3, 1105.0], [17.4, 1112.0], [17.5, 1114.0], [17.6, 1115.0], [17.7, 1117.0], [17.8, 1123.0], [17.9, 1127.0], [18.0, 1130.0], [18.1, 1131.0], [18.2, 1139.0], [18.3, 1141.0], [18.4, 1141.0], [18.5, 1147.0], [18.6, 1153.0], [18.7, 1160.0], [18.8, 1160.0], [18.9, 1177.0], [19.0, 1182.0], [19.1, 1189.0], [19.2, 1194.0], [19.3, 1198.0], [19.4, 1206.0], [19.5, 1211.0], [19.6, 1213.0], [19.7, 1226.0], [19.8, 1232.0], [19.9, 1235.0], [20.0, 1242.0], [20.1, 1248.0], [20.2, 1250.0], [20.3, 1259.0], [20.4, 1261.0], [20.5, 1264.0], [20.6, 1269.0], [20.7, 1274.0], [20.8, 1284.0], [20.9, 1285.0], [21.0, 1287.0], [21.1, 1298.0], [21.2, 1300.0], [21.3, 1304.0], [21.4, 1311.0], [21.5, 1313.0], [21.6, 1317.0], [21.7, 1321.0], [21.8, 1325.0], [21.9, 1333.0], [22.0, 1342.0], [22.1, 1348.0], [22.2, 1363.0], [22.3, 1364.0], [22.4, 1368.0], [22.5, 1372.0], [22.6, 1375.0], [22.7, 1379.0], [22.8, 1387.0], [22.9, 1390.0], [23.0, 1399.0], [23.1, 1401.0], [23.2, 1407.0], [23.3, 1408.0], [23.4, 1418.0], [23.5, 1421.0], [23.6, 1422.0], [23.7, 1425.0], [23.8, 1428.0], [23.9, 1434.0], [24.0, 1435.0], [24.1, 1440.0], [24.2, 1444.0], [24.3, 1454.0], [24.4, 1462.0], [24.5, 1468.0], [24.6, 1471.0], [24.7, 1473.0], [24.8, 1476.0], [24.9, 1479.0], [25.0, 1482.0], [25.1, 1485.0], [25.2, 1487.0], [25.3, 1498.0], [25.4, 1500.0], [25.5, 1506.0], [25.6, 1510.0], [25.7, 1518.0], [25.8, 1523.0], [25.9, 1525.0], [26.0, 1531.0], [26.1, 1535.0], [26.2, 1536.0], [26.3, 1543.0], [26.4, 1547.0], [26.5, 1554.0], [26.6, 1557.0], [26.7, 1559.0], [26.8, 1561.0], [26.9, 1562.0], [27.0, 1563.0], [27.1, 1568.0], [27.2, 1570.0], [27.3, 1573.0], [27.4, 1574.0], [27.5, 1575.0], [27.6, 1578.0], [27.7, 1585.0], [27.8, 1586.0], [27.9, 1593.0], [28.0, 1596.0], [28.1, 1603.0], [28.2, 1604.0], [28.3, 1609.0], [28.4, 1615.0], [28.5, 1623.0], [28.6, 1625.0], [28.7, 1629.0], [28.8, 1639.0], [28.9, 1650.0], [29.0, 1652.0], [29.1, 1654.0], [29.2, 1657.0], [29.3, 1658.0], [29.4, 1662.0], [29.5, 1664.0], [29.6, 1672.0], [29.7, 1673.0], [29.8, 1675.0], [29.9, 1676.0], [30.0, 1679.0], [30.1, 1686.0], [30.2, 1690.0], [30.3, 1695.0], [30.4, 1701.0], [30.5, 1704.0], [30.6, 1707.0], [30.7, 1707.0], [30.8, 1709.0], [30.9, 1710.0], [31.0, 1712.0], [31.1, 1713.0], [31.2, 1720.0], [31.3, 1722.0], [31.4, 1728.0], [31.5, 1730.0], [31.6, 1735.0], [31.7, 1736.0], [31.8, 1738.0], [31.9, 1742.0], [32.0, 1753.0], [32.1, 1754.0], [32.2, 1755.0], [32.3, 1759.0], [32.4, 1765.0], [32.5, 1765.0], [32.6, 1766.0], [32.7, 1768.0], [32.8, 1772.0], [32.9, 1782.0], [33.0, 1783.0], [33.1, 1784.0], [33.2, 1792.0], [33.3, 1795.0], [33.4, 1802.0], [33.5, 1804.0], [33.6, 1807.0], [33.7, 1813.0], [33.8, 1820.0], [33.9, 1836.0], [34.0, 1842.0], [34.1, 1856.0], [34.2, 1857.0], [34.3, 1860.0], [34.4, 1862.0], [34.5, 1872.0], [34.6, 1873.0], [34.7, 1880.0], [34.8, 1880.0], [34.9, 1884.0], [35.0, 1887.0], [35.1, 1889.0], [35.2, 1891.0], [35.3, 1892.0], [35.4, 1893.0], [35.5, 1900.0], [35.6, 1902.0], [35.7, 1918.0], [35.8, 1929.0], [35.9, 1950.0], [36.0, 1952.0], [36.1, 1964.0], [36.2, 1964.0], [36.3, 1971.0], [36.4, 1972.0], [36.5, 1975.0], [36.6, 1980.0], [36.7, 1983.0], [36.8, 1986.0], [36.9, 1989.0], [37.0, 1990.0], [37.1, 1997.0], [37.2, 2005.0], [37.3, 2005.0], [37.4, 2010.0], [37.5, 2011.0], [37.6, 2014.0], [37.7, 2015.0], [37.8, 2020.0], [37.9, 2020.0], [38.0, 2026.0], [38.1, 2061.0], [38.2, 2071.0], [38.3, 2072.0], [38.4, 2075.0], [38.5, 2076.0], [38.6, 2077.0], [38.7, 2078.0], [38.8, 2080.0], [38.9, 2082.0], [39.0, 2086.0], [39.1, 2090.0], [39.2, 2091.0], [39.3, 2092.0], [39.4, 2094.0], [39.5, 2098.0], [39.6, 2099.0], [39.7, 2100.0], [39.8, 2102.0], [39.9, 2106.0], [40.0, 2116.0], [40.1, 2118.0], [40.2, 2119.0], [40.3, 2126.0], [40.4, 2132.0], [40.5, 2134.0], [40.6, 2135.0], [40.7, 2149.0], [40.8, 2150.0], [40.9, 2154.0], [41.0, 2172.0], [41.1, 2173.0], [41.2, 2178.0], [41.3, 2188.0], [41.4, 2189.0], [41.5, 2194.0], [41.6, 2195.0], [41.7, 2198.0], [41.8, 2200.0], [41.9, 2204.0], [42.0, 2206.0], [42.1, 2207.0], [42.2, 2208.0], [42.3, 2208.0], [42.4, 2212.0], [42.5, 2218.0], [42.6, 2224.0], [42.7, 2225.0], [42.8, 2235.0], [42.9, 2236.0], [43.0, 2239.0], [43.1, 2241.0], [43.2, 2242.0], [43.3, 2244.0], [43.4, 2244.0], [43.5, 2248.0], [43.6, 2250.0], [43.7, 2253.0], [43.8, 2256.0], [43.9, 2283.0], [44.0, 2284.0], [44.1, 2289.0], [44.2, 2292.0], [44.3, 2295.0], [44.4, 2295.0], [44.5, 2302.0], [44.6, 2304.0], [44.7, 2305.0], [44.8, 2312.0], [44.9, 2314.0], [45.0, 2315.0], [45.1, 2316.0], [45.2, 2320.0], [45.3, 2325.0], [45.4, 2326.0], [45.5, 2329.0], [45.6, 2366.0], [45.7, 2372.0], [45.8, 2394.0], [45.9, 2396.0], [46.0, 2397.0], [46.1, 2397.0], [46.2, 2402.0], [46.3, 2413.0], [46.4, 2415.0], [46.5, 2424.0], [46.6, 2433.0], [46.7, 2437.0], [46.8, 2438.0], [46.9, 2438.0], [47.0, 2479.0], [47.1, 2480.0], [47.2, 2486.0], [47.3, 2486.0], [47.4, 2487.0], [47.5, 2487.0], [47.6, 2488.0], [47.7, 2489.0], [47.8, 2496.0], [47.9, 2499.0], [48.0, 2506.0], [48.1, 2514.0], [48.2, 2517.0], [48.3, 2526.0], [48.4, 2527.0], [48.5, 2530.0], [48.6, 2531.0], [48.7, 2534.0], [48.8, 2536.0], [48.9, 2537.0], [49.0, 2538.0], [49.1, 2539.0], [49.2, 2540.0], [49.3, 2550.0], [49.4, 2552.0], [49.5, 2569.0], [49.6, 2571.0], [49.7, 2577.0], [49.8, 2578.0], [49.9, 2579.0], [50.0, 2582.0], [50.1, 2584.0], [50.2, 2586.0], [50.3, 2588.0], [50.4, 2610.0], [50.5, 2611.0], [50.6, 2612.0], [50.7, 2671.0], [50.8, 2674.0], [50.9, 2681.0], [51.0, 2685.0], [51.1, 2692.0], [51.2, 2697.0], [51.3, 2702.0], [51.4, 2703.0], [51.5, 2704.0], [51.6, 2707.0], [51.7, 2762.0], [51.8, 2763.0], [51.9, 2764.0], [52.0, 2764.0], [52.1, 2766.0], [52.2, 2768.0], [52.3, 2768.0], [52.4, 2768.0], [52.5, 2768.0], [52.6, 2769.0], [52.7, 2770.0], [52.8, 2771.0], [52.9, 2772.0], [53.0, 2773.0], [53.1, 2783.0], [53.2, 2786.0], [53.3, 2787.0], [53.4, 2788.0], [53.5, 2788.0], [53.6, 2789.0], [53.7, 2805.0], [53.8, 2820.0], [53.9, 2823.0], [54.0, 2824.0], [54.1, 2825.0], [54.2, 2826.0], [54.3, 2827.0], [54.4, 2828.0], [54.5, 2832.0], [54.6, 2833.0], [54.7, 2834.0], [54.8, 2835.0], [54.9, 2851.0], [55.0, 2858.0], [55.1, 2858.0], [55.2, 2879.0], [55.3, 2885.0], [55.4, 2888.0], [55.5, 2898.0], [55.6, 2901.0], [55.7, 2904.0], [55.8, 2905.0], [55.9, 2906.0], [56.0, 2906.0], [56.1, 2906.0], [56.2, 2906.0], [56.3, 2907.0], [56.4, 2912.0], [56.5, 2923.0], [56.6, 2934.0], [56.7, 2936.0], [56.8, 2936.0], [56.9, 2937.0], [57.0, 2947.0], [57.1, 2961.0], [57.2, 2964.0], [57.3, 2964.0], [57.4, 2965.0], [57.5, 2965.0], [57.6, 2983.0], [57.7, 2991.0], [57.8, 2994.0], [57.9, 2996.0], [58.0, 2997.0], [58.1, 3001.0], [58.2, 3002.0], [58.3, 3002.0], [58.4, 3009.0], [58.5, 3044.0], [58.6, 3048.0], [58.7, 3052.0], [58.8, 3054.0], [58.9, 3055.0], [59.0, 3056.0], [59.1, 3057.0], [59.2, 3058.0], [59.3, 3060.0], [59.4, 3061.0], [59.5, 3063.0], [59.6, 3064.0], [59.7, 3065.0], [59.8, 3074.0], [59.9, 3082.0], [60.0, 3113.0], [60.1, 3115.0], [60.2, 3117.0], [60.3, 3122.0], [60.4, 3132.0], [60.5, 3137.0], [60.6, 3137.0], [60.7, 3138.0], [60.8, 3139.0], [60.9, 3142.0], [61.0, 3142.0], [61.1, 3142.0], [61.2, 3143.0], [61.3, 3143.0], [61.4, 3143.0], [61.5, 3144.0], [61.6, 3144.0], [61.7, 3144.0], [61.8, 3144.0], [61.9, 3144.0], [62.0, 3144.0], [62.1, 3144.0], [62.2, 3145.0], [62.3, 3145.0], [62.4, 3145.0], [62.5, 3146.0], [62.6, 3148.0], [62.7, 3151.0], [62.8, 3159.0], [62.9, 3160.0], [63.0, 3161.0], [63.1, 3164.0], [63.2, 3169.0], [63.3, 3171.0], [63.4, 3171.0], [63.5, 3179.0], [63.6, 3183.0], [63.7, 3188.0], [63.8, 3188.0], [63.9, 3189.0], [64.0, 3200.0], [64.1, 3216.0], [64.2, 3219.0], [64.3, 3221.0], [64.4, 3222.0], [64.5, 3225.0], [64.6, 3231.0], [64.7, 3234.0], [64.8, 3234.0], [64.9, 3235.0], [65.0, 3248.0], [65.1, 3249.0], [65.2, 3251.0], [65.3, 3252.0], [65.4, 3258.0], [65.5, 3262.0], [65.6, 3263.0], [65.7, 3263.0], [65.8, 3264.0], [65.9, 3266.0], [66.0, 3271.0], [66.1, 3272.0], [66.2, 3275.0], [66.3, 3279.0], [66.4, 3288.0], [66.5, 3288.0], [66.6, 3290.0], [66.7, 3292.0], [66.8, 3292.0], [66.9, 3294.0], [67.0, 3300.0], [67.1, 3304.0], [67.2, 3307.0], [67.3, 3312.0], [67.4, 3315.0], [67.5, 3316.0], [67.6, 3322.0], [67.7, 3350.0], [67.8, 3352.0], [67.9, 3363.0], [68.0, 3367.0], [68.1, 3367.0], [68.2, 3371.0], [68.3, 3376.0], [68.4, 3377.0], [68.5, 3377.0], [68.6, 3378.0], [68.7, 3378.0], [68.8, 3379.0], [68.9, 3380.0], [69.0, 3386.0], [69.1, 3390.0], [69.2, 3391.0], [69.3, 3394.0], [69.4, 3396.0], [69.5, 3398.0], [69.6, 3400.0], [69.7, 3403.0], [69.8, 3405.0], [69.9, 3405.0], [70.0, 3406.0], [70.1, 3408.0], [70.2, 3409.0], [70.3, 3410.0], [70.4, 3411.0], [70.5, 3421.0], [70.6, 3434.0], [70.7, 3436.0], [70.8, 3437.0], [70.9, 3437.0], [71.0, 3437.0], [71.1, 3438.0], [71.2, 3438.0], [71.3, 3438.0], [71.4, 3449.0], [71.5, 3450.0], [71.6, 3451.0], [71.7, 3451.0], [71.8, 3451.0], [71.9, 3451.0], [72.0, 3452.0], [72.1, 3452.0], [72.2, 3452.0], [72.3, 3456.0], [72.4, 3459.0], [72.5, 3460.0], [72.6, 3461.0], [72.7, 3461.0], [72.8, 3463.0], [72.9, 3466.0], [73.0, 3474.0], [73.1, 3475.0], [73.2, 3477.0], [73.3, 3478.0], [73.4, 3478.0], [73.5, 3479.0], [73.6, 3487.0], [73.7, 3488.0], [73.8, 3490.0], [73.9, 3490.0], [74.0, 3500.0], [74.1, 3502.0], [74.2, 3503.0], [74.3, 3505.0], [74.4, 3512.0], [74.5, 3560.0], [74.6, 3570.0], [74.7, 3576.0], [74.8, 3577.0], [74.9, 3626.0], [75.0, 3709.0], [75.1, 3718.0], [75.2, 3720.0], [75.3, 3732.0], [75.4, 3732.0], [75.5, 3732.0], [75.6, 3737.0], [75.7, 3738.0], [75.8, 3745.0], [75.9, 3785.0], [76.0, 3803.0], [76.1, 3804.0], [76.2, 3805.0], [76.3, 3805.0], [76.4, 3891.0], [76.5, 3896.0], [76.6, 3956.0], [76.7, 4224.0], [76.8, 4444.0], [76.9, 4448.0], [77.0, 4448.0], [77.1, 4449.0], [77.2, 4452.0], [77.3, 4472.0], [77.4, 4476.0], [77.5, 4479.0], [77.6, 4479.0], [77.7, 4479.0], [77.8, 4480.0], [77.9, 4498.0], [78.0, 4508.0], [78.1, 4509.0], [78.2, 4509.0], [78.3, 4509.0], [78.4, 4518.0], [78.5, 4576.0], [78.6, 4577.0], [78.7, 4580.0], [78.8, 4581.0], [78.9, 4590.0], [79.0, 4590.0], [79.1, 4590.0], [79.2, 4593.0], [79.3, 4651.0], [79.4, 4660.0], [79.5, 4668.0], [79.6, 4669.0], [79.7, 4670.0], [79.8, 4683.0], [79.9, 4693.0], [80.0, 4699.0], [80.1, 4704.0], [80.2, 4704.0], [80.3, 4708.0], [80.4, 4708.0], [80.5, 4709.0], [80.6, 4709.0], [80.7, 4709.0], [80.8, 4710.0], [80.9, 4710.0], [81.0, 4710.0], [81.1, 4710.0], [81.2, 4712.0], [81.3, 4714.0], [81.4, 4715.0], [81.5, 4717.0], [81.6, 4719.0], [81.7, 4722.0], [81.8, 4730.0], [81.9, 4740.0], [82.0, 4743.0], [82.1, 4744.0], [82.2, 4745.0], [82.3, 4746.0], [82.4, 4747.0], [82.5, 4749.0], [82.6, 4749.0], [82.7, 4750.0], [82.8, 4750.0], [82.9, 4755.0], [83.0, 4758.0], [83.1, 4768.0], [83.2, 4773.0], [83.3, 4783.0], [83.4, 4784.0], [83.5, 4785.0], [83.6, 4787.0], [83.7, 4795.0], [83.8, 4802.0], [83.9, 4806.0], [84.0, 4807.0], [84.1, 4808.0], [84.2, 4809.0], [84.3, 4811.0], [84.4, 4811.0], [84.5, 4812.0], [84.6, 4813.0], [84.7, 4815.0], [84.8, 4816.0], [84.9, 4827.0], [85.0, 4828.0], [85.1, 4829.0], [85.2, 4830.0], [85.3, 4832.0], [85.4, 4832.0], [85.5, 4833.0], [85.6, 4834.0], [85.7, 4835.0], [85.8, 4835.0], [85.9, 4836.0], [86.0, 4838.0], [86.1, 4839.0], [86.2, 4841.0], [86.3, 4847.0], [86.4, 4858.0], [86.5, 4859.0], [86.6, 4859.0], [86.7, 4861.0], [86.8, 4861.0], [86.9, 4875.0], [87.0, 4876.0], [87.1, 4881.0], [87.2, 4884.0], [87.3, 4885.0], [87.4, 4888.0], [87.5, 4889.0], [87.6, 4894.0], [87.7, 4895.0], [87.8, 4895.0], [87.9, 4895.0], [88.0, 4896.0], [88.1, 4897.0], [88.2, 4898.0], [88.3, 4898.0], [88.4, 4899.0], [88.5, 4900.0], [88.6, 4902.0], [88.7, 4903.0], [88.8, 4907.0], [88.9, 4908.0], [89.0, 4909.0], [89.1, 4914.0], [89.2, 4938.0], [89.3, 4952.0], [89.4, 4953.0], [89.5, 4953.0], [89.6, 4956.0], [89.7, 4957.0], [89.8, 4959.0], [89.9, 4970.0], [90.0, 4972.0], [90.1, 4974.0], [90.2, 4977.0], [90.3, 4978.0], [90.4, 4979.0], [90.5, 4979.0], [90.6, 4979.0], [90.7, 4979.0], [90.8, 5003.0], [90.9, 5005.0], [91.0, 5007.0], [91.1, 5007.0], [91.2, 5009.0], [91.3, 5011.0], [91.4, 5014.0], [91.5, 5017.0], [91.6, 5020.0], [91.7, 5021.0], [91.8, 5021.0], [91.9, 5022.0], [92.0, 5024.0], [92.1, 5028.0], [92.2, 5029.0], [92.3, 5030.0], [92.4, 5031.0], [92.5, 5031.0], [92.6, 5032.0], [92.7, 5032.0], [92.8, 5033.0], [92.9, 5035.0], [93.0, 5036.0], [93.1, 5038.0], [93.2, 5039.0], [93.3, 5040.0], [93.4, 5041.0], [93.5, 5041.0], [93.6, 5043.0], [93.7, 5044.0], [93.8, 5049.0], [93.9, 5053.0], [94.0, 5059.0], [94.1, 5061.0], [94.2, 5062.0], [94.3, 5063.0], [94.4, 5064.0], [94.5, 5065.0], [94.6, 5066.0], [94.7, 5085.0], [94.8, 5089.0], [94.9, 5090.0], [95.0, 5091.0], [95.1, 5091.0], [95.2, 5092.0], [95.3, 5092.0], [95.4, 5093.0], [95.5, 5096.0], [95.6, 5099.0], [95.7, 5099.0], [95.8, 5100.0], [95.9, 5109.0], [96.0, 5110.0], [96.1, 5110.0], [96.2, 5111.0], [96.3, 5111.0], [96.4, 5123.0], [96.5, 5124.0], [96.6, 5125.0], [96.7, 5127.0], [96.8, 5127.0], [96.9, 5128.0], [97.0, 5128.0], [97.1, 5129.0], [97.2, 5132.0], [97.3, 5133.0], [97.4, 5134.0], [97.5, 5134.0], [97.6, 5135.0], [97.7, 5138.0], [97.8, 5151.0], [97.9, 5161.0], [98.0, 5162.0], [98.1, 5162.0], [98.2, 5162.0], [98.3, 5162.0], [98.4, 5182.0], [98.5, 5184.0], [98.6, 5185.0], [98.7, 5186.0], [98.8, 5187.0], [98.9, 5198.0], [99.0, 5201.0], [99.1, 5239.0], [99.2, 5241.0], [99.3, 5244.0], [99.4, 5245.0], [99.5, 5245.0], [99.6, 5246.0], [99.7, 5256.0], [99.8, 5256.0], [99.9, 5257.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 188.0, "series": [{"data": [[600.0, 76.0], [700.0, 86.0], [800.0, 119.0], [900.0, 113.0], [1000.0, 170.0], [1100.0, 83.0], [1200.0, 67.0], [1300.0, 71.0], [1400.0, 88.0], [1500.0, 99.0], [1600.0, 86.0], [1700.0, 115.0], [1800.0, 79.0], [1900.0, 62.0], [2000.0, 94.0], [2100.0, 79.0], [2200.0, 100.0], [2300.0, 62.0], [2400.0, 68.0], [2500.0, 90.0], [2600.0, 35.0], [2800.0, 72.0], [2700.0, 89.0], [2900.0, 92.0], [3000.0, 72.0], [3100.0, 152.0], [3200.0, 111.0], [3300.0, 98.0], [3400.0, 165.0], [3500.0, 33.0], [3700.0, 36.0], [3600.0, 4.0], [3800.0, 22.0], [3900.0, 4.0], [4000.0, 1.0], [4100.0, 1.0], [4300.0, 1.0], [4200.0, 1.0], [4500.0, 50.0], [4400.0, 45.0], [4600.0, 29.0], [4700.0, 139.0], [4800.0, 176.0], [5100.0, 118.0], [5000.0, 188.0], [4900.0, 86.0], [5200.0, 38.0], [6400.0, 1.0], [6700.0, 1.0], [500.0, 77.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 953.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2791.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 953.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2791.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 15.882926829268296, "minX": 1.77879126E12, "maxY": 98.01191310441484, "series": [{"data": [[1.77879144E12, 81.02816901408448], [1.77879132E12, 55.26387249114524], [1.77879138E12, 98.01191310441484], [1.77879126E12, 15.882926829268296]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77879144E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 658.4736842105262, "minX": 1.0, "maxY": 4897.0, "series": [{"data": [[2.0, 1325.75], [3.0, 1022.5], [4.0, 897.875], [5.0, 837.8000000000001], [6.0, 795.0000000000001], [7.0, 793.9166666666666], [8.0, 776.8571428571428], [9.0, 764.1250000000001], [10.0, 776.9375], [11.0, 784.6111111111111], [12.0, 658.4736842105262], [13.0, 680.2941176470588], [14.0, 705.2631578947369], [15.0, 713.7619047619048], [16.0, 1254.04], [17.0, 784.7619047619048], [18.0, 790.2083333333331], [19.0, 807.6956521739131], [20.0, 820.3333333333334], [21.0, 844.5833333333333], [22.0, 1346.0645161290324], [23.0, 886.8076923076922], [24.0, 917.48], [25.0, 940.2222222222223], [26.0, 952.7777777777776], [27.0, 992.8461538461537], [28.0, 1015.7037037037037], [29.0, 1033.0357142857147], [30.0, 1045.8214285714287], [31.0, 1050.36], [32.0, 1064.4400000000003], [33.0, 1080.78125], [34.0, 1119.7187500000002], [35.0, 1170.0689655172412], [36.0, 1230.5666666666666], [37.0, 1244.9583333333335], [38.0, 1306.1612903225807], [39.0, 1365.5714285714287], [40.0, 1485.3846153846152], [41.0, 1391.9999999999998], [42.0, 1501.5000000000002], [43.0, 1453.6153846153845], [44.0, 1487.0294117647059], [45.0, 1475.3703703703702], [46.0, 1575.8275862068965], [47.0, 1578.28125], [48.0, 1619.2083333333335], [49.0, 1652.4444444444446], [50.0, 1730.2413793103447], [51.0, 1865.1000000000001], [52.0, 1735.2], [53.0, 1687.8095238095239], [54.0, 1829.4285714285718], [55.0, 1881.7666666666669], [56.0, 2090.7999999999997], [57.0, 2333.9666666666667], [58.0, 2901.53488372093], [59.0, 2557.5142857142855], [60.0, 2125.295454545455], [61.0, 2173.7368421052633], [62.0, 2030.0666666666668], [63.0, 2144.96875], [64.0, 2766.454545454545], [65.0, 2393.3888888888887], [66.0, 2265.6666666666665], [67.0, 2302.5405405405413], [68.0, 2399.1176470588234], [69.0, 2435.157894736842], [70.0, 2587.7], [71.0, 2185.0526315789475], [72.0, 2497.5853658536585], [73.0, 2407.9523809523807], [74.0, 2535.5238095238096], [75.0, 2436.8604651162796], [76.0, 2630.478260869565], [77.0, 2516.4999999999995], [78.0, 2619.086956521738], [79.0, 2815.56], [80.0, 2734.9130434782605], [81.0, 2776.3846153846152], [82.0, 2683.9583333333335], [83.0, 3019.655172413793], [84.0, 2875.3999999999996], [85.0, 3137.0645161290327], [86.0, 2906.961538461538], [87.0, 3036.741379310345], [89.0, 3178.6857142857143], [90.0, 3234.0588235294117], [91.0, 3415.9999999999995], [88.0, 4897.0], [92.0, 3573.8055555555557], [94.0, 3844.6499999999996], [96.0, 4125.343750000002], [97.0, 4136.589743589744], [99.0, 4213.116279069767], [100.0, 4306.244500846019], [1.0, 2119.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[68.7102029914529, 2741.1343482905995]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 560.9, "minX": 1.77879126E12, "maxY": 6521.9, "series": [{"data": [[1.77879144E12, 820.05], [1.77879132E12, 6521.9], [1.77879138E12, 5493.95], [1.77879126E12, 1578.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77879144E12, 560.9], [1.77879132E12, 4460.866666666667], [1.77879138E12, 3757.766666666667], [1.77879126E12, 1079.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77879144E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 745.2560975609758, "minX": 1.77879126E12, "maxY": 4354.122065727697, "series": [{"data": [[1.77879144E12, 4354.122065727697], [1.77879132E12, 1881.8488783943349], [1.77879138E12, 4093.8836720392455], [1.77879126E12, 745.2560975609758]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77879144E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 745.1000000000001, "minX": 1.77879126E12, "maxY": 4354.107981220656, "series": [{"data": [[1.77879144E12, 4354.107981220656], [1.77879132E12, 1881.8158205430948], [1.77879138E12, 4093.861247372112], [1.77879126E12, 745.1000000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77879144E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.12573789846517125, "minX": 1.77879126E12, "maxY": 0.33333333333333326, "series": [{"data": [[1.77879144E12, 0.33333333333333326], [1.77879132E12, 0.12573789846517125], [1.77879138E12, 0.15977575332866123], [1.77879126E12, 0.1390243902439024]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77879144E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 519.0, "minX": 1.77879126E12, "maxY": 6712.0, "series": [{"data": [[1.77879144E12, 6472.0], [1.77879132E12, 3722.0], [1.77879138E12, 6712.0], [1.77879126E12, 1029.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77879144E12, 3111.0], [1.77879132E12, 920.0], [1.77879138E12, 2097.0], [1.77879126E12, 519.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77879144E12, 5116.999999999999], [1.77879132E12, 2767.0], [1.77879138E12, 5099.0], [1.77879126E12, 906.9000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77879144E12, 5162.0], [1.77879132E12, 3408.05], [1.77879138E12, 5245.72], [1.77879126E12, 987.78]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77879144E12, 4901.0], [1.77879132E12, 1806.5], [1.77879138E12, 4479.0], [1.77879126E12, 754.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77879144E12, 5162.0], [1.77879132E12, 2968.75], [1.77879138E12, 5134.0], [1.77879126E12, 920.9]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77879144E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 520.0, "minX": 1.0, "maxY": 5062.0, "series": [{"data": [[32.0, 3195.5], [33.0, 2884.5], [35.0, 4445.0], [34.0, 4896.0], [37.0, 3058.0], [36.0, 3367.0], [39.0, 4699.0], [38.0, 4717.5], [41.0, 3434.0], [40.0, 5062.0], [43.0, 3059.0], [42.0, 4581.0], [44.0, 2848.0], [45.0, 4830.0], [3.0, 520.0], [48.0, 2578.5], [5.0, 527.0], [8.0, 532.0], [10.0, 544.0], [12.0, 549.5], [13.0, 573.0], [14.0, 567.0], [1.0, 571.0], [16.0, 648.0], [17.0, 2206.0], [18.0, 1368.5], [20.0, 735.5], [21.0, 2464.5], [22.0, 2253.0], [23.0, 841.0], [24.0, 1377.5], [25.0, 1880.0], [26.0, 1498.0], [27.0, 1115.0], [28.0, 1573.5], [29.0, 1753.5], [30.0, 1080.5], [31.0, 1689.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 520.0, "minX": 1.0, "maxY": 5062.0, "series": [{"data": [[32.0, 3195.5], [33.0, 2884.5], [35.0, 4445.0], [34.0, 4896.0], [37.0, 3058.0], [36.0, 3367.0], [39.0, 4699.0], [38.0, 4717.5], [41.0, 3434.0], [40.0, 5062.0], [43.0, 3059.0], [42.0, 4581.0], [44.0, 2848.0], [45.0, 4830.0], [3.0, 520.0], [48.0, 2578.5], [5.0, 527.0], [8.0, 532.0], [10.0, 544.0], [12.0, 549.5], [13.0, 573.0], [14.0, 567.0], [1.0, 564.0], [16.0, 647.5], [17.0, 2206.0], [18.0, 1368.5], [20.0, 735.5], [21.0, 2464.0], [22.0, 2253.0], [23.0, 841.0], [24.0, 1377.5], [25.0, 1880.0], [26.0, 1498.0], [27.0, 1115.0], [28.0, 1573.5], [29.0, 1753.5], [30.0, 1080.5], [31.0, 1689.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.8833333333333333, "minX": 1.77879126E12, "maxY": 29.233333333333334, "series": [{"data": [[1.77879144E12, 1.8833333333333333], [1.77879132E12, 29.233333333333334], [1.77879138E12, 24.033333333333335], [1.77879126E12, 7.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77879144E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.55, "minX": 1.77879126E12, "maxY": 28.233333333333334, "series": [{"data": [[1.77879144E12, 3.55], [1.77879132E12, 28.233333333333334], [1.77879138E12, 23.783333333333335], [1.77879126E12, 6.833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77879144E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.55, "minX": 1.77879126E12, "maxY": 28.233333333333334, "series": [{"data": [[1.77879144E12, 3.55], [1.77879132E12, 28.233333333333334], [1.77879138E12, 23.783333333333335], [1.77879126E12, 6.833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77879144E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.55, "minX": 1.77879126E12, "maxY": 28.233333333333334, "series": [{"data": [[1.77879144E12, 3.55], [1.77879132E12, 28.233333333333334], [1.77879138E12, 23.783333333333335], [1.77879126E12, 6.833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77879144E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

