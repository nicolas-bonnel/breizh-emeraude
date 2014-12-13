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