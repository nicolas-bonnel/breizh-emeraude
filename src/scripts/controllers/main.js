angular.module('breizh-emeraude').controller('mainController',function($scope, $http, FileUploader,$location){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.embedded = $location.search().embedded;

	var uploader = $scope.uploader = new FileUploader();
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

	uploader.onAfterAddingFile = function(item){
		r = new FileReader();
		  r.onload = function(e){
		    var data = e.target.result;
		   console.log(data);
		  }
		  r.onerror = function(event) {
    console.error("File could not be read! Code " + event.target.error.code);
};

		  console.log(item);
		  r.readAsText(item.file);
				
			};
});