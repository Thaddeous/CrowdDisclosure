'use strict';

var AppRouter = Parse.Router.extend({

	routes: {
		""          : 	"home",
		"about" 	: 	"about",
		"signIn"    : 	"signIn",
		"signUp"    : 	"signUp",
		"settings" 	: 	"settings",
		"post" 		: 	"post",
		"thumbnail" : 	"thumbnail",
		"detail"    : 	"detail",
		"profile" 	: 	"profile"
	},

	initialize: function() {
	
	},
		home: function() {
			$('.content-container').html('');
			homeView = new HomeView();
			console.log("HomeView has loaded.");
		},

		about: function(){
			$('.content-container').html('');
			aboutView = new AboutView();
			console.log("AboutView has loaded.");
		},

		signIn: function(){
			$('.content-container').html('');
			signInView = new SignInView();
			console.log("SignInView has loaded.");
		},

		signUp: function(){
			$('.content-container').html('');
			signUpView = new SignUpView();
			console.log("SignUpView has loaded.");
		},

		settings: function(){
			$('.content-container').html('');
			settingsView = new SettingsView();
			console.log("SettingsView has loaded.");
		},

		post: function(){
			$('.content-container').html('');
			postView = new PostView();
			console.log("PostView has loaded.");
		},

		thumbnail: function(){
			$('.content-container').html('');
			thumbnailView = new ThumbnailView();
			console.log("ThumbnailView has loaded.");
		},

		detail: function(){
			$('.content-container').html('');
			detailView = new DetailView();
			console.log("DetailView has loaded.");
		},

		profile: function(){
			$('.content-container').html('');
			profileView = new ProfileView();
			console.log("ProfileView has loaded.");
		},
});

var router = new AppRouter();
Parse.history.start();