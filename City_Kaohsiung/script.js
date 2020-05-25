// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
am4core.options.autoSetClassName = true;

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

chart.colors.step = 2;
chart.maskBullets = false;

// ADD Data
chart.data = [
{"YYYY":"2012","套房(1房1廳1衛)":1500712,"店面(店鋪)":20695093,"透天厝":9472700,"大樓":6722167},
{"YYYY":"2013","套房(1房1廳1衛)":1474463,"店面(店鋪)":20668788,"透天厝":9952556,"大樓":6415914},
{"YYYY":"2014","套房(1房1廳1衛)":1586048,"店面(店鋪)":20539083,"透天厝":9972877,"大樓":7042896},
{"YYYY":"2015","套房(1房1廳1衛)":1474375,"店面(店鋪)":19381468,"透天厝":9928756,"大樓":7025877},
{"YYYY":"2016","套房(1房1廳1衛)":1362041,"店面(店鋪)":22036539,"透天厝":9964816,"大樓":7199017},
{"YYYY":"2017","套房(1房1廳1衛)":1421900,"店面(店鋪)":22099599,"透天厝":10357595,"大樓":7380543},
{"YYYY":"2018","套房(1房1廳1衛)":1405928,"店面(店鋪)":21317402,"透天厝":10666824,"大樓":7256614},
{"YYYY":"2019","套房(1房1廳1衛)":1717341,"店面(店鋪)":34239710,"透天厝":11015463,"大樓":7672552}
];


// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.dataFields.category = "category";
dateAxis.renderer.grid.template.location = 0;
dateAxis.renderer.minGridDistance = 50;
dateAxis.renderer.grid.template.disabled = true;
dateAxis.renderer.fullWidthTooltip = true;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "平均房價";
valueAxis.renderer.grid.template.disabled = true;

// Create series
var Series1 = chart.series.push(new am4charts.LineSeries());
Series1.id = "g1";
Series1.dataFields.valueY = "店面(店鋪)";
Series1.dataFields.dateX = "YYYY";
Series1.yAxis = valueAxis;
Series1.tooltipText = "店面:{valueY}";
Series1.name = "店面(店鋪)";

var latitudeBullet = Series1.bullets.push(new am4charts.Bullet());
latitudeBullet.propertyFields.rotation = "angle";
var arrow = latitudeBullet.createChild(am4core.Triangle);
arrow.horizontalCenter = "middle";
arrow.verticalCenter = "middle";
arrow.stroke = am4core.color("#fff");
arrow.direction = "top";
arrow.width = 15;
arrow.height = 15;

var Series3 = chart.series.push(new am4charts.LineSeries());
// Series3.id = "g2";
Series3.dataFields.valueY = "透天厝";
Series3.dataFields.dateX = "YYYY";
Series3.yAxis = valueAxis;
Series3.name = "透天厝";
Series3.tooltipText = "透天厝:{valueY}";

var latitudeBullet = Series3.bullets.push(new am4charts.CircleBullet());
latitudeBullet.circle.fill = am4core.color("#FFF");
latitudeBullet.circle.strokeWidth = 2;

var Series4 = chart.series.push(new am4charts.LineSeries());
Series4.id = "g3";
Series4.dataFields.valueY = "大樓";
Series4.dataFields.dateX = "YYYY";
Series4.yAxis = valueAxis;
Series4.tooltipText = "大樓:{valueY}";
Series4.name = "大樓";

var latitudeBullet = Series4.bullets.push(new am4charts.CircleBullet());
latitudeBullet.circle.stroke = am4core.color("#fff");
latitudeBullet.circle.strokeWidth = 2;


var Series2 = chart.series.push(new am4charts.LineSeries());
Series2.id = "g4";
Series2.dataFields.valueY = "套房(1房1廳1衛)";
Series2.dataFields.dateX = "YYYY";
Series2.yAxis = valueAxis;
Series2.name = "套房(1房1廳1衛)";
Series2.strokeWidth = 2;
Series2.tooltipText = "套房:{valueY}";

var latitudeBullet = Series2.bullets.push(new am4charts.Bullet());
var square = latitudeBullet.createChild(am4core.Rectangle);
square.horizontalCenter = "middle";
square.verticalCenter = "middle";
square.width = 10;
square.height = 10;

var latitudeLabel = Series2.bullets.push(new am4charts.LabelBullet());
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