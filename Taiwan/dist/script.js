/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

am4core.options.autoSetClassName = true;

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

chart.colors.step = 2;
chart.maskBullets = false;

// Add data
chart.data = [
{"YYYYMM":"2012-01","STOCK":7517.08,"AVG_PRICE":13557486.0},
{"YYYYMM":"2012-02","STOCK":8121.44,"AVG_PRICE":16470607.0,"SALARY":133393.0},
{"YYYYMM":"2012-03","STOCK":7933.0,"AVG_PRICE":17569540.0},
{"YYYYMM":"2012-04","STOCK":7501.72,"AVG_PRICE":20622823.0},
{"YYYYMM":"2012-05","STOCK":7301.5,"AVG_PRICE":18933108.0,"SALARY":130318.0},
{"YYYYMM":"2012-06","STOCK":7296.28,"AVG_PRICE":19112442.0},
{"YYYYMM":"2012-07","STOCK":7270.49,"AVG_PRICE":19656629.0},
{"YYYYMM":"2012-08","STOCK":7397.06,"AVG_PRICE":17630558.0,"SALARY":136296.0},
{"YYYYMM":"2012-09","STOCK":7715.16,"AVG_PRICE":12390762.0},
{"YYYYMM":"2012-10","STOCK":7166.05,"AVG_PRICE":11219084.0},
{"YYYYMM":"2012-11","STOCK":7580.17,"AVG_PRICE":10468900.0,"SALARY":137014.0},
{"YYYYMM":"2012-12","STOCK":7699.5,"AVG_PRICE":11821288.0},
{"YYYYMM":"2013-01","STOCK":7850.02,"AVG_PRICE":10717832.0},
{"YYYYMM":"2013-02","STOCK":7897.98,"AVG_PRICE":11752980.0,"SALARY":139023.0},
{"YYYYMM":"2013-03","STOCK":7918.61,"AVG_PRICE":10676331.0},
{"YYYYMM":"2013-04","STOCK":8093.66,"AVG_PRICE":11410781.0},
{"YYYYMM":"2013-05","STOCK":8254.8,"AVG_PRICE":11540131.0,"SALARY":136317.0},
{"YYYYMM":"2013-06","STOCK":8062.21,"AVG_PRICE":11499325.0},
{"YYYYMM":"2013-07","STOCK":8107.94,"AVG_PRICE":11703673.0},
{"YYYYMM":"2013-08","STOCK":8021.89,"AVG_PRICE":10898942.0,"SALARY":143769.0},
{"YYYYMM":"2013-09","STOCK":8173.87,"AVG_PRICE":11470319.0},
{"YYYYMM":"2013-10","STOCK":8450.06,"AVG_PRICE":11931997.0},
{"YYYYMM":"2013-11","STOCK":8406.83,"AVG_PRICE":12731249.0,"SALARY":146089.0},
{"YYYYMM":"2013-12","STOCK":8611.51,"AVG_PRICE":12547594.0},
{"YYYYMM":"2014-01","STOCK":8462.57,"AVG_PRICE":11296641.0},
{"YYYYMM":"2014-02","STOCK":8639.58,"AVG_PRICE":11558251.0,"SALARY":147923.0},
{"YYYYMM":"2014-03","STOCK":8849.28,"AVG_PRICE":11547399.0},
{"YYYYMM":"2014-04","STOCK":8791.44,"AVG_PRICE":12134618.0},
{"YYYYMM":"2014-05","STOCK":9075.91,"AVG_PRICE":12170305.0,"SALARY":148307.0},
{"YYYYMM":"2014-06","STOCK":9393.07,"AVG_PRICE":12174676.0},
{"YYYYMM":"2014-07","STOCK":9315.85,"AVG_PRICE":12329929.0},
{"YYYYMM":"2014-08","STOCK":9436.27,"AVG_PRICE":11723135.0,"SALARY":154111.0},
{"YYYYMM":"2014-09","STOCK":8966.92,"AVG_PRICE":11501106.0},
{"YYYYMM":"2014-10","STOCK":8974.76,"AVG_PRICE":12076118.0},
{"YYYYMM":"2014-11","STOCK":9187.15,"AVG_PRICE":11870608.0,"SALARY":156923.0},
{"YYYYMM":"2014-12","STOCK":9307.26,"AVG_PRICE":12778170.0},
{"YYYYMM":"2015-01","STOCK":9361.91,"AVG_PRICE":11235170.0},
{"YYYYMM":"2015-02","STOCK":9622.1,"AVG_PRICE":11955158.0,"SALARY":161809.0},
{"YYYYMM":"2015-03","STOCK":9586.44,"AVG_PRICE":11611683.0},
{"YYYYMM":"2015-04","STOCK":9820.05,"AVG_PRICE":11368906.0},
{"YYYYMM":"2015-05","STOCK":9701.07,"AVG_PRICE":11484606.0,"SALARY":153007.0},
{"YYYYMM":"2015-06","STOCK":9323.02,"AVG_PRICE":11817381.0},
{"YYYYMM":"2015-07","STOCK":8665.34,"AVG_PRICE":11722394.0},
{"YYYYMM":"2015-08","STOCK":8174.92,"AVG_PRICE":11730899.0,"SALARY":155723.0},
{"YYYYMM":"2015-09","STOCK":8181.24,"AVG_PRICE":11751652.0},
{"YYYYMM":"2015-10","STOCK":8554.31,"AVG_PRICE":11895916.0},
{"YYYYMM":"2015-11","STOCK":8320.61,"AVG_PRICE":12704799.0,"SALARY":162828.0},
{"YYYYMM":"2015-12","STOCK":8338.06,"AVG_PRICE":14870882.0},
{"YYYYMM":"2016-01","STOCK":8145.21,"AVG_PRICE":11024657.0},
{"YYYYMM":"2016-02","STOCK":8411.16,"AVG_PRICE":10865169.0,"SALARY":162832.0},
{"YYYYMM":"2016-03","STOCK":8744.83,"AVG_PRICE":10821592.0},
{"YYYYMM":"2016-04","STOCK":8377.9,"AVG_PRICE":11332010.0},
{"YYYYMM":"2016-05","STOCK":8535.59,"AVG_PRICE":12270234.0,"SALARY":157784.0},
{"YYYYMM":"2016-06","STOCK":8666.58,"AVG_PRICE":11215303.0},
{"YYYYMM":"2016-07","STOCK":8984.41,"AVG_PRICE":12796070.0},
{"YYYYMM":"2016-08","STOCK":9068.85,"AVG_PRICE":12015428.0,"SALARY":159941.0},
{"YYYYMM":"2016-09","STOCK":9166.85,"AVG_PRICE":11533890.0},
{"YYYYMM":"2016-10","STOCK":9290.12,"AVG_PRICE":10855812.0},
{"YYYYMM":"2016-11","STOCK":9240.71,"AVG_PRICE":11883388.0,"SALARY":170297.0},
{"YYYYMM":"2016-12","STOCK":9253.5,"AVG_PRICE":11885348.0},
{"YYYYMM":"2017-01","STOCK":9447.95,"AVG_PRICE":11103760.0},
{"YYYYMM":"2017-02","STOCK":9750.47,"AVG_PRICE":11483100.0,"SALARY":166487.0},
{"YYYYMM":"2017-03","STOCK":9811.52,"AVG_PRICE":11595521.0},
{"YYYYMM":"2017-04","STOCK":9872.0,"AVG_PRICE":11143407.0},
{"YYYYMM":"2017-05","STOCK":10040.72,"AVG_PRICE":11275519.0,"SALARY":159072.0},
{"YYYYMM":"2017-06","STOCK":10395.07,"AVG_PRICE":11565930.0},
{"YYYYMM":"2017-07","STOCK":10427.33,"AVG_PRICE":12067738.0},
{"YYYYMM":"2017-08","STOCK":10585.78,"AVG_PRICE":11761364.0,"SALARY":163366.0},
{"YYYYMM":"2017-09","STOCK":10383.94,"AVG_PRICE":11620792.0},
{"YYYYMM":"2017-10","STOCK":10793.8,"AVG_PRICE":12244346.0},
{"YYYYMM":"2017-11","STOCK":10560.44,"AVG_PRICE":11465988.0,"SALARY":179020.0},
{"YYYYMM":"2017-12","STOCK":10642.86,"AVG_PRICE":12125279.0},
{"YYYYMM":"2018-01","STOCK":11103.79,"AVG_PRICE":11689129.0},
{"YYYYMM":"2018-02","STOCK":10815.47,"AVG_PRICE":11752013.0,"SALARY":169627.0},
{"YYYYMM":"2018-03","STOCK":10919.49,"AVG_PRICE":11568013.0},
{"YYYYMM":"2018-04","STOCK":10657.88,"AVG_PRICE":11939195.0},
{"YYYYMM":"2018-05","STOCK":10874.96,"AVG_PRICE":11703164.0,"SALARY":163500.0},
{"YYYYMM":"2018-06","STOCK":10836.91,"AVG_PRICE":13009554.0},
{"YYYYMM":"2018-07","STOCK":11057.51,"AVG_PRICE":11549831.0},
{"YYYYMM":"2018-08","STOCK":11063.94,"AVG_PRICE":11539719.0,"SALARY":165565.0},
{"YYYYMM":"2018-09","STOCK":11006.34,"AVG_PRICE":12064309.0},
{"YYYYMM":"2018-10","STOCK":9802.13,"AVG_PRICE":11760385.0},
{"YYYYMM":"2018-11","STOCK":9888.03,"AVG_PRICE":12204010.0,"SALARY":179541.0},
{"YYYYMM":"2018-12","STOCK":9727.41,"AVG_PRICE":12220854.0},
{"YYYYMM":"2019-01","STOCK":9932.26,"AVG_PRICE":12010474.0},
{"YYYYMM":"2019-02","STOCK":10389.17,"AVG_PRICE":11960244.0,"SALARY":168044.0},
{"YYYYMM":"2019-03","STOCK":10641.04,"AVG_PRICE":11802188.0},
{"YYYYMM":"2019-04","STOCK":10967.73,"AVG_PRICE":12039843.0},
{"YYYYMM":"2019-05","STOCK":10498.49,"AVG_PRICE":12460570.0,"SALARY":167841.0},
{"YYYYMM":"2019-06","STOCK":10730.83,"AVG_PRICE":12125484.0},
{"YYYYMM":"2019-07","STOCK":10823.81,"AVG_PRICE":12241931.0},
{"YYYYMM":"2019-08","STOCK":10618.05,"AVG_PRICE":11465175.0,"SALARY":168613.0},
{"YYYYMM":"2019-09","STOCK":10829.68,"AVG_PRICE":11302084.0},
{"YYYYMM":"2019-10","STOCK":11358.71,"AVG_PRICE":11020125.0},
{"YYYYMM":"2019-11","STOCK":11489.57,"AVG_PRICE":3877667.0,"SALARY":182578.0}
];

// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.dataFields.category = "category";
dateAxis.renderer.grid.template.location = 0;
dateAxis.renderer.minGridDistance = 50;
dateAxis.renderer.grid.template.disabled = true;
dateAxis.renderer.fullWidthTooltip = true;

var distanceAxis = chart.yAxes.push(new am4charts.ValueAxis());
distanceAxis.title.text = "平均房價";
distanceAxis.renderer.grid.template.disabled = true;

var durationAxis = chart.yAxes.push(new am4charts.ValueAxis());
durationAxis.title.text = "平均股市";
// durationAxis.baseUnit = "hour";
durationAxis.renderer.grid.template.disabled = true;
durationAxis.renderer.opposite = true;

// durationAxis.durationFormatter.durationFormat = "";

var latitudeAxis = chart.yAxes.push(new am4charts.ValueAxis());
latitudeAxis.renderer.grid.template.disabled = true;
latitudeAxis.renderer.labels.template.disabled = true;

// Create series
var distanceSeries = chart.series.push(new am4charts.ColumnSeries());
distanceSeries.id = "g1";
distanceSeries.dataFields.valueY = "AVG_PRICE";
distanceSeries.dataFields.dateX = "YYYYMM";
distanceSeries.yAxis = distanceAxis;
distanceSeries.tooltipText = "{valueY}";
distanceSeries.name = "平均房價";
distanceSeries.columns.template.fillOpacity = 0.7;

var disatnceState = distanceSeries.columns.template.states.create("hover");
disatnceState.properties.fillOpacity = 0.9;

var durationSeries = chart.series.push(new am4charts.LineSeries());
durationSeries.id = "g3";
durationSeries.dataFields.valueY = "STOCK";
durationSeries.dataFields.dateX = "YYYYMM";
durationSeries.yAxis = durationAxis;
durationSeries.name = "股市";
durationSeries.strokeWidth = 2;
durationSeries.tooltipText = "{valueY}";

var durationBullet = durationSeries.bullets.push(new am4charts.Bullet());
var durationRectangle = durationBullet.createChild(am4core.Rectangle);
durationBullet.horizontalCenter = "middle";
durationBullet.verticalCenter = "middle";
durationBullet.width = 7;
durationBullet.height = 7;
durationRectangle.width = 7;
durationRectangle.height = 7;

var durationState = durationBullet.states.create("hover");
durationState.properties.scale = 1.2;

var latitudeSeries = chart.series.push(new am4charts.LineSeries());
latitudeSeries.id = "g2";
latitudeSeries.dataFields.valueY = "SALARY";
latitudeSeries.dataFields.dateX = "YYYYMM";
latitudeSeries.yAxis = latitudeAxis;
latitudeSeries.name = "國民所得";
latitudeSeries.strokeWidth = 2;
latitudeSeries.tooltipText = "國民所得: {valueY}";

var latitudeBullet = latitudeSeries.bullets.push(new am4charts.CircleBullet());
latitudeBullet.circle.fill = am4core.color("#fff");
latitudeBullet.circle.strokeWidth = 2;
// latitudeBullet.circle.propertyFields.radius = "townSize";

var latitudeState = latitudeBullet.states.create("hover");
latitudeState.properties.scale = 1.2;

var latitudeLabel = latitudeSeries.bullets.push(new am4charts.LabelBullet());
latitudeLabel.label.text = "";
latitudeLabel.label.horizontalCenter = "left";
latitudeLabel.label.dx = 14;

// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.fullWidthLineX = true;
chart.cursor.xAxis = dateAxis;
chart.cursor.lineX.strokeOpacity = 0;
chart.cursor.lineX.fill = am4core.color("#000");
chart.cursor.lineX.fillOpacity = 0.1;