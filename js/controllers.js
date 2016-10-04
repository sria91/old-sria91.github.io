/*
 * Title		: wesumeControllers
 * Description	: wesumeControllers initialization
 * Author		: Srikanth Anantharam
 * Email		: srikanth_anantharam@linux.com
 * Created		: 2016
 * © Copyright 2016 By Srikanth Anantharam. All Rights Reserved.
 */

'use strict';

var wesumeAppControllers = angular.module('wesumeAppControllers', []).
controller({
	'AboutCtrl': ['$scope', '$location', onTabLoad],

	'ResumeCtrl': ['$scope', '$location', onTabLoad],

	'PublicationsCtrl': ['$scope', '$location', onTabLoad],

	'GalleryCtrl': ['$scope', '$location', onTabLoad],

	'DownloadsCtrl': ['$scope', '$location', onTabLoad],

	'DiscussCtrl': ['$scope', '$location', function ($scope, $location) {
		onTabLoad($scope, $location);
		DISQUS.reset({
			reload: true,
			config: function () {
				this.page.identifier = $location.path();
				this.page.url = $location.absUrl();
				this.page.title = "Start the discussion";
			}
		});
	}],

	// 'LinksCtrl': ['$scope', '$location', onTabLoad],
});

function DateToString(d) {
	return (d.toDateString() + ", " + d.toTimeString());
}

function onTabLoad($scope, $location) {
	$location.path($location.path().toLowerCase()).replace();
	document.getElementById("on-tab-load").innerHTML =  DateToString(new Date());
}
