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
const height = 200;
const width = 500;
const area = d3
  .area()
  .x(function(d, i) {
    return i * 20;
  })
  .y0(height)
  .y1(function(d) {
    return height - d;
  });
const svg = d3
  .select("body")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%");

svg.append("path").attr("d", area(dataArray));
