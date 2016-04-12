/**
 * Wesume
 * Copyright Srikanth Anantharam. All Rights Reserved.
 */

'use strict';

// ng-app initialization
var app = angular.module('wesume', []).
	config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'html/about.html',
				controller: AboutCtrl,
				activetab: 'about'
			}).
			when('/resume', {
				templateUrl: 'html/resume.html',
				controller: ResumeCtrl,
				activetab: 'resume'
			}).
			when('/publications', {
				templateUrl: 'html/publications.html',
				controller: PublicationsCtrl,
				activetab: 'publications'
			}).
			when('/gallery', {
				templateUrl: 'html/gallery.html',
				controller: GalleryCtrl,
				activetab: 'gallery'
			}).
			when('/projects', {
				templateUrl: 'html/projects.html',
				controller: ProjectsCtrl,
				activetab: 'projects'
			}).
			otherwise({ redirectTo: '/' });
	}]).run(['$rootScope', '$http', '$browser', '$timeout', '$route', function ($scope, $http, $browser, $timeout, $route) {

		$scope.$on("$routeChangeSucess", function (scope, next, current) {
			$scope.$part = $route.current.activetab;
		});

	}]);

app.config(['$locationProvider', function ($location) {
	$location.hashPrefix('!');
}]);

