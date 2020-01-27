const dataArray = [
  { x: 5, y: 5 },
  { x: 8, y: 12 },
  { x: 15, y: 11 },
  { x: 20, y: 9 },
  { x: 21, y: 13 },
  { x: 26, y: 17 }
];
const interpolateTypes = [
  d3.curveLinear,
  d3.curveNatural,
  d3.curveStep,
  d3.curveBasis,
  d3.curveBundle,
  d3.curveCardinal
];
let svg = d3
  .select("body")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%");

for (let x = 0; x <= interpolateTypes.length; x++) {
  const line = d3
    .line()
    .x(function(d, i) {
      return d.x * 6;
    })
    .y(function(d, i) {
      return d.y * 4;
    })
    .curve(interpolateTypes[x]);
  let shiftX = x * 250;
  let shiftY = 0;
  let chartGroup = svg
    .append("g")
    .attr("class", "group" + x)
    .attr("transform", "translate(" + shiftX + "," + shiftY + ")");
  chartGroup
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("d", line(dataArray));

  chartGroup
    .selectAll("circle.grp" + x)
    .data(dataArray)
    .enter()
    .append("circle")
    .attr("class", function(d, i) {
      return "grp" + i;
    })
    .attr("cx", function(d, i) {
      return d.x * 6;
    })
    .attr("cy", function(d, i) {
      return d.y * 4;
    })
    .attr("r", "2");
}
