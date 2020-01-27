const dataArray = [
  { x: 5, y: 5 },
  { x: 8, y: 12 },
  { x: 15, y: 11 },
  { x: 20, y: 9 },
  { x: 21, y: 13 },
  { x: 26, y: 17 }
];
let svg = d3
  .select("body")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%");
const line = d3
  .line()
  .x(function(d, i) {
    return d.x * 6;
  })
  .y(function(d, i) {
    return d.y * 4;
  })
  .curve(d3.curveCardinal);
svg
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "blue")
  .attr("d", line(dataArray));

svg
  .selectAll("circle")
  .data(dataArray)
  .enter()
  .append("circle")
  .attr("cx", function(d, i) {
    return d.x * 6;
  })
  .attr("cy", function(d, i) {
    return d.y * 4;
  })
  .attr("r", "2");
