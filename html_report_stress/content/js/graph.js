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
        data: {"result": {"minY": 563.0, "minX": 0.0, "maxY": 4391.0, "series": [{"data": [[0.0, 563.0], [0.1, 568.0], [0.2, 570.0], [0.3, 574.0], [0.4, 579.0], [0.5, 582.0], [0.6, 585.0], [0.7, 599.0], [0.8, 603.0], [0.9, 607.0], [1.0, 609.0], [1.1, 612.0], [1.2, 622.0], [1.3, 624.0], [1.4, 628.0], [1.5, 633.0], [1.6, 634.0], [1.7, 637.0], [1.8, 649.0], [1.9, 651.0], [2.0, 653.0], [2.1, 661.0], [2.2, 664.0], [2.3, 668.0], [2.4, 675.0], [2.5, 679.0], [2.6, 685.0], [2.7, 690.0], [2.8, 691.0], [2.9, 704.0], [3.0, 714.0], [3.1, 720.0], [3.2, 728.0], [3.3, 733.0], [3.4, 735.0], [3.5, 738.0], [3.6, 742.0], [3.7, 745.0], [3.8, 747.0], [3.9, 750.0], [4.0, 751.0], [4.1, 759.0], [4.2, 767.0], [4.3, 770.0], [4.4, 774.0], [4.5, 779.0], [4.6, 782.0], [4.7, 789.0], [4.8, 795.0], [4.9, 800.0], [5.0, 803.0], [5.1, 807.0], [5.2, 817.0], [5.3, 818.0], [5.4, 823.0], [5.5, 825.0], [5.6, 829.0], [5.7, 829.0], [5.8, 833.0], [5.9, 837.0], [6.0, 840.0], [6.1, 851.0], [6.2, 860.0], [6.3, 865.0], [6.4, 867.0], [6.5, 869.0], [6.6, 870.0], [6.7, 872.0], [6.8, 876.0], [6.9, 879.0], [7.0, 886.0], [7.1, 893.0], [7.2, 896.0], [7.3, 899.0], [7.4, 902.0], [7.5, 908.0], [7.6, 911.0], [7.7, 915.0], [7.8, 917.0], [7.9, 920.0], [8.0, 922.0], [8.1, 923.0], [8.2, 925.0], [8.3, 928.0], [8.4, 930.0], [8.5, 932.0], [8.6, 935.0], [8.7, 937.0], [8.8, 939.0], [8.9, 940.0], [9.0, 943.0], [9.1, 944.0], [9.2, 951.0], [9.3, 953.0], [9.4, 955.0], [9.5, 956.0], [9.6, 958.0], [9.7, 959.0], [9.8, 967.0], [9.9, 968.0], [10.0, 971.0], [10.1, 974.0], [10.2, 979.0], [10.3, 984.0], [10.4, 987.0], [10.5, 989.0], [10.6, 1000.0], [10.7, 1004.0], [10.8, 1008.0], [10.9, 1009.0], [11.0, 1010.0], [11.1, 1011.0], [11.2, 1012.0], [11.3, 1013.0], [11.4, 1022.0], [11.5, 1026.0], [11.6, 1027.0], [11.7, 1038.0], [11.8, 1046.0], [11.9, 1049.0], [12.0, 1052.0], [12.1, 1062.0], [12.2, 1066.0], [12.3, 1068.0], [12.4, 1069.0], [12.5, 1074.0], [12.6, 1084.0], [12.7, 1089.0], [12.8, 1093.0], [12.9, 1106.0], [13.0, 1119.0], [13.1, 1122.0], [13.2, 1136.0], [13.3, 1147.0], [13.4, 1149.0], [13.5, 1158.0], [13.6, 1170.0], [13.7, 1172.0], [13.8, 1185.0], [13.9, 1189.0], [14.0, 1190.0], [14.1, 1196.0], [14.2, 1206.0], [14.3, 1209.0], [14.4, 1214.0], [14.5, 1218.0], [14.6, 1220.0], [14.7, 1225.0], [14.8, 1239.0], [14.9, 1248.0], [15.0, 1252.0], [15.1, 1258.0], [15.2, 1267.0], [15.3, 1276.0], [15.4, 1281.0], [15.5, 1282.0], [15.6, 1285.0], [15.7, 1287.0], [15.8, 1290.0], [15.9, 1292.0], [16.0, 1299.0], [16.1, 1302.0], [16.2, 1310.0], [16.3, 1314.0], [16.4, 1317.0], [16.5, 1319.0], [16.6, 1321.0], [16.7, 1327.0], [16.8, 1337.0], [16.9, 1338.0], [17.0, 1339.0], [17.1, 1340.0], [17.2, 1343.0], [17.3, 1346.0], [17.4, 1347.0], [17.5, 1348.0], [17.6, 1351.0], [17.7, 1353.0], [17.8, 1355.0], [17.9, 1357.0], [18.0, 1359.0], [18.1, 1362.0], [18.2, 1369.0], [18.3, 1370.0], [18.4, 1373.0], [18.5, 1385.0], [18.6, 1387.0], [18.7, 1390.0], [18.8, 1391.0], [18.9, 1394.0], [19.0, 1398.0], [19.1, 1404.0], [19.2, 1410.0], [19.3, 1416.0], [19.4, 1424.0], [19.5, 1431.0], [19.6, 1433.0], [19.7, 1436.0], [19.8, 1439.0], [19.9, 1440.0], [20.0, 1449.0], [20.1, 1466.0], [20.2, 1469.0], [20.3, 1479.0], [20.4, 1482.0], [20.5, 1485.0], [20.6, 1494.0], [20.7, 1496.0], [20.8, 1499.0], [20.9, 1504.0], [21.0, 1508.0], [21.1, 1509.0], [21.2, 1510.0], [21.3, 1531.0], [21.4, 1534.0], [21.5, 1536.0], [21.6, 1541.0], [21.7, 1542.0], [21.8, 1547.0], [21.9, 1548.0], [22.0, 1555.0], [22.1, 1565.0], [22.2, 1578.0], [22.3, 1594.0], [22.4, 1608.0], [22.5, 1619.0], [22.6, 1622.0], [22.7, 1625.0], [22.8, 1629.0], [22.9, 1630.0], [23.0, 1633.0], [23.1, 1636.0], [23.2, 1640.0], [23.3, 1642.0], [23.4, 1646.0], [23.5, 1650.0], [23.6, 1654.0], [23.7, 1666.0], [23.8, 1668.0], [23.9, 1681.0], [24.0, 1686.0], [24.1, 1694.0], [24.2, 1696.0], [24.3, 1702.0], [24.4, 1708.0], [24.5, 1726.0], [24.6, 1731.0], [24.7, 1734.0], [24.8, 1735.0], [24.9, 1738.0], [25.0, 1746.0], [25.1, 1748.0], [25.2, 1759.0], [25.3, 1760.0], [25.4, 1762.0], [25.5, 1763.0], [25.6, 1768.0], [25.7, 1770.0], [25.8, 1771.0], [25.9, 1781.0], [26.0, 1785.0], [26.1, 1792.0], [26.2, 1797.0], [26.3, 1800.0], [26.4, 1810.0], [26.5, 1811.0], [26.6, 1833.0], [26.7, 1836.0], [26.8, 1836.0], [26.9, 1838.0], [27.0, 1841.0], [27.1, 1842.0], [27.2, 1845.0], [27.3, 1855.0], [27.4, 1859.0], [27.5, 1864.0], [27.6, 1872.0], [27.7, 1875.0], [27.8, 1880.0], [27.9, 1882.0], [28.0, 1882.0], [28.1, 1886.0], [28.2, 1890.0], [28.3, 1892.0], [28.4, 1898.0], [28.5, 1908.0], [28.6, 1910.0], [28.7, 1914.0], [28.8, 1937.0], [28.9, 1940.0], [29.0, 1942.0], [29.1, 1943.0], [29.2, 1950.0], [29.3, 1954.0], [29.4, 1954.0], [29.5, 1956.0], [29.6, 1963.0], [29.7, 1967.0], [29.8, 1970.0], [29.9, 1976.0], [30.0, 1980.0], [30.1, 1981.0], [30.2, 1983.0], [30.3, 1985.0], [30.4, 1987.0], [30.5, 1995.0], [30.6, 2009.0], [30.7, 2011.0], [30.8, 2018.0], [30.9, 2019.0], [31.0, 2020.0], [31.1, 2025.0], [31.2, 2027.0], [31.3, 2029.0], [31.4, 2030.0], [31.5, 2038.0], [31.6, 2041.0], [31.7, 2046.0], [31.8, 2053.0], [31.9, 2062.0], [32.0, 2064.0], [32.1, 2065.0], [32.2, 2065.0], [32.3, 2070.0], [32.4, 2087.0], [32.5, 2088.0], [32.6, 2089.0], [32.7, 2093.0], [32.8, 2094.0], [32.9, 2099.0], [33.0, 2099.0], [33.1, 2101.0], [33.2, 2102.0], [33.3, 2103.0], [33.4, 2103.0], [33.5, 2107.0], [33.6, 2112.0], [33.7, 2114.0], [33.8, 2116.0], [33.9, 2119.0], [34.0, 2122.0], [34.1, 2126.0], [34.2, 2132.0], [34.3, 2137.0], [34.4, 2140.0], [34.5, 2146.0], [34.6, 2149.0], [34.7, 2149.0], [34.8, 2152.0], [34.9, 2156.0], [35.0, 2162.0], [35.1, 2164.0], [35.2, 2166.0], [35.3, 2169.0], [35.4, 2171.0], [35.5, 2171.0], [35.6, 2172.0], [35.7, 2172.0], [35.8, 2174.0], [35.9, 2176.0], [36.0, 2177.0], [36.1, 2178.0], [36.2, 2181.0], [36.3, 2182.0], [36.4, 2185.0], [36.5, 2189.0], [36.6, 2196.0], [36.7, 2197.0], [36.8, 2198.0], [36.9, 2199.0], [37.0, 2201.0], [37.1, 2202.0], [37.2, 2210.0], [37.3, 2219.0], [37.4, 2224.0], [37.5, 2226.0], [37.6, 2230.0], [37.7, 2238.0], [37.8, 2243.0], [37.9, 2246.0], [38.0, 2248.0], [38.1, 2251.0], [38.2, 2267.0], [38.3, 2269.0], [38.4, 2278.0], [38.5, 2284.0], [38.6, 2289.0], [38.7, 2290.0], [38.8, 2291.0], [38.9, 2293.0], [39.0, 2294.0], [39.1, 2295.0], [39.2, 2296.0], [39.3, 2300.0], [39.4, 2308.0], [39.5, 2314.0], [39.6, 2315.0], [39.7, 2320.0], [39.8, 2321.0], [39.9, 2323.0], [40.0, 2331.0], [40.1, 2335.0], [40.2, 2336.0], [40.3, 2336.0], [40.4, 2338.0], [40.5, 2339.0], [40.6, 2342.0], [40.7, 2349.0], [40.8, 2352.0], [40.9, 2353.0], [41.0, 2354.0], [41.1, 2362.0], [41.2, 2363.0], [41.3, 2365.0], [41.4, 2365.0], [41.5, 2367.0], [41.6, 2369.0], [41.7, 2376.0], [41.8, 2377.0], [41.9, 2383.0], [42.0, 2385.0], [42.1, 2401.0], [42.2, 2403.0], [42.3, 2415.0], [42.4, 2419.0], [42.5, 2421.0], [42.6, 2422.0], [42.7, 2423.0], [42.8, 2423.0], [42.9, 2424.0], [43.0, 2427.0], [43.1, 2428.0], [43.2, 2429.0], [43.3, 2430.0], [43.4, 2431.0], [43.5, 2431.0], [43.6, 2432.0], [43.7, 2434.0], [43.8, 2437.0], [43.9, 2439.0], [44.0, 2442.0], [44.1, 2444.0], [44.2, 2444.0], [44.3, 2449.0], [44.4, 2453.0], [44.5, 2455.0], [44.6, 2455.0], [44.7, 2473.0], [44.8, 2478.0], [44.9, 2484.0], [45.0, 2486.0], [45.1, 2491.0], [45.2, 2510.0], [45.3, 2511.0], [45.4, 2521.0], [45.5, 2527.0], [45.6, 2541.0], [45.7, 2549.0], [45.8, 2552.0], [45.9, 2553.0], [46.0, 2554.0], [46.1, 2566.0], [46.2, 2567.0], [46.3, 2567.0], [46.4, 2570.0], [46.5, 2575.0], [46.6, 2576.0], [46.7, 2583.0], [46.8, 2585.0], [46.9, 2587.0], [47.0, 2588.0], [47.1, 2589.0], [47.2, 2590.0], [47.3, 2591.0], [47.4, 2593.0], [47.5, 2595.0], [47.6, 2596.0], [47.7, 2599.0], [47.8, 2601.0], [47.9, 2604.0], [48.0, 2610.0], [48.1, 2620.0], [48.2, 2623.0], [48.3, 2630.0], [48.4, 2633.0], [48.5, 2637.0], [48.6, 2638.0], [48.7, 2638.0], [48.8, 2641.0], [48.9, 2645.0], [49.0, 2648.0], [49.1, 2653.0], [49.2, 2659.0], [49.3, 2660.0], [49.4, 2662.0], [49.5, 2664.0], [49.6, 2665.0], [49.7, 2665.0], [49.8, 2668.0], [49.9, 2670.0], [50.0, 2671.0], [50.1, 2689.0], [50.2, 2691.0], [50.3, 2692.0], [50.4, 2696.0], [50.5, 2712.0], [50.6, 2716.0], [50.7, 2723.0], [50.8, 2726.0], [50.9, 2727.0], [51.0, 2730.0], [51.1, 2734.0], [51.2, 2735.0], [51.3, 2739.0], [51.4, 2741.0], [51.5, 2742.0], [51.6, 2744.0], [51.7, 2748.0], [51.8, 2769.0], [51.9, 2778.0], [52.0, 2781.0], [52.1, 2784.0], [52.2, 2796.0], [52.3, 2798.0], [52.4, 2800.0], [52.5, 2801.0], [52.6, 2802.0], [52.7, 2803.0], [52.8, 2803.0], [52.9, 2809.0], [53.0, 2813.0], [53.1, 2814.0], [53.2, 2814.0], [53.3, 2824.0], [53.4, 2828.0], [53.5, 2840.0], [53.6, 2847.0], [53.7, 2860.0], [53.8, 2872.0], [53.9, 2877.0], [54.0, 2889.0], [54.1, 2891.0], [54.2, 2895.0], [54.3, 2895.0], [54.4, 2896.0], [54.5, 2902.0], [54.6, 2909.0], [54.7, 2918.0], [54.8, 2919.0], [54.9, 2920.0], [55.0, 2921.0], [55.1, 2921.0], [55.2, 2923.0], [55.3, 2924.0], [55.4, 2925.0], [55.5, 2926.0], [55.6, 2929.0], [55.7, 2931.0], [55.8, 2934.0], [55.9, 2944.0], [56.0, 2955.0], [56.1, 2956.0], [56.2, 2957.0], [56.3, 2958.0], [56.4, 2963.0], [56.5, 2971.0], [56.6, 2990.0], [56.7, 3004.0], [56.8, 3008.0], [56.9, 3028.0], [57.0, 3033.0], [57.1, 3035.0], [57.2, 3044.0], [57.3, 3046.0], [57.4, 3047.0], [57.5, 3048.0], [57.6, 3051.0], [57.7, 3054.0], [57.8, 3059.0], [57.9, 3067.0], [58.0, 3069.0], [58.1, 3075.0], [58.2, 3086.0], [58.3, 3088.0], [58.4, 3103.0], [58.5, 3105.0], [58.6, 3112.0], [58.7, 3121.0], [58.8, 3127.0], [58.9, 3136.0], [59.0, 3137.0], [59.1, 3137.0], [59.2, 3140.0], [59.3, 3140.0], [59.4, 3141.0], [59.5, 3142.0], [59.6, 3144.0], [59.7, 3145.0], [59.8, 3149.0], [59.9, 3151.0], [60.0, 3158.0], [60.1, 3161.0], [60.2, 3164.0], [60.3, 3165.0], [60.4, 3166.0], [60.5, 3167.0], [60.6, 3171.0], [60.7, 3177.0], [60.8, 3179.0], [60.9, 3182.0], [61.0, 3183.0], [61.1, 3184.0], [61.2, 3185.0], [61.3, 3185.0], [61.4, 3186.0], [61.5, 3186.0], [61.6, 3187.0], [61.7, 3189.0], [61.8, 3191.0], [61.9, 3196.0], [62.0, 3201.0], [62.1, 3201.0], [62.2, 3202.0], [62.3, 3203.0], [62.4, 3206.0], [62.5, 3207.0], [62.6, 3208.0], [62.7, 3209.0], [62.8, 3211.0], [62.9, 3212.0], [63.0, 3214.0], [63.1, 3216.0], [63.2, 3217.0], [63.3, 3218.0], [63.4, 3230.0], [63.5, 3234.0], [63.6, 3236.0], [63.7, 3238.0], [63.8, 3239.0], [63.9, 3246.0], [64.0, 3251.0], [64.1, 3288.0], [64.2, 3290.0], [64.3, 3292.0], [64.4, 3293.0], [64.5, 3296.0], [64.6, 3302.0], [64.7, 3304.0], [64.8, 3305.0], [64.9, 3306.0], [65.0, 3310.0], [65.1, 3312.0], [65.2, 3319.0], [65.3, 3319.0], [65.4, 3322.0], [65.5, 3324.0], [65.6, 3327.0], [65.7, 3331.0], [65.8, 3332.0], [65.9, 3337.0], [66.0, 3342.0], [66.1, 3359.0], [66.2, 3366.0], [66.3, 3381.0], [66.4, 3414.0], [66.5, 3416.0], [66.6, 3417.0], [66.7, 3418.0], [66.8, 3419.0], [66.9, 3423.0], [67.0, 3431.0], [67.1, 3440.0], [67.2, 3475.0], [67.3, 3497.0], [67.4, 3500.0], [67.5, 3503.0], [67.6, 3504.0], [67.7, 3507.0], [67.8, 3513.0], [67.9, 3521.0], [68.0, 3522.0], [68.1, 3530.0], [68.2, 3551.0], [68.3, 3551.0], [68.4, 3552.0], [68.5, 3554.0], [68.6, 3557.0], [68.7, 3560.0], [68.8, 3562.0], [68.9, 3563.0], [69.0, 3564.0], [69.1, 3569.0], [69.2, 3570.0], [69.3, 3571.0], [69.4, 3572.0], [69.5, 3572.0], [69.6, 3573.0], [69.7, 3574.0], [69.8, 3576.0], [69.9, 3577.0], [70.0, 3579.0], [70.1, 3583.0], [70.2, 3588.0], [70.3, 3588.0], [70.4, 3589.0], [70.5, 3589.0], [70.6, 3590.0], [70.7, 3590.0], [70.8, 3590.0], [70.9, 3591.0], [71.0, 3593.0], [71.1, 3594.0], [71.2, 3597.0], [71.3, 3598.0], [71.4, 3607.0], [71.5, 3611.0], [71.6, 3613.0], [71.7, 3619.0], [71.8, 3622.0], [71.9, 3629.0], [72.0, 3632.0], [72.1, 3643.0], [72.2, 3644.0], [72.3, 3645.0], [72.4, 3645.0], [72.5, 3646.0], [72.6, 3648.0], [72.7, 3648.0], [72.8, 3649.0], [72.9, 3651.0], [73.0, 3652.0], [73.1, 3653.0], [73.2, 3653.0], [73.3, 3654.0], [73.4, 3654.0], [73.5, 3655.0], [73.6, 3660.0], [73.7, 3663.0], [73.8, 3664.0], [73.9, 3665.0], [74.0, 3667.0], [74.1, 3668.0], [74.2, 3668.0], [74.3, 3670.0], [74.4, 3672.0], [74.5, 3674.0], [74.6, 3675.0], [74.7, 3678.0], [74.8, 3681.0], [74.9, 3683.0], [75.0, 3685.0], [75.1, 3686.0], [75.2, 3688.0], [75.3, 3688.0], [75.4, 3690.0], [75.5, 3691.0], [75.6, 3693.0], [75.7, 3694.0], [75.8, 3697.0], [75.9, 3699.0], [76.0, 3700.0], [76.1, 3703.0], [76.2, 3705.0], [76.3, 3707.0], [76.4, 3707.0], [76.5, 3710.0], [76.6, 3715.0], [76.7, 3718.0], [76.8, 3720.0], [76.9, 3720.0], [77.0, 3722.0], [77.1, 3723.0], [77.2, 3723.0], [77.3, 3723.0], [77.4, 3725.0], [77.5, 3726.0], [77.6, 3727.0], [77.7, 3730.0], [77.8, 3731.0], [77.9, 3731.0], [78.0, 3731.0], [78.1, 3732.0], [78.2, 3734.0], [78.3, 3735.0], [78.4, 3735.0], [78.5, 3736.0], [78.6, 3737.0], [78.7, 3740.0], [78.8, 3740.0], [78.9, 3742.0], [79.0, 3742.0], [79.1, 3743.0], [79.2, 3746.0], [79.3, 3746.0], [79.4, 3748.0], [79.5, 3751.0], [79.6, 3759.0], [79.7, 3760.0], [79.8, 3761.0], [79.9, 3762.0], [80.0, 3763.0], [80.1, 3767.0], [80.2, 3774.0], [80.3, 3778.0], [80.4, 3779.0], [80.5, 3792.0], [80.6, 3794.0], [80.7, 3796.0], [80.8, 3796.0], [80.9, 3803.0], [81.0, 3806.0], [81.1, 3807.0], [81.2, 3819.0], [81.3, 3822.0], [81.4, 3826.0], [81.5, 3827.0], [81.6, 3827.0], [81.7, 3828.0], [81.8, 3831.0], [81.9, 3832.0], [82.0, 3832.0], [82.1, 3834.0], [82.2, 3836.0], [82.3, 3845.0], [82.4, 3846.0], [82.5, 3847.0], [82.6, 3847.0], [82.7, 3848.0], [82.8, 3848.0], [82.9, 3848.0], [83.0, 3848.0], [83.1, 3849.0], [83.2, 3849.0], [83.3, 3852.0], [83.4, 3854.0], [83.5, 3855.0], [83.6, 3855.0], [83.7, 3856.0], [83.8, 3856.0], [83.9, 3857.0], [84.0, 3858.0], [84.1, 3859.0], [84.2, 3859.0], [84.3, 3861.0], [84.4, 3862.0], [84.5, 3867.0], [84.6, 3868.0], [84.7, 3868.0], [84.8, 3870.0], [84.9, 3871.0], [85.0, 3872.0], [85.1, 3875.0], [85.2, 3884.0], [85.3, 3892.0], [85.4, 3900.0], [85.5, 3900.0], [85.6, 3901.0], [85.7, 3902.0], [85.8, 3903.0], [85.9, 3904.0], [86.0, 3907.0], [86.1, 3909.0], [86.2, 3912.0], [86.3, 3912.0], [86.4, 3913.0], [86.5, 3917.0], [86.6, 3918.0], [86.7, 3919.0], [86.8, 3919.0], [86.9, 3921.0], [87.0, 3922.0], [87.1, 3923.0], [87.2, 3923.0], [87.3, 3924.0], [87.4, 3925.0], [87.5, 3927.0], [87.6, 3927.0], [87.7, 3930.0], [87.8, 3931.0], [87.9, 3932.0], [88.0, 3933.0], [88.1, 3934.0], [88.2, 3937.0], [88.3, 3937.0], [88.4, 3938.0], [88.5, 3939.0], [88.6, 3940.0], [88.7, 3940.0], [88.8, 3941.0], [88.9, 3941.0], [89.0, 3942.0], [89.1, 3942.0], [89.2, 3943.0], [89.3, 3944.0], [89.4, 3944.0], [89.5, 3945.0], [89.6, 3946.0], [89.7, 3948.0], [89.8, 3949.0], [89.9, 3952.0], [90.0, 3953.0], [90.1, 3954.0], [90.2, 3956.0], [90.3, 3962.0], [90.4, 3963.0], [90.5, 3964.0], [90.6, 3968.0], [90.7, 3970.0], [90.8, 3970.0], [90.9, 3970.0], [91.0, 3971.0], [91.1, 3971.0], [91.2, 3972.0], [91.3, 3977.0], [91.4, 3977.0], [91.5, 3978.0], [91.6, 3985.0], [91.7, 3986.0], [91.8, 3987.0], [91.9, 3991.0], [92.0, 3997.0], [92.1, 4000.0], [92.2, 4004.0], [92.3, 4011.0], [92.4, 4016.0], [92.5, 4018.0], [92.6, 4019.0], [92.7, 4023.0], [92.8, 4025.0], [92.9, 4033.0], [93.0, 4034.0], [93.1, 4036.0], [93.2, 4037.0], [93.3, 4038.0], [93.4, 4041.0], [93.5, 4044.0], [93.6, 4046.0], [93.7, 4051.0], [93.8, 4065.0], [93.9, 4068.0], [94.0, 4070.0], [94.1, 4077.0], [94.2, 4079.0], [94.3, 4089.0], [94.4, 4097.0], [94.5, 4108.0], [94.6, 4109.0], [94.7, 4113.0], [94.8, 4131.0], [94.9, 4132.0], [95.0, 4133.0], [95.1, 4135.0], [95.2, 4136.0], [95.3, 4137.0], [95.4, 4138.0], [95.5, 4141.0], [95.6, 4142.0], [95.7, 4144.0], [95.8, 4145.0], [95.9, 4146.0], [96.0, 4147.0], [96.1, 4148.0], [96.2, 4148.0], [96.3, 4149.0], [96.4, 4150.0], [96.5, 4150.0], [96.6, 4151.0], [96.7, 4152.0], [96.8, 4153.0], [96.9, 4154.0], [97.0, 4155.0], [97.1, 4157.0], [97.2, 4159.0], [97.3, 4160.0], [97.4, 4164.0], [97.5, 4164.0], [97.6, 4169.0], [97.7, 4170.0], [97.8, 4173.0], [97.9, 4177.0], [98.0, 4177.0], [98.1, 4177.0], [98.2, 4178.0], [98.3, 4178.0], [98.4, 4179.0], [98.5, 4181.0], [98.6, 4182.0], [98.7, 4184.0], [98.8, 4195.0], [98.9, 4211.0], [99.0, 4235.0], [99.1, 4242.0], [99.2, 4271.0], [99.3, 4316.0], [99.4, 4316.0], [99.5, 4320.0], [99.6, 4349.0], [99.7, 4361.0], [99.8, 4363.0], [99.9, 4381.0]], "isOverall": false, "label": "Config #3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 16.0, "minX": 500.0, "maxY": 260.0, "series": [{"data": [[600.0, 83.0], [700.0, 78.0], [800.0, 96.0], [900.0, 127.0], [1000.0, 87.0], [1100.0, 53.0], [1200.0, 72.0], [1300.0, 116.0], [1400.0, 70.0], [1500.0, 58.0], [1600.0, 77.0], [1700.0, 77.0], [1800.0, 83.0], [1900.0, 83.0], [2000.0, 97.0], [2100.0, 152.0], [2200.0, 91.0], [2300.0, 109.0], [2400.0, 119.0], [2500.0, 100.0], [2600.0, 107.0], [2700.0, 73.0], [2800.0, 83.0], [2900.0, 83.0], [3000.0, 67.0], [3100.0, 141.0], [3300.0, 68.0], [3200.0, 102.0], [3400.0, 39.0], [3500.0, 154.0], [3600.0, 179.0], [3700.0, 194.0], [3800.0, 175.0], [3900.0, 260.0], [4000.0, 91.0], [4200.0, 16.0], [4100.0, 172.0], [4300.0, 29.0], [500.0, 28.0]], "isOverall": false, "label": "Config #3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 192.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3697.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 192.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3697.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 25.187654320987644, "minX": 1.7788068E12, "maxY": 96.64000000000013, "series": [{"data": [[1.7788068E12, 25.187654320987644], [1.77880686E12, 72.28422344996923], [1.77880692E12, 96.64000000000013]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77880692E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 580.6, "minX": 1.0, "maxY": 3970.7096774193556, "series": [{"data": [[2.0, 1966.75], [3.0, 580.6], [4.0, 585.1428571428571], [5.0, 587.8571428571429], [6.0, 1341.2857142857144], [7.0, 621.7272727272727], [8.0, 621.9090909090909], [9.0, 634.4], [10.0, 1208.4444444444443], [11.0, 668.9333333333334], [12.0, 695.1111111111111], [13.0, 1103.1052631578948], [14.0, 741.6666666666666], [15.0, 769.5], [16.0, 1063.9166666666665], [17.0, 925.15], [18.0, 946.0555555555557], [19.0, 982.7], [20.0, 876.6551724137931], [21.0, 886.8695652173914], [22.0, 925.125], [23.0, 928.6399999999999], [24.0, 1282.7586206896551], [25.0, 970.4583333333334], [26.0, 1108.607142857143], [27.0, 1088.7500000000002], [28.0, 1055.3846153846157], [29.0, 1231.7037037037037], [30.0, 1206.3703703703702], [31.0, 1169.5238095238096], [32.0, 1318.5172413793102], [33.0, 1267.090909090909], [34.0, 1433.758620689655], [35.0, 1408.586206896552], [36.0, 1385.3703703703704], [37.0, 1364.5416666666667], [38.0, 1621.3000000000002], [39.0, 1428.4814814814813], [40.0, 1478.1818181818182], [41.0, 1684.8], [42.0, 1543.9047619047617], [43.0, 1572.8275862068965], [44.0, 1761.4444444444443], [45.0, 1672.6666666666665], [46.0, 1673.7333333333331], [47.0, 1978.4347826086953], [48.0, 1751.304347826087], [49.0, 1741.285714285714], [50.0, 2032.074074074074], [51.0, 1850.5199999999998], [52.0, 1936.9199999999998], [53.0, 2013.2413793103447], [54.0, 1925.1923076923076], [55.0, 1925.9354838709678], [56.0, 2167.363636363637], [57.0, 2004.9285714285716], [58.0, 2044.090909090909], [59.0, 2161.1], [60.0, 2323.8181818181815], [61.0, 2166.75], [62.0, 2257.823529411765], [63.0, 2364.3095238095248], [64.0, 2220.8181818181815], [65.0, 2250.391304347826], [66.0, 2563.9130434782605], [67.0, 2433.8157894736833], [68.0, 2487.772727272727], [69.0, 2573.1111111111113], [70.0, 2465.6530612244896], [71.0, 2467.954545454545], [72.0, 2722.5238095238096], [73.0, 2726.9230769230767], [74.0, 2533.960000000001], [75.0, 2557.291666666667], [76.0, 2758.1999999999994], [77.0, 3035.9999999999995], [78.0, 2856.8113207547162], [79.0, 3586.0], [80.0, 2792.3199999999997], [81.0, 2954.62962962963], [82.0, 2946.571428571428], [83.0, 3123.655172413793], [84.0, 3153.066666666667], [85.0, 3066.2692307692305], [86.0, 3061.2903225806454], [87.0, 3140.0], [88.0, 3096.6451612903224], [89.0, 3128.7333333333336], [90.0, 2908.0967741935488], [91.0, 3203.2058823529414], [92.0, 3025.242424242424], [93.0, 3025.9090909090914], [94.0, 3240.4054054054063], [95.0, 3565.0], [96.0, 3775.3421052631566], [97.0, 3970.7096774193556], [98.0, 3768.625], [99.0, 3545.2978723404262], [100.0, 3585.903295128941], [1.0, 741.0]], "isOverall": false, "label": "Config #3", "isController": false}, {"data": [[71.55592697351516, 2633.245307276927]], "isOverall": false, "label": "Config #3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2173.5, "minX": 1.7788068E12, "maxY": 6271.65, "series": [{"data": [[1.7788068E12, 3118.5], [1.77880686E12, 6271.65], [1.77880692E12, 5582.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7788068E12, 2173.5], [1.77880686E12, 4371.15], [1.77880692E12, 3890.8333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77880692E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1041.0049382716052, "minX": 1.7788068E12, "maxY": 3564.7613793103465, "series": [{"data": [[1.7788068E12, 1041.0049382716052], [1.77880686E12, 2595.809085328418], [1.77880692E12, 3564.7613793103465]], "isOverall": false, "label": "Config #3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77880692E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1040.8938271604925, "minX": 1.7788068E12, "maxY": 3564.7337931034463, "series": [{"data": [[1.7788068E12, 1040.8938271604925], [1.77880686E12, 2595.7722529158987], [1.77880692E12, 3564.7337931034463]], "isOverall": false, "label": "Config #3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77880692E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.10620012277470844, "minX": 1.7788068E12, "maxY": 0.18888888888888886, "series": [{"data": [[1.7788068E12, 0.18888888888888886], [1.77880686E12, 0.10620012277470844], [1.77880692E12, 0.12275862068965514]], "isOverall": false, "label": "Config #3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77880692E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 563.0, "minX": 1.7788068E12, "maxY": 800.0, "series": [{"data": [[1.7788068E12, 800.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7788068E12, 775.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7788068E12, 800.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7788068E12, 789.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7788068E12, 563.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7788068E12, 677.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7788068E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 570.0, "minX": 1.0, "maxY": 3746.0, "series": [{"data": [[2.0, 652.5], [8.0, 574.0], [9.0, 582.0], [10.0, 601.5], [12.0, 632.0], [13.0, 612.0], [15.0, 646.5], [4.0, 600.0], [16.0, 688.5], [18.0, 750.0], [19.0, 740.0], [5.0, 570.0], [22.0, 775.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 2009.0], [33.0, 3522.0], [2.0, 2670.0], [35.0, 3732.0], [34.0, 3693.0], [37.0, 3667.0], [36.0, 3721.0], [38.0, 3725.0], [39.0, 3746.0], [41.0, 2112.0], [40.0, 2338.0], [44.0, 2664.5], [4.0, 2908.5], [15.0, 2315.0], [1.0, 2726.0], [17.0, 2431.0], [18.0, 845.5], [19.0, 1627.0], [20.0, 1250.0], [21.0, 1943.0], [22.0, 1733.0], [23.0, 2174.0], [24.0, 1863.5], [25.0, 2024.0], [26.0, 1892.0], [27.0, 2224.0], [28.0, 1440.0], [29.0, 2437.0], [30.0, 3087.5], [31.0, 3159.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 44.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 570.0, "minX": 1.0, "maxY": 3745.0, "series": [{"data": [[2.0, 644.5], [8.0, 574.0], [9.0, 582.0], [10.0, 601.0], [12.0, 631.5], [13.0, 612.0], [15.0, 646.5], [4.0, 600.0], [16.0, 688.5], [18.0, 750.0], [19.0, 740.0], [5.0, 570.0], [22.0, 775.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 2009.0], [33.0, 3522.0], [2.0, 2670.0], [35.0, 3732.0], [34.0, 3693.0], [37.0, 3667.0], [36.0, 3721.0], [38.0, 3725.0], [39.0, 3745.0], [41.0, 2112.0], [40.0, 2337.5], [44.0, 2664.5], [4.0, 2908.5], [15.0, 2315.0], [1.0, 2726.0], [17.0, 2431.0], [18.0, 845.0], [19.0, 1627.0], [20.0, 1250.0], [21.0, 1943.0], [22.0, 1733.0], [23.0, 2174.0], [24.0, 1863.5], [25.0, 2024.0], [26.0, 1892.0], [27.0, 2224.0], [28.0, 1440.0], [29.0, 2437.0], [30.0, 3087.5], [31.0, 3159.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 44.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 14.2, "minX": 1.7788068E12, "maxY": 28.116666666666667, "series": [{"data": [[1.7788068E12, 14.2], [1.77880686E12, 28.116666666666667], [1.77880692E12, 22.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77880692E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 13.5, "minX": 1.7788068E12, "maxY": 27.15, "series": [{"data": [[1.7788068E12, 13.5], [1.77880686E12, 27.15], [1.77880692E12, 24.166666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77880692E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.2, "minX": 1.7788068E12, "maxY": 27.15, "series": [{"data": [[1.7788068E12, 3.2]], "isOverall": false, "label": "Config #3-success", "isController": false}, {"data": [[1.7788068E12, 10.3], [1.77880686E12, 27.15], [1.77880692E12, 24.166666666666668]], "isOverall": false, "label": "Config #3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77880692E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.2, "minX": 1.7788068E12, "maxY": 27.15, "series": [{"data": [[1.7788068E12, 3.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7788068E12, 10.3], [1.77880686E12, 27.15], [1.77880692E12, 24.166666666666668]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77880692E12, "title": "Total Transactions Per Second"}},
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

