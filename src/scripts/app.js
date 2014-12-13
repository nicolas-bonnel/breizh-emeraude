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
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});