/**
 * Controllers
 * Copyright Srikanth Anantharam. All Rights Reserved.
 */

'use strict';

// controllers
function AboutCtrl($scope, $http) {
}

function ResumeCtrl($scope, $http) {
}

function PublicationsCtrl($scope, $http) {
}

function GalleryCtrl($scope, $http) {
}

function DownloadsCtrl($scope, $http) {
}

function DiscussCtrl($scope, $http) {
	DISQUS.reset({
		reload: true,
		config: function () {
			this.page.identifier = "discuss";
			this.page.url = "https://sria91.github.io/!#/discuss";
			this.page.title = "Start the discussion";
		}
	});
}
