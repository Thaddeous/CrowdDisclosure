'use strict';

var AppRouter = Parse.Router.extend({

	routes: {
		""          : 	"home",
		"about" 	: 	"about",
		"signUp"    : 	"signUp",
		"signIn"    : 	"signIn",
		"password"  : 	"password",
		"settings" 	: 	"settings",
		"post" 		: 	"post",
		"thumbnail" : 	"thumbnail",
		"detail"    : 	"detail",
		"profile" 	: 	"profile"
	},

	initialize: function() {
	
	},
		home: function() {
			$(".content-container").html("");
			var homeView = new HomeView();
			console.log("HomeView has loaded.");
		},

		about: function(){
			$(".content-container").html("");
			var aboutView = new AboutView();
			console.log("AboutView has loaded.");
		},

		signUp: function(){
			$(".content-container").html("");
			var signUpView = new SignUpView();
			console.log("SignUpView has loaded.");
		},

		signIn: function(){
			$(".content-container").html("");
			var signInView = new SignInView();
			console.log("SignInView has loaded.");
		},

		password: function(){
			$(".content-container").html("");
			var passwordView = new PasswordView();
			console.log("PasswordView has loaded.");
		},

		settings: function(){
			$(".content-container").html("");
			var settingsView = new SettingsView();
			console.log("SettingsView has loaded.");
		},

		post: function(){
			$(".content-container").html("");
			var postView = new PostView();
			console.log("PostView has loaded.");
		},

		thumbnail: function(){
			$(".content-container").html("");
			var thumbnailView = new ThumbnailView();
			console.log("ThumbnailView has loaded.");
		},

		detail: function(){
			$(".content-container").html("");
			var detailView = new DetailView();
			console.log("DetailView has loaded.");
		},

		profile: function(){
			$(".content-container").html("");
			var profileView = new ProfileView();
			console.log("ProfileView has loaded.");
		},
});

var router = new AppRouter();
Parse.history.start();