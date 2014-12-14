var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute',
	'angular-loading-bar',
	'ngAnimate',
	'truncate',
	'angularFileUpload'
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