angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.forEach(function(v){
   							v.geometry = JSON.parse(v.geometry);
   							v.type = "Feature";
   						}); 
   						console.log(newVal);
   						areas =  svg.selectAll("pathareas")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)		       
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});