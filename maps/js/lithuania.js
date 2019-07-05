//exmaple UK https://bost.ocks.org/mike/map/ - tutorial UK
//https://www.d3-graph-gallery.com/graph/backgroundmap_country.html -simple code
// The svg

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

// Map and projection
var projection = d3.geoMercator()
   .center([2, 47])                // GPS of location to zoom on
    .scale(500)                       // This is like the zoom
    .translate([ width/2, height/10 ])

// Load external data and boot
    d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson", function(data){
    // Filter data
    data.features = data.features.filter(function(d){console.log(d.properties.name) ; return d.properties.name=="Lithuania"})

    // Draw the map
   //var svg = d3.select("svg")
    svg.append("g")
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
          .attr("fill", "grey")
          .attr("d", d3.geoPath()
              .projection(projection)
          )
        .style("stroke", "none")
})