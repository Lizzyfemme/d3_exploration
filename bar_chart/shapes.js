const dataArray = [5, 8, 11];
let svg = d3
  .select("body")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%");

svg
  .selectAll("rect")
  .data(dataArray)
  .enter()
  .append("rect")
  .attr("height", function(d, i) {
    return d * 15;
  })
  .attr("fill", "teal")
  .attr("width", "50")
  .attr("x", function(d, i) {
    return 60 * i;
  })
  .attr("y", function(d, i) {
    return 300 - d * 15;
  });
let xCircleAxis = 300;
svg
  .selectAll("circle.circle")
  .data(dataArray)
  .enter()
  .append("circle")
  .attr("cx", function(d, i) {
    xCircleAxis += d * 3 + i * 20;
    return xCircleAxis;
  })
  .attr("cy", "100")
  .attr("class", "circle")
  .attr("r", function(d, i) {
    return d * 3;
  });

let xEllipseAxis = 600;
svg
  .selectAll("ellipse.ellipse")
  .data(dataArray)
  .enter()
  .append("ellipse")
  .attr("cx", function(d, i) {
    xEllipseAxis += d * 3 + i * 20;
    return xEllipseAxis;
  })
  .attr("cy", "100")
  .attr("class", "ellipse")
  .attr("rx", function(d, i) {
    return d * 3;
  })
  .attr("ry", "50");
