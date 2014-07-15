'use strict';

var AppRouter = Parse.Router.extend({

	routes: {
		""          	: 	"home",
		"signUp"    	: 	"signUp",
		"signIn"    	: 	"signIn",
		"password"  	: 	"password",
		"settings" 		: 	"settings",
		"post" 			: 	"post",
		"thumbnail" 	: 	"thumbnail",
		"detail/:id"    : 	"detail",
		"profile" 		: 	"profile"
	},

	initialize: function() {

		window.fetchedArticles = new Articles;
	
	},
		home: function() {
			$(".content-container").html("");
			var homeView = new HomeView();
			console.log("HomeView has loaded.");
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

		detail: function(id){
			$(".content-container").html("");

			var article = window.fetchedArticles.get(id);
			console.log('article is ', article);


			if (article) {
				var detailView = new DetailView({model: article});
			} else {
				var query = new Parse.Query(Article);
				query.get(id, {
				  success: function(article) {
				    // The object was retrieved successfully.
				    var detailView = new DetailView({model: article});
				  },
				  error: function(object, error) {
				    // The object was not retrieved successfully.
				    // error is a Parse.Error with an error code and description.
				    console.error('page not found!')
				  }
				});
			}

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