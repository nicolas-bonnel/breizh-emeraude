var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
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
   			var projection;
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
		                   .style("fill", "pink");
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
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
            var path = d3.geo.path()
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
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js.js -->\n<script src=\"bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"bower_components/angular/angular.min.js\"></script>\n<script src=\"bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
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
   			var projection;
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
		                   .style("fill", "pink");
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
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
            var path = d3.geo.path()
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
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js.js -->\n<script src=\"bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"bower_components/angular/angular.min.js\"></script>\n<script src=\"bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
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
   			var projection;
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
		                   .style("fill", "pink");
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
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
            var path = d3.geo.path()
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
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
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
   			var projection;
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
		                   .style("fill", "pink");
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
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
            var path = d3.geo.path()
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
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
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
   			var projection;
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
		                   .style("fill", "pink");
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
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
            var path = d3.geo.path()
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
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
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
   			var projection;
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
		                   .style("fill", "pink");
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
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
            var path = d3.geo.path()
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