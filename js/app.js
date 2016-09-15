/*
 * Title		: wesumeApp
 * Description	: wesumeApp initialization
 * Author		: Srikanth Anantharam
 * Email		: srikanth_anantharam@linux.com
 * Created		: 2016
 * Copyright © Srikanth Anantharam 2016. All Rights Reserved.
 */

'use strict';

var wesumeApp = angular.module('wesumeApp', [
	'ngRoute',
	'wesumeAppControllers'
]).
config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('!');
	$routeProvider.caseInsensitiveMatch = true;
	$routeProvider.
		when('/', {
			templateUrl: 'html/about.html',
			controller: 'AboutCtrl',
			activetab: 'about'
		}).
		when('/resume', {
			templateUrl: 'html/resume.html',
			controller: 'ResumeCtrl',
			activetab: 'resume',
		}).
		when('/publications', {
			templateUrl: 'html/publications.html',
			controller: 'PublicationsCtrl',
			activetab: 'publications'
		}).
		when('/gallery', {
			templateUrl: 'html/gallery.html',
			controller: 'GalleryCtrl',
			activetab: 'gallery'
		}).
		when('/downloads', {
			templateUrl: 'html/downloads.html',
			controller: 'DownloadsCtrl',
			activetab: 'downloads'
		}).
		when('/discuss', {
			templateUrl: 'html/discuss.html',
			controller: 'DiscussCtrl',
			activetab: 'discuss'
		}).
		// when('/links', {
		// 	templateUrl: 'html/links.html',
		// 	controller: 'LinksCtrl',
		// 	activetab: 'links'
		// }).
		otherwise({ redirectTo: '/' });
}]).
run(['$rootScope', '$http', '$browser', '$timeout', '$route', function ($scope, $http, $browser, $timeout, $route) {
	$scope.$on("routeChangeSucess", function (event, next, current) {
		$scope.$part = $route.current.activetab;
	});
}]);
