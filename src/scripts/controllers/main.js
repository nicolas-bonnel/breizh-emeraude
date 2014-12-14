angular.module('breizh-emeraude').controller('mainController',function($scope, $http, $location){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.$root.embedded = $location.search().embedded;

	var baseUrl = $location.protocol()+'://'+$location.host()+':'+$location.port()+$location.path()+'#/';

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