var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute',
	'angular-loading-bar',
	'ngAnimate',
	'truncate'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/projet', {
			templateUrl: 'views/projet.html'
		})
		.when('/opendata', {
			templateUrl: 'views/opendata.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http, $location){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.$root.embedded = $location.search().embedded;

	var baseUrl = $location.absUrl().split('?')[0];

	$scope.shareUrl = '<iframe src="' + baseUrl+'?embedded=true'
					+'" width="100%" height="800" frameborder="0"></iframe><p><a href="'+baseUrl+'">Source</a></p>'
	
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
            var w = 880;
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
				.append("md-content")  // declare the tooltip div 
				.attr("class", "tooltip md-grey-theme")              // apply the 'tooltip' class
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
                                   .scale([35000])
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


		                var jc = jsonCommunes = svg.selectAll("path")
		                   .data(json.features)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)		      
		                   .style("fill", function(d){
		                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
		                   });

		                jc.on("mouseenter", function(d) {
		                	var st = d.properties['Nom de la commune']+'<br/>'+d.properties.Population+' hab.';		
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                jc.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});

 					});
                });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/blue-theme.css\">\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"../bower_components/angular-loading-bar/build/loading-bar.min.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n<md-toolbar class=\"md-medium-tall\" style=\"padding:10px;color:white\" ng-if=\"!embedded\">\n      <small>Cette application web a été réalisée lors du <a href=\"http://hackathon.la-matrice.org/\" style=\"color:white;\">#HACKATHON 22</a> en décembre 2014 à partir des données disponibles sur les sites <a href=\"http://datarmor.cotesdarmor.fr\" style=\"color:white;\">Datarmor</a> et <a href=\"http://www.data-tourisme-bretagne.com\" style=\"color:white;\">Bretagne tourisme</a>.</small>\n  </md-toolbar>\n</div>\n\n\n\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/angular-loading-bar/build/loading-bar.min.js\"></script>\n<script src=\"../bower_components/angular-truncate/src/truncate.js\"></script>\n\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div class=\"spinner\" ng-show=\"isSomethingLoading\"></div>\n <md-toolbar md-theme=\"blue\" class=\"md-medium-tall\"style=\"color:white;\" ng-if=\"!embedded\">\n      <h1 class=\"md-toolbar-tools md-toolbar-tools-top\" style=\"font-size:32px;text-transform: uppercase\">Breizh Data Emeraude</h1>\n      <small layout-align=\"bottom\" style=\"margin-top:10px;\">Nous étions au bout de 2 départements. Avec l’<a href=\"#/opendata\" style=\"color:white;\">open data</a>, nous sommes au centre de notre territoire.\n      <a href=\"#/projet\" style=\"font-size:20;color:white;\">Le projet</a>\n      </small>\n  </md-toolbar>\n <div layout-gt-md=\"row\">\n <div layout-gt-md=\"column\" flex>\n <div layout-gt-md=\"column\" ng-repeat=\"site in sites\">\n   <div  layout-gt-md=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar hide-md hide-sm>\n      <span class=\"md-toolbar-tools\">{{category.name}}</span>\n  </md-toolbar>\n  <md-content layout-gt-md=\"column\" layout-md=\"row\" layout-sm=\"row\">\n  <small ng-repeat=\"dataset in category.datasets\">\n    <md-button ng-click=\"getData(site.url+dataset.id,dataset,site);\">\n{{dataset.name}}\n    </md-button>\n   </small>\n  </md-content>\n </div>\n </div>\n </div>\n<md-content flex-gt-md=\"75\" class=\"md-padding\">\n<md-content style=\"position:absolute\">\n<h2>{{presentation.name}}</h2>\n</md-content>\n<map-emeraude data=\"data\" presentation=\"presentation\" filtered-data=\"filteredData\"></map-emeraude>\n<div ng-if=\"presentation.slider\">\n	<div ng-if=\"presentation.slider\">Année {{presentation.slider.value}}</div>\n\n	 <md-slider md-discrete ng-model=\"presentation.slider.value\" step=\"1\" min=\"{{presentation.slider.min}}\" max=\"{{presentation.slider.max}}\" aria-label=\"rating\">\n    </md-slider>\n</div>\n<md-content ng-if=\"site\"><small>\n	<p>{{presentation.description}}</p>\n	<p>Les données proviennent du site <a ng-href=\"{{site.siteUrl}}\">{{site.name}}</a></p>\n</small></md-content>\n\n<md-input-group  ng-if=\"!embedded\" style=\"width:100%\" layout-align=\"bottom\" label=\"URL d\'intégration\" readonly=\"readonly\" class=\"ng-isolate-scope md-grey-theme md-input-has-value ng-valid\" aria-invalid=\"false\"> \n\n<label for=\"001\" class=\"ng-binding\">URL d\'intégration à copier dans un éditeur HTML</label>\n<input id=\"001\" style=\"width:100%\" ng-disabled=\"isDisabled()\" ng-model=\"shareUrl\" type=\"text\" tabindex=\"false\" aria-invalid=\"false\" aria-disabled=\"false\">\n</md-input-group>\n\n\n</md-content>\n </div>\n\n <md-content class=\"md-padding\" ng-if=\"!embedded\">\n <md-toolbar layout-gt-md=\"row\" ng-if=\"filteredData[0]\">\n      <span class=\"md-toolbar-tools\" ng-repeat=\"(k,d) in filteredData[0]\" ng-if=\"k!=\'__metadata\' && k!=\'LATITUDE\' && k!=\'LONGITUDE\'\" style=\"font-size:10px\" flex>{{k}}</span>\n  </md-toolbar>\n <div layout-gt-md=\"column\">\n 	<div ng-repeat=\"dat in filteredData\" layout-gt-md=\"row\">\n 		<div ng-repeat=\"(k,d) in dat\" ng-if=\"k!=\'__metadata\' && k!=\'LATITUDE\' && k!=\'LONGITUDE\'\" style=\"font-size:10px\" flex>{{ d | characters:25 }}</div>\n 	</div>\n </div>\n </md-content>\n  \n");
$templateCache.put("views/opendata.html"," <div class=\"spinner\" ng-show=\"isSomethingLoading\"></div>\n <md-toolbar md-theme=\"blue\" class=\"md-medium-tall\" style=\"color:white;\">\n      <h1 class=\"md-toolbar-tools md-toolbar-tools-top\" style=\"font-size:32px;text-transform: uppercase\">Open Data</h1>\n      <small layout-align=\"bottom\" style=\"margin-top:10px;\">Nous étions au bout de 2 départements. Avec L’open data, nous sommes au centre de notre territoire.\n      	<a href=\"#/\" style=\"font-size:20;color:white;\">Breizh Data Emeraude</a>\n      </small>\n  </md-toolbar>\n\n  <md-content class=\"md-padding\">\n  <p>Sans avoir pour le moment prononcé le nom, nous avons joué le jeu de l’Open Data. C’est-à-\n\ndire représenter, raconter le territoire par le biais des données libérées par les acteurs publics.\n\nL’Open Data a déjà fêté ses huit bougies... En 2006, deux journalistes du quotidien britannique \n\nThe Guardian lançaient une campagne, “Free Our Data”. “Libérez nos données”. Concrètement \n\nl’open data, ou l’ouverture des données publiques, consiste à diffuser des données collectées \n\npar les administrations afin de permettre à quiconque de les utiliser gratuitement.</p>\n\n\n<p>En huit ans, l’ouverture et la réutilisation des données publiques par les collectivités locales et\n\nleur réutilisation ont fait leur chemin. En France, les premières expérimentations remontent à \n\n2011. Rennes est ainsi la ville pionnière dans la voie de la libération des données publiques. \n\nD’autres collectivités locales et l’Etat embrayent le pas.</p>\n\n<img src=\"data/opendata-map.png\">\n\n<p>Les Côtes d’Armor figurent parmi les dernières initiatives marquantes, donnant l’accès à une \n\nsoixantaine de jeux de données en vue de leur réutilisation.</p>\n\n<h2>Alors qu’est-ce que l’Open Data nous dit du territoire ?</h2>\n<p>Les données publiques sur le territoire de Breizh Emeuraude nous révèlent la place de la Côte \n\nd’Emeraude, autour de Dinan, Dinard et Saint-Malo. C’est connu de tous. Mais les données \n\nautorisent des analysent plus fines, nous faisant rentrer dans le quotidien d’un territoire, des \n\npratiques de covoiturage aux évènements culturels.</p>\n\n\n<p>Le territoire nous parle aussi de l’Open Data. Le territoire de Breizh Emeraude, avec ses 74 \n\ncommunes en Côtes d’Amor et 80 en Ille-et-Vilaine, n’est représenté que de manière tronquée. \n\nLa raison est simple : les données ne sont pas libérées en Ille-et-Vilaine, hormis celles de la \n\nVille de Rennes / Rennes Métropole et du Comité Départemental du Tourisme. C’est à un jeu \n\nde miroir sans reflet auquel nous nous sommes livrés.</p>\n\n<p>Augmentez les données !\n\nNous n’avons rendu visible la diversité du territoire. De nombreux jeux de données restent à \n\nconstituer. Des problématiques en termes de politiques publiques seraient à soulever, telle que \n\nla présence des déserts médicaux, en milieu rural.</p>\n\n</md-content>\n  \n");
$templateCache.put("views/projet.html"," <div class=\"spinner\" ng-show=\"isSomethingLoading\"></div>\n <md-toolbar md-theme=\"blue\" class=\"md-medium-tall\" style=\"color:white;\">\n      <h1 class=\"md-toolbar-tools md-toolbar-tools-top\" style=\"font-size:32px;text-transform: uppercase\">Le projet</h1>\n      <small layout-align=\"bottom\" style=\"margin-top:10px;\">Nous étions au bout de 2 départements. Avec l’<a href=\"#/opendata\" style=\"color:white;\">open data</a>, nous sommes au centre de notre territoire.\n      <a href=\"#/\" style=\"font-size:20;color:white;\">Breizh Data Emeraude</a>\n      </small>\n    \n  </md-toolbar>\n\n  <md-content class=\"md-padding\">\n<h2>Notre intention</h2>\n<p>Vous permettre de préciser les perceptions d’un territoire, à partir de données statistiques\n\nactuelles, de permettre des regards croisés et d’inventer un devenir innovant et pertinent, parce \n\nque c’est chez nous !</p>\n\n<p>A vous d’utiliser cet outil pour partager le regard des contributeurs et proposer des\n\nvisualisations à partir des centres d’intérêt qui vous concernent, tels qu’il existent actuellement.</p>\n\n<h2>Pourquoi?</h2>\n\n  <p>La dynamique de libération de données publiques est porteuse d’une opportunité de créer de \n\nnouvelles représentations et analyses de notre territoire. De nouvelles potentialités émergent \n\npour le rendre intelligible.</p> \n  <p>Notre projet est né d’un manque d’identité entre les pays de Dinan et de Saint-Malo, séparés \n\npar la frontière départementale. La vallée de la Rance aurait pu être le lien entre ces bassins de \n\nvie. Elle est devenue un élément clivant, rattaché en termes d’image plus à Dinan, alors qu’elle \n\npourrait réunir Dinan, Dinard et Saint-Malo.</p>\n\n<h2>Les visées de notre projet</h2>\n\n<p>Il entend questionner la restriction des études statistiques aux limites administratives d’un \n\nterritoire qui s’étale sur deux départements.\n\nIl vise à inciter les institutions à davantage collaborer entre elles et à libérer leurs données \n\npubliques.\n\nIl promeut les initiatives privées de libération et de partage de données\n\nIl repose en un outil de centralisation d’informations aujourd’hui dispersées, de croisement et \n\nd’interprétation de ces informations.</p>\n\n<h2>Le territoire de Breizh Emeraude</h2>\n<p>Il est situé à la périphérie de deux départements, Côtes d’Armor à l’ouest, Ille-et-Vilaine pour \n\nla partie orientale. Bassin de vie, il regroupe 250 000 habitants, répartis entre 154 communes. \n\nBassin économique, 7000 entreprises y sont implantées. Il est souvent appelé “Pays de \n\nRance” et réunit les Pays de Dinan et Pays de Saint-Malo. <b>Territoire que nous appellons \n\nTerritoire « Breizh Emeraude ».</b> Il est défendu aujourd’hui par un collectif indépendant de \n\ncitoyens, dirigeants d’entreprises, désirent s’inventer un futur innovant.</p>\n\n<h2>Rendre visible Breizh Emeraude par les données</h2>\n<p>Pour matérialiser le territoire sur une système de cartographies, nous avons travaillé les jeux\n\nde données mises en accès libre par les collectivités locales (Conseils généraux et Comités \n\nDépartementaux du Tourisme. Nous limiter à ces données publiques induit que certaines cartes \n\nne sont que partiellement renseignées.</p>\n\n<h2>Préalables</h2>\n<p>Le fait d’encrer l’expérience sur un territoire, signifie un dénominateur commun : le critère \n\nde localisation des communes (codes INSEE, géolocalisation, etc.). Le temps nécessaire de \n\nconstruction de nouveaux jeux de données et le respect de la propriété intellectuelle nous a \n\nconduit à nous centrer, pour le moment, sur les seules données libérées.</p>\n\n<p>Nous avons trié un à un les jeux jeux de données en fonction de ce critère de géolocalisation\n\net de son exploitation. Ceci nous a conduit à éliminer plus de 75 % des jeux de données. Soit \n\nparce que, par nature, les données n’étaient pas géolocalisables (donnés budgétaires par \n\nexemple). Soit parce que les données étaient incomplètes, les coordonnées GPS n’ayant pas \n\nété saisies.\n\nCes jeux de données collectées, triées, nous les avons matérialisé sur un fond de carte \n\nregroupant les 154 communes du territoire de Breizh Emeraude.</p>\n\n<p>\n<h3>Mise en forme des jeux de données</h3>\n<ul>\n<li>localisation pour les catégories : plage / hôtel / événement / etc..</li>\n<li>Nuances de couleur pour les catégories : densité / Nombre de bénéficiaires de l\'aide compensatrice tierce personne dans les Côtes d\'Armor</li>\n</ul>\n</p>\n\n<p>Les représentations graphiques des jeux de données sont accompagnées en dessous du\n\ntableau avec les données brutes. Cela permet de vérifier si le graphe produit, a un impact \n\nmodéré ou pas, sur le territoire.</p>\n\n<h4>Perspectives</h4>\n<p>\nNous avons produit le temps d’un week-end un prototype de visualisation de données\n\n(DataViz). Cet outil, en Open Source, pourrait être réapproprié par d’autres collectivités locales, \n\nd’autres territoires pour mieux représentation l’information territoriale. \n\nDeux perspectives complémentaires sont espérées. Premièrement, nous espérons sensibiliser \n\nles collectivités locales à la problématique de l’ouverture des données publiques. Notre projet \n\nmet en lumière le nombre de données trop peu nombreux en Ille-et-Vilaine. Secondement, \n\nnous pourrions bénéficier de l’apport des habitants, citoyens, associations, producteurs de \n\ndonnées pour augmenter le nombre de jeux de données relatives aux territoires.\n\nBénéficier de davantage de données permettrait de superposer plusieurs jeux de données à la \n\nmanière de calques. Et ainsi proposer une représentation du territoire la plus fine possible.\n</p>\n\n<h4>Sur la mise en relation des graphes ensembles</h4>\n<img src=\"data/Calques.jpg\" width=\"1000px;\">\n\n<h4>Affichage côte à côte</h4>\n<p>La deuxième étape d’un tel outil, serait de permettre de visualiser simultanément plusieurs \n\ngraphes; et de les superposer à la manière d’un calque pour faire émerger des spécificités / \n\nanalyses du territoire.\n\nCertaines données ne sont pas forcément localisables ou peuvent compléter les données d’une \n\ncarte. On pourrait alors imaginer les afficher côte à côte pour une interprétation croisée.</p>\n\n<img src=\"data/Graphes autres.jpg\" width=\"1000px;\">\n\n<h4>Visualisation dynamique</h4>\nL’informatique permet de visualiser les données de manière dynamique, comme par exemple :<br/>\n\n<iframe src=\"http://bl.ocks.org/mbostock/raw/7607535/3223601f85182ce5196d84f1a16952a47282a11d/\" width=\"1000x\" height=\"1000px\"></iframe>\n\n<h2>Contribution</h2>\n<p>Ce projet devrait vous permettre de contribuer à la grille d’analyse et de perception de votre\n\nterritoire.\n\nPour cela, le projet dans sa version future donne la possibilité via un formulaire de soumettre \n\nune donnée statistique.</p>\n<h3>Comment contribuer?</h3>\n<p>Vous pouvez \n\n- corriger une information existante, \n\n- ajouter une donnée sur une base déjà existante (ce qui signifie renseigner tous les \n\nchamps du jeu de données concerné), \n\n- intégrer un nouveau jeu de données.</p>\n\n<h3>Charte de construction de vos fichiers</h3>\n<p>- Vos fichiers de données doivent respecter le format .CSV\n\n- avoir une donnée de géolocalisation (numéros INSEE des communes, etc...)\n\n- avoir un nombre de données fiables et complète sur un domaine\n\n- pro\n\nVotre jeu de données va être soumis à un modérateur et rangé dans la catégorie adéquate.</p>\n\n<h2>Réalisation</h2>\n<p>\nCette application web a été réalisée lors du #HACKATHON 22 en décembre 2014 à partir des données \n\ndisponibles sur les sites Datarmor et Bretagne tourisme. </p>\n\n<h3>L’équipe</h3>\n<ul>\n<li><a href=\"http://www.vocalyse-hpe.com/\">Bernard CESSIEUX</a>< (porteur du projet), consultant management./li>\n\n<li><a href=\"https://github.com/nicolas-bonnel\">Nicolas BONNEL</a>, Architecte solutions Web.</li>\n\n<li><a href=\"http://gaellelochet.wix.com/portfolio\"> Gaëlle LOCHET</a>, Architecte D.E</li>\n\n<li><a href=\"http://oliviertredan.wordpress.com/\">Olivier TREDAN</a>, Docteur sociologie, Data journaliste.</li>\n</li>\n</ul>\n\n\n\n</md-content>\n  \n");}]);