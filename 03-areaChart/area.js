const dataArray = [
  12,
  16,
  20,
  25,
  18,
  16,
  20,
  21,
  26,
  25,
  28,
  32,
  36,
  27,
  29,
  31,
  35
];
const dataYears = [
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020"
];

var height = 200;
var width = 500;

var margin = { left: 50, right: 50, top: 40, bottom: 0 };

var y = d3
  .scaleLinear()
  .domain([0, 180])
  .range([height, 0]);

var yAxis = d3.axisLeft(y);

var area = d3
  .area()
  .x(function(d, i) {
    return i * 20;
  })
  .y0(height)
  .y1(function(d) {
    return y(d);
  });
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%");
var chartGroup = svg
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

chartGroup.append("path").attr("d", area(dataArray));
chartGroup
  .append("g")
  .attr("class", "axis y")
  .call(yAxis);
