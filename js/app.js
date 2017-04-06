var app = angular.module('personalApp',['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainController',
			templateUrl: 'views/main.html'
		})
		.when('/resume', {
			controller: 'ResumeController',
			templateUrl: 'views/resume.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});