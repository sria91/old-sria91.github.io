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
	DISQUS.reset({
		reload: true,
		config: function () {
			this.page.identifier = "sdlw";
			this.page.url = "https://sria91.github.io/!#/downloads";
			this.page.title = "Srikanth Anantharam's Projects";
			this.language = "en-IN";
		}
	});
}
