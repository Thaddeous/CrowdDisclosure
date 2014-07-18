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
		"profile" 		: 	"profile",
		"author/:id" 	: 	"author"
	},

	initialize: function() {
		window.fetchedArticles = new Articles();
	
	},
		home: function() {
			checkNav();
			$(".content-container").html("");
			var homeView = new HomeView();
			console.log("HomeView has loaded.");
		},


		signUp: function(){
			checkNav();
			$(".content-container").html("");
			var signUpView = new SignUpView();
			console.log("SignUpView has loaded.");
		},


		signIn: function(){
			checkNav();
			$(".content-container").html("");
			var signInView = new SignInView();
			console.log("SignInView has loaded.");
		},


		password: function(){
			checkNav();
			$(".content-container").html("");
			var passwordView = new PasswordView();
			console.log("PasswordView has loaded.");
		},


		settings: function(){
			checkNav();
			$(".content-container").html("");
			var settingsView = new SettingsView();
			console.log("SettingsView has loaded.");
		},


		post: function(){
			checkNav();
			$(".content-container").html("");
			var postView = new PostView();
			console.log("PostView has loaded.");
		},


		thumbnail: function(){
			checkNav();
			$(".content-container").html("");
			var thumbnailView = new ThumbnailView();
			console.log("ThumbnailView has loaded.");
		},




		detail: function(id){
			checkNav();
			$(".content-container").html("");

			var article = window.fetchedArticles.get(id);
			console.log("article is ", article);

			if (article) {
				var detailView = new DetailView({model: article});
			} else {
				var query = new Parse.Query(Article);
				query.include("user");
				query.get(id, {
				  success: function(article) {
				    // The object was retrieved successfully.
				    var detailView = new DetailView({model: article});
				  },
				  error: function(object, error) {
				    // The object was not retrieved successfully.
				    console.error("Page not found!");
				  }
				});
			}
			console.log("DetailView has loaded.");
		},


		profile: function(){
			checkNav();
			$(".content-container").html("");
			var profileView = new ProfileView();
			console.log("ProfileView has loaded.");
		},


		author: function(id){
			checkNav();
			$(".content-container").html("");
			console.log(id)
			// var article = window.fetchedArticles.get(id)


				var query = new Parse.Query(Parse.User);
				console.log(id)
				query.equalTo('objectId', id)	

				query.find({
				  success: function(user) {
					console.log('query results', user)
				    // The object was retrieved successfully.
				    new AuthorView({model: user})
				    console.log(user);
				  },
				  error: function(object, error) {
				    // The object was not retrieved successfully.
				    console.error("Page not found!");
				  }
				});
		
			console.log("AuthorView has loaded.");
		},
});

var router = new AppRouter();
Parse.history.start();