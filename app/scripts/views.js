'use strict';
//    __ __                 _   ___           
//   / // /__  __ _  ___   | | / (_)__ _    __
//  / _  / _ \/  ' \/ -_)  | |/ / / -_) |/|/ /
// /_//_/\___/_/_/_/\__/   |___/_/\__/|__,__/   
//                                     
var HomeView = Parse.View.extend({
	className: "home-page",
	template: _.template($(".home-page-view-template").text()),
	events: {
	},

	initialize: function(){
		$(".content-container").html(this.el);
		this.render();
	},

	render: function(){
	    this.$el.html(this.template());
	    return this;
	},

});



//    _____           __  __       _   ___           
//   / __(_)__ ____  / / / /__    | | / (_)__ _    __
//  _\ \/ / _ `/ _ \/ /_/ / _ \   | |/ / / -_) |/|/ /
// /___/_/\_, /_//_/\____/ .__/   |___/_/\__/|__,__/ 
//       /___/          /_/ 
//   
var SignUpView = Parse.View.extend ({
	className: "sign-up-page",
	template: _.template($(".sign-up-page-view-template").text() ),
	events: {
		"click .sign-up-button": "signUp"
	},

	initialize: function () {
		$(".content-container").html(this.el);
		this.render();
	},

	render: function(){
	    this.$el.html(this.template());
	    return this;
	},

	signUp: function() {
		var user = new Parse.User();
		user.set("username", $(".sign-up-username-input").val() );
		user.set("password", $(".sign-up-password-input").val() );
		user.set("email", $(".sign-up-email-input").val() );
		
		user.signUp(null, {
			success: function(user) {
				router.navigate("#profile", {trigger: true});
			},
		 	error: function(user, error) {
		    	alert("Error: " + error.code + " " + error.message);
		    }
		});
	}
});



//    _____           ____       _   ___           
//   / __(_)__ ____  /  _/__    | | / (_)__ _    __
//  _\ \/ / _ `/ _ \_/ // _ \   | |/ / / -_) |/|/ /
// /___/_/\_, /_//_/___/_//_/   |___/_/\__/|__,__/ 
//       /___/
//
var SignInView = Parse.View.extend ({
	className: "sign-in-page",
	template: _.template($(".sign-in-page-view-template").text()),
	events: {
		"click .sign-in-button": "signIn"
	},

	initialize: function () {
		$(".content-container").html(this.el);
		this.render();
	},

	render: function(){
	    this.$el.html(this.template());
	    return this;
	},

	signIn: function() {
		Parse.User.logIn($(".sign-in-username-input").val(), $(".sign-in-password-input").val(), {
			success: function(user) {
				router.navigate("#thumbnail", {trigger: true});
				var userName = Parse.User.current().attributes.username;
		    	console.log("Welcome, " + userName);
		  },
			error: function(user, error) {
		    	alert("There was an error signing in. Please try again.");
		  	}
		});
	}
});



//    ___                                 __  _   ___           
//   / _ \___ ____ ____    _____  _______/ / | | / (_)__ _    __
//  / ___/ _ `(_-<(_-< |/|/ / _ \/ __/ _  /  | |/ / / -_) |/|/ /
// /_/   \_,_/___/___/__,__/\___/_/  \_,_/   |___/_/\__/|__,__/ 
//                                                             
var PasswordView = Parse.View.extend({
	className: "password-page",
	template: _.template($(".password-page-view-template").text()),
	events: {
		"click .password-page-button": "passwordReset"
	},

	initialize: function(){
		$(".content-container").html(this.el);
		this.render();
	},

	render: function(){
	    this.$el.html(this.template());
	    return this;
	},

	passwordReset: function() {
		var passwordResetInput = $(".password-input").val();
		Parse.User.requestPasswordReset(passwordResetInput, {
			success: function() {
				alert("Password was sent successfully");
			},
			error: function(error) {
				alert("Error: " + error.code + " " + error.message);
			}
		});
	}
});



//    ____    __  __  _                 _   ___           
//   / __/__ / /_/ /_(_)__  ___ ____   | | / (_)__ _    __
//  _\ \/ -_) __/ __/ / _ \/ _ `(_-<   | |/ / / -_) |/|/ /
// /___/\__/\__/\__/_/_//_/\_, /___/   |___/_/\__/|__,__/ 
//                        /___/
//                           
var SettingsView = Parse.View.extend ({
	className: "settings-page",
	template: _.template($(".settings-page-view-template").text() ),
	events: {
		"click .settings-save-button": "updateUserInfo"
	},

	initialize: function () {
		$(".content-container").html(this.el);
		this.render();
	},

	render: function(){
		console.log("user is ", Parse.User.current());
	    this.$el.html(this.template());
	    return this;
	},

	updateUserInfo: function() {
		var user = Parse.User.current();
		user.set("name", $(".settings-name-input").val() );
		user.set("gender", $(".settings-gender-input:checked").val() );
		user.set("birthday", $(".settings-birthday-input").val() );
		user.set("website", $(".settings-website-input").val() );
		user.set("contactEmail", $(".settings-contact-email-input").val() );
		user.set("email", $(".settings-email-input").val() );
		user.set("about", $(".settings-about-you-input").val() );

		var bannerPromise = uploadPhoto($(".profile-banner-file-upload")[0], 'bannerPicture');

		var profilePromise = uploadPhoto($(".profile-photo-file-upload")[0], 'profilePicture', function() {
			alert("Your information has been updated successfully.");
		});

		bannerPromise.done(function(){
			profilePromise.done(function(){
				router.navigate("#profile", {trigger: true});
			});
		});

		function uploadPhoto (input, property, successCallback, errorCallback){

			var deferred = $.Deferred();

			if (!successCallback) {
				// set a default success callback
				var successCallback = function() {};
			}

			if (!errorCallback) {
				// set a default error callback
				var errorCallback = function(user, error) {
			    	alert("Error: " + error.code + " " + error.message);
			    };
			}

			if (input.files.length > 0) {
				var file = input.files[0];
				var name = "photo.jpg";
				var parseFile = new Parse.File(name, file);

				parseFile.save().then(function() {
					user.set(property, parseFile);
					console.log("The file has been saved to Parse.");
					user.save(null, {
						success: successCallback,
					 	error: errorCallback
					}).done(function(){
						deferred.resolve();
					});
				}, function(error) {
					alert("The file either could not be read, or could not be saved to Parse.");
				});
			} else {
				user.save(null, {
					success: successCallback,
				 	error: errorCallback
				}).done(function(){
					deferred.resolve();
				});
			}

			return deferred;
		}
	}
});



//    ___           __    _   ___           
//   / _ \___  ___ / /_  | | / (_)__ _    __
//  / ___/ _ \(_-</ __/  | |/ / / -_) |/|/ /
// /_/   \___/___/\__/   |___/_/\__/|__,__/ 
//
var PostView = Parse.View.extend({
	className: "post-page",
	template: _.template($(".post-page-view-template").text()),
	events: {
		"click .post-page-button": "postArticle"
	},

	initialize: function () {
		$(".content-container").html(this.el);
		this.render();
	},

	render: function(){
	    this.$el.html(this.template());
	    return this;
	},

	postArticle: function() {
		var user = Parse.User.current();
		var Article = Parse.Object.extend("Article");
		var article = new Article();
		article.set("postTitle", $(".post-title-input").val() );
		article.set("postContent", $(".post-content-input").val() );
		article.set("user", user);
		article.save(null, {
			success: function(post) {

			}
		});
		
		var fileUploadControl = $(".post-file-upload")[0];
		if (fileUploadControl.files.length > 0) {
			var file = fileUploadControl.files[0];
			var name = "photo.jpg";
			var parseFile = new Parse.File(name, file);

			parseFile.save().then(function() {
				article.set("postPicture", parseFile);
				console.log("The file has been saved to Parse.");
				article.save(null, {
					success: function(user) {
						router.navigate("#profile", {trigger: true});
						alert("Your information has been updated successfully.");
					},
				 	error: function(user, error) {
				    	alert("Error: " + error.code + " " + error.message);
				    }
				});
			}, function(error) {
				console.log("The file either could not be read, or could not be saved to Parse.");
			});
		} else {
			article.save(null, {
				success: function(user) {
					router.navigate("#profile", {trigger: true});
					alert("Your information has been updated successfully.");
				},
			 	error: function(user, error) {
			    	alert("Error: " + error.code + " " + error.message);
			    }
			});
		}
	}
});



//  ________              __             _ __  _   ___           
// /_  __/ /  __ ____ _  / /  ___  ___ _(_) / | | / (_)__ _    __
//  / / / _ \/ // /  ' \/ _ \/ _ \/ _ `/ / /  | |/ / / -_) |/|/ /
// /_/ /_//_/\_,_/_/_/_/_.__/_//_/\_,_/_/_/   |___/_/\__/|__,__/
//                        
var ThumbnailView = Parse.View.extend({
	className: "thumbnail-page",
	template: _.template($(".thumbnail-page-view-template").text()),
	events: {
			
	},

	initialize: function(){
		$(".content-container").html(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.template());

		var renderedTemplate = _.template($(".thumbnail-page-view-article-view-template").text());
		var Article = Parse.Object.extend("Article");
		var query = new Parse.Query(Article);
		var that = this;

		$(".thumbnail-post-title-button").click(function() {
			router.navigate("#detail", {trigger: true});
		});

		query.include('user');
		query.ascending("createdAt");
		query.find().done(function(articles){
			window.fetchedArticles.reset(articles);

			window.fetchedArticles.each(function(article) {
				console.log(article);
    			$(".thumbnail-columns").prepend(renderedTemplate({article: article}) );			
			});
		});

	    return this;
	},

});



//    ___      __       _ __  _   ___           
//   / _ \___ / /____ _(_) / | | / (_)__ _    __
//  / // / -_) __/ _ `/ / /  | |/ / / -_) |/|/ /
// /____/\__/\__/\_,_/_/_/   |___/_/\__/|__,__/ 
//                                             
var DetailView = Parse.View.extend({
	className: "detail-page",
	template: _.template($(".detail-page-view-template").text()),
	events: {

	},

	initialize: function(){
		$(".content-container").html(this.el);
		this.render();
	},

	render: function(){
	    this.$el.html(this.template(this.model.attributes));
	    
	    $(".author-article-name").click(function() {
			router.navigate("#author", {trigger: true});
		});

	    return this;

	},

});



//    ___           ____ __      _   ___           
//   / _ \_______  / _(_) /__   | | / (_)__ _    __
//  / ___/ __/ _ \/ _/ / / -_)  | |/ / / -_) |/|/ /
// /_/  /_/  \___/_//_/_/\__/   |___/_/\__/|__,__/ 
//                                                
var ProfileView = Parse.View.extend({
	className: "profile-page",
	template: _.template($(".profile-page-view-template").text()),
	events: {

	},

	initialize: function(){
		$(".content-container").html(this.el);
		this.render();
	},

	render: function(){

		this.$el.html(this.template());

		var user = Parse.User.current();
		var template = _.template($(".profile-page-article-template").text());
		var Article = Parse.Object.extend("Article");
		var query = new Parse.Query(Article);
		var that = this;

		$(".profile-article-name").click(function() {
			router.navigate("#detail", {trigger: true});
		});

		query.equalTo("user", user);
		query.ascending("createdAt");
		query.find({
			success: function(articles) {
				articles.forEach(function(article) {
					console.log(article.attributes);
	    			$(".profile-user-container-right").prepend(template({post: article}) );
				});
			},
			error: function (error) {
				console.log(error);
			}
		});

	    return this;
	},
});




//    ___       __  __              _   ___           
//   / _ |__ __/ /_/ /  ___  ____  | | / (_)__ _    __
//  / __ / // / __/ _ \/ _ \/ __/  | |/ / / -_) |/|/ /
// /_/ |_\_,_/\__/_//_/\___/_/     |___/_/\__/|__,__/ 
//                         
var AuthorView = Parse.View.extend({
	className: "author-page",
	template: _.template($(".author-page-view-template").text()),
	events: {

	},

	initialize: function(){
		$(".content-container").html(this.el);
		this.render();
	    console.log(this.model)
	    // var userId = this.model.attributes.user.id
	    // console.log(userId)
	},

	render: function(){
	    this.$el.html(this.template(this.model.attributes));
		var Article = Parse.Object.extend("Article");
		var query = new Parse.Query(Article);
		var that = this;

		$(".author-article-name").click(function() {
			router.navigate("#detail", {trigger: true});
		});

		var id = this.model[0].id
		query.ascending("createdAt");
		var userId = {
			__type: "Pointer",
			className: "_User",
			objectId: id
		}
		console.log(userId)

		query.equalTo('user', userId)
		// query.equalTo('objectId', "FjTc2GPDSD")
		query.find({
			success: function(articles) {
				console.log(articles)
				articles.forEach(function(article) {
					console.log("article is ", article);
					var templateTwo = _.template($(".author-page-article-template").text());
					var renderedTemplate = templateTwo(article.attributes)
	    			$(".author-user-container-right").prepend(templateTwo(article.attributes));
				});
			},
			error: function (error) {
				console.log(error);
			}
		});

	    return this;
	},

});