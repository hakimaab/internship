dividecommunes();
	function dividecommunes(){
	var svg = d3.select(map.getPanes().overlayPane).append("svg"),
	g = svg.append("g").attr("class", "leaflet-zoom-hide");
    var promises = [];
    promises.push(d3.json("http://localhost:8080/send"));
    promises.push(d3.json("regions.json"));
    promises.push(d3.json("departments.json"));
    Promise.all(promises).then(function(values) {
    const geojson = values[0]; // Récupération de la première promesse : le contenu du fichier JSON
	const regions= values[1]; 
	const depts=values[2];
    //  create a d3.geo.path to convert GeoJSON to SVG
    var transform = d3.geo.transform({point: projectPoint}),
		  path = d3.geo.path().projection(transform);
    // create path elements for each of the features
    d3_features = g.selectAll("path")
      .data(topojson.feature(geojson,geojson.objects.custom).features)
      .enter()
    .append("path");
    map.on("viewreset", reset);
  reset();

  // fit the SVG element to leaflet's map layer
  var tooltip = d3.select("body").append("div")   
                  .attr("class", "tooltip")               
                 .style("opacity", 1);
  function reset() {
      bounds = path.bounds(topojson.feature(geojson,geojson.objects.custom));
      var topLeft = bounds[0],
      bottomRight = bounds[1];
      svg .attr("width", bottomRight[0] - topLeft[0])
          .attr("height", bottomRight[1] - topLeft[1])
          .style("left", topLeft[0] + "px")
          .style("top", topLeft[1] + "px")
      g .attr("transform", "translate(" + -topLeft[0] + "," 
										+ -topLeft[1] + ")");
       
         d3_features.attr('id', function(d) {return "d" + d.properties.insee;})
					.attr("d", path)
         d3.csv("http://localhost:8080/sendfile").then(function(csv) {
         csv.forEach(function(e,i) {
          d3.select("#d" + e.Code_Insee)
              .attr("class", function() {
				   if(e.Indicateur_Precarite<=-2.5){
                         return "q0-5";
				   }
				   else{
					if(-2.5<e.Indicateur_Precarite){
						if(e.Indicateur_Precarite<=0.1){
							return "q1-5";
						}
						else{
							if(e.Indicateur_Precarite<=3.1){
							return "q2-5";
            }
            else{
              return "q4-5";
            }	
					}	
					}
           }
        })
       
       .on("mouseover", function(d) {
            tooltip.transition()        
                .duration(200)      
                .style("opacity",1);
            tooltip.html("<div class='commune'>"  +e.NomCommune + "</div>"
                    + "<b>part non diplômés : </b>" + e.PeuNonDiplomes+ "<br>"
                    + "<b>part + de 65 ans: </b>" + e.Age+ "<br>"
                    + "<b>Salaire net: </b>" + e.Salaire_net_horaire_moyen+ "<br>"
                    + "<b>part des ménages de 1 personne: </b>" + e.Menageisolee+ "<br>"
                    + "<b>Part des Neets: </b>" + e.Neets+ "<br>"
                    + "<b>ind. de précarité numérique: </b>" + e.Indicateur_Precarite + "<br>")
                .style("left", (d3.event.pageX-120) + "px")     
                .style("top", (d3.event.pageY-120) + "px");
        })
       .on("mouseout", function(d) {
                tooltip.style("opacity", 0);
                tooltip.html("")
                    .style("left", "-500px")
                    .style("top", "-500px");
        });
			});
     });
           map.on('zoomend', function() {
            tooltip.html("")
                    .style("left", "-500px")
                    .style("top", "-500px");
             var currentZoom = map.getZoom();
               if (currentZoom>8) { 
            }

         });
       } 
  function projectPoint(x, y) {
      var point = map.latLngToLayerPoint(new L.LatLng(y, x));
      this.stream.point(point.x, point.y);
  }
})
}