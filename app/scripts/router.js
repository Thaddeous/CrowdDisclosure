'use strict';


var AppRouter = Parse.Router.extend({

	routes: {
		"home"      : 	"home",
		"about" 	: 	"about",
		"signin"    : 	"signin",
		"signup"    : 	"signup",
		"settings" 	: 	"settings",
		"post" 		: 	"post",
		"thumbnail" : 	"thumbnail",
		"detail"    : 	"detail",
		"profile" 	: 	"profile"
	},

	initialize: function() {
	
	},
		homePage: function() {
			$('.home-page').html('');
			homeView = new HomeView();
			console.log("HomeView has loaded.");
		},

		// aboutPage: function(){
		// 	$('.about-page').html('');
		// 	aboutView = new AboutView();
		// 	console.log("AboutView has loaded.");
		// },

		// signInPage: function(){
		// 	$('.signin-page').html('');
		// 	signinView = new SignInView();
		// 	console.log("SigninView has loaded.");
		// },

		// signUpPage: function(){
		// 	$('.signup-page').html('');
		// 	signupView = new SignUpView();
		// 	console.log("SignupView has loaded.");
		// },

		// settingsPage: function(){
		// 	$('.settings-page').html('');
		// 	settingsView = new SettingsView();
		// 	console.log("SettingsView has loaded.");
		// },

		// postPage: function(){
		// 	$('.post-page').html('');
		// 	postView = new PostView();
		// 	console.log("PostView has loaded.");
		// },

		// thumbnailPage: function(){
		// 	$('.thumbnail-page').html('');
		// 	thumbnailView = new ThumbnailView();
		// 	console.log("ThumbnailView has loaded.");
		// },

		// detailPage: function(){
		// 	$('.detail-page').html('');
		// 	detailView = new DetailView();
		// 	console.log("DetailView has loaded.");
		// },

		// profilePage: function(){
		// 	$('.profile-page').html('');
		// 	profileView = new ProfileView();
		// 	console.log("ProfileView has loaded.");
		// },
});

var router = new AppRouter();
Parse.history.start();