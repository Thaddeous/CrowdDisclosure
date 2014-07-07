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
			$('.home-page').html('');
			homeView = new HomeView();
			console.log("HomeView has loaded.");
		},

		about: function(){
			$('.about-page').html('');
			aboutView = new AboutView();
			console.log("AboutView has loaded.");
		},

		signIn: function(){
			$('.sign-in-page').html('');
			signInView = new SignInView();
			console.log("SignInView has loaded.");
		},

		signUp: function(){
			$('.sign-up-page').html('');
			signUpView = new SignUpView();
			console.log("SignUpView has loaded.");
		},

		settings: function(){
			$('.settings-page').html('');
			settingsView = new SettingsView();
			console.log("SettingsView has loaded.");
		},

		post: function(){
			$('.post-page').html('');
			postView = new PostView();
			console.log("PostView has loaded.");
		},

		thumbnail: function(){
			$('.thumbnail-page').html('');
			thumbnailView = new ThumbnailView();
			console.log("ThumbnailView has loaded.");
		},

		detail: function(){
			$('.detail-page').html('');
			detailView = new DetailView();
			console.log("DetailView has loaded.");
		},

		profile: function(){
			$('.profile-page').html('');
			profileView = new ProfileView();
			console.log("ProfileView has loaded.");
		},
});

var router = new AppRouter();
Parse.history.start();