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
{"YYYY":"2012","套房(1房1廳1衛)":2113524,"店面(店鋪)":14237157,"透天厝":8470588,"大樓":7557571},
{"YYYY":"2013","套房(1房1廳1衛)":2288406,"店面(店鋪)":18236701,"透天厝":9285228,"大樓":7909071},
{"YYYY":"2014","套房(1房1廳1衛)":2467525,"店面(店鋪)":19154487,"透天厝":9761513,"大樓":8096301},
{"YYYY":"2015","套房(1房1廳1衛)":2287817,"店面(店鋪)":17078117,"透天厝":10261970,"大樓":8202049},
{"YYYY":"2016","套房(1房1廳1衛)":2273678,"店面(店鋪)":22669219,"透天厝":10557068,"大樓":8329039},
{"YYYY":"2017","套房(1房1廳1衛)":2657159,"店面(店鋪)":19942603,"透天厝":10473293,"大樓":8346877},
{"YYYY":"2018","套房(1房1廳1衛)":2645908,"店面(店鋪)":18705986,"透天厝":10322345,"大樓":8389127},
{"YYYY":"2019","套房(1房1廳1衛)":2704756,"店面(店鋪)":19759657,"透天厝":10259382,"大樓":8263687}
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