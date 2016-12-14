'use strict';

(function(){

require('angular');

var app = angular.module('wsi-code-test', [require('angular-ui-router')]);

app.controller('MainCtrl', [function(){
	
}]);

require('./components/navBtn')(app);
require('./components/sideNav')(app);
require('./components/topNav')(app);
require('./components/userPanel')(app);

app.config(function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider.state('home', {
		url: '/',
		templateUrl: '/templates/home.html'
	});
	$stateProvider.state('about', {
		url: '/about',
		templateUrl: '/templates/about.html'
	});
	$stateProvider.state('challenge', {
		url: '/challenge',
		templateUrl: '/templates/challenge.html'
	});
});

}())