var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute',
	'angular-loading-bar',
	'ngAnimate'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/projet', {
			templateUrl: 'views/projet.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.filteredData = {};

	$scope.getData = function(url,presentation,site){
		$scope.site = site;
		$scope.currentUrl = url;
		$scope.presentation = presentation;
		var tUrl = '';
		if(presentation.slider){
			tUrl = '&$filter='+presentation.slider.field+' eq \''+presentation.slider.value+'\''
		}
		$http.get(url+'?$top=500'+(presentation.tailUrl?presentation.tailUrl:'')+tUrl).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};

	$scope.$watch('presentation.slider.value',function(newVal){
		if(newVal)
		$scope.getData($scope.currentUrl,$scope.presentation,$scope.site);
	});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/orange-theme.css\">\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"../bower_components/angular-loading-bar/build/loading-bar.min.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/angular-loading-bar/build/loading-bar.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div class=\"spinner\" ng-show=\"isSomethingLoading\"></div>\n <md-toolbar md-theme=\"orange\" class=\"md-medium-tall\">\n      <h1 class=\"md-toolbar-tools md-toolbar-tools-top\" style=\"font-size:32px;color:white;text-transform: uppercase\">Breizh Data Emeraude</h1>\n      <a href=\"#/projet\" layout-align=\"end\" class=\"md-toolbar-tools md-toolbar-tools-bottom\" style=\"font-size:24;color:white\">Le projet</a>\n  </md-toolbar>\n <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n      <span class=\"md-toolbar-tools\">{{category.name}}</span>\n  </md-toolbar>\n  <md-content layout=\"column\">\n  <small ng-repeat=\"dataset in category.datasets\">\n    <md-button ng-click=\"getData(site.url+dataset.id,dataset,site.name);\">\n{{dataset.name}}\n    </md-button>\n   </small>\n  </md-content>\n </div>\n </div>\n </div>\n<md-content flex=\"75\" class=\"md-padding\">\n<h2>{{presentation.name}}</h2>\n<map-emeraude data=\"data\" presentation=\"presentation\" filtered-data=\"filteredData\">\n\n</map-emeraude>\n<div ng-if=\"presentation.slider\">\n	<div ng-if=\"presentation.slider\">Année {{presentation.slider.value}}</div>\n\n	 <md-slider md-discrete ng-model=\"presentation.slider.value\" step=\"1\" min=\"{{presentation.slider.min}}\" max=\"{{presentation.slider.max}}\" aria-label=\"rating\">\n    </md-slider>\n</div>\n<div ng-if=\"site\">Les données proviennent du site {{site}}</div>\n<md-toolbar layout=\"row\">\n      <span class=\"md-toolbar-tools\" ng-repeat=\"(k,d) in filteredData[0]\" ng-if=\"k!=\'__metadata\'\" style=\"font-size:10px\" flex>{{k}}</span>\n  </md-toolbar>\n <div layout=\"column\">\n 	<div ng-repeat=\"dat in filteredData\" layout=\"row\">\n 		<div ng-repeat=\"(k,d) in dat\" ng-if=\"k!=\'__metadata\'\" style=\"font-size:10px\" flex>{{d}}</div>\n 	</div>\n </div>\n\n</md-content>\n </div>\n  <md-toolbar class=\"md-medium-tall\">\n      <span class=\"md-toolbar-tools md-toolbar-tools-top\" >Data Emeraude</span>\n  </md-toolbar>\n  \n");
$templateCache.put("views/projet.html"," <div class=\"spinner\" ng-show=\"isSomethingLoading\"></div>\n <md-toolbar md-theme=\"orange\" class=\"md-medium-tall\">\n      <h1 class=\"md-toolbar-tools md-toolbar-tools-top\" style=\"font-size:32px;color:white;text-transform: uppercase\">Le projet</h1>\n      <a href=\"#/\" layout-align=\"end\" class=\"md-toolbar-tools md-toolbar-tools-bottom\" style=\"font-size:24;color:white\">Breizh Data Emeraude</a>\n  </md-toolbar>\n\n  <md-toolbar class=\"md-medium-tall\">\n      <span class=\"md-toolbar-tools md-toolbar-tools-top\" >Data Emeraude</span>\n  </md-toolbar>\n  \n");}]);
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'=',
			filteredData:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
   			var inseeColor = {};
   			var jsonCommunes;
   			var jsonFeat;
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
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					svg.selectAll("circle").remove();
   					if(scope.presentation.inseeColor){
   						var max=0, min = 1e10;
   						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
							var val = parseFloat(v[scope.presentation.inseeColor.field]);
							if(scope.presentation.inseeColor.field.divideByPop)
								val = val / parseFloat(communes[c[scope.presentation.insee]].Population);
							communes[v[scope.presentation.insee]].data = val	
							max = Math.max(max,val)
							min = Math.min(min,val)
						});
						scope.filteredData = newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						});
						jsonFeat.forEach(function(v){
							v.data = (communes[v.properties['CODE INSEE']].data-min)/(max-min);
						});
						jsonCommunes.transition().duration(1000).style("fill", function(d){
							if(!d.data)
								 return d3.hsl(120, 0.0, 0.7);
							else
                   				return d3.hsl(120, 0.4, parseFloat(d.data)); 
                   		});
   					}
   					// does not work for the moment
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.forEach(function(v){
   							v.geometry = JSON.parse(v.geometry);
   							v.type = "Feature";
   						}); 
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
	   					scope.filteredData = newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						});
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
            	jsonFeat = json.features;
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

                 d3.json("data/bretagne.geojson", function(jsonBzh) {
                	 d3.json("data/dpt50.geojson", function(json50) {
                 		 svg.selectAll("path35")
		                   .data([jsonBzh,json50])
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .style('opacity','0.2')
		                   .style("stroke-width", "2px")
		                   .style("stroke", "black");


		                jsonCommunes = svg.selectAll("path")
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
                });

            });

		}
	};
});