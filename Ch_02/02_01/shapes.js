const dataArray = [5, 8, 11];
let svg = d3
  .select("body")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%");

svg
  .selectAll("circle")
  .data(dataArray)
  .enter()
  .append("circle")
  .attr("cx", "")
  .attr("cy", "")
  .attr("r", "");
