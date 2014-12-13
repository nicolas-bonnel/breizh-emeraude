angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation,site){
		$scope.site = site;
		$scope.currentUrl = url;
		$scope.presentation = presentation;
		var tUrl = '';
		if(presentation.slider){
			console.log(presentation.slider);
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