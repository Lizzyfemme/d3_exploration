const dataArray = [5, 8, 11];
const dataDays = ["Mon", "Wed", "Fri"];

// const x = d3
//   .scaleOrdinal()
//   .domain(dataDays)
//   .range([25, 85, 145]);

// const x = d3
//   .scalePoint()
//   .domain(dataDays)
//   .range([0, 170]);

const x = d3
  .scaleBand()
  .domain(dataDays)
  .range([0, 170])
  .padding(0.1176);

let xAxis = d3.axisBottom(x);

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
svg
  .append("g")
  .attr("class", "x axis hidden")
  .attr("transform", "translate(0,300)")
  .call(xAxis);
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

let xlineAxis = 900;
svg
  .selectAll("line")
  .data(dataArray)
  .enter()
  .append("line")
  .style("stroke", "green")
  .attr("stroke", "blue")
  .attr("stroke-width", 2)
  .attr("x1", xlineAxis)
  .attr("y1", function(d, i) {
    return 80 + i * 20;
  })
  .attr("x2", function(d) {
    return xlineAxis + d * 15;
  })
  .attr("y2", function(d, i) {
    return 80 + i * 20;
  });
svg
  .append("text")
  .attr("x", xlineAxis)
  .attr("y", 150)
  .attr("fill", "green")
  .attr("stroke", "blue")
  .attr("stroke-width", "2")
  .attr("font-size", "30")
  .attr("text-anchor", "start")
  .text("Rock on gold dust woman");
svg
  .append("text")
  .attr("x", xlineAxis)
  .attr("y", 190)
  .attr("fill", "green")
  .attr("stroke", "none")
  .attr("font-size", "30")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "middle")
  .text("Take your sliver spoon");
svg
  .append("text")
  .attr("x", xlineAxis)
  .attr("y", 230)
  .attr("fill", "teal")
  .attr("stroke", "none")
  .attr("font-size", "30")
  .attr("text-anchor", "end")
  .attr("dominant-baseline", "middle")
  .text("Dig your grave");
svg
  .append("line")
  .attr("x1", xlineAxis)
  .attr("y2", "150")
  .attr("x2", xlineAxis)
  .attr("y2", "230")
  .attr("stroke", "red")
  .attr("dominant-baseline", "middle")
  .attr("stroke-width", 2);
const textArray = [
  "Did she make you cry?",
  "make you break down?",
  "Shatter your illusions of love ?"
];
svg
  .append("text")
  .selectAll("tspan")
  .data(textArray)
  .enter()
  .append("tspan")
  .attr("x", "600")
  .attr("y", function(d, i) {
    return 300 + i * 30;
  })
  .attr("font-size", "30")
  .attr("text-anchor", "end")
  .attr("dominant-baseline", "middle")
  .text(function(d) {
    return d;
  });
