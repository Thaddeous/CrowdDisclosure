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



//    ___   __             __    _   ___           
//   / _ | / /  ___  __ __/ /_  | | / (_)__ _    __
//  / __ |/ _ \/ _ \/ // / __/  | |/ / / -_) |/|/ /
// /_/ |_/_.__/\___/\_,_/\__/   |___/_/\__/|__,__/
//
var AboutView = Parse.View.extend({
	className: "about-page",
	template: _.template($(".about-page-view-template").text()),
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
	    this.$el.html(this.template())
	    return this;
	},

	signIn: function() {
		Parse.User.logIn($(".sign-in-username-input").val(), $(".sign-in-password-input").val(), {
			success: function(user) {
				var userName = Parse.User.current().attributes.username;
		    	alert("Welcome, " + userName);
		  },
			error: function(user, error) {
		    	alert("There was an error signing in. Please try again.");
		  	}
		});
	}
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
	    this.$el.html(this.template())
	    return this;
	},

	signUp: function() {
		var user = new Parse.User();
		user.set("username", $(".sign-up-username-input").val() );
		user.set("password", $(".sign-up-password-input").val() );
		user.set("email", $(".sign-up-email-input").val() );

		user.signUp(null, {
			success: function(user) {
				alert("Welcome to CrowdDisclosure. Please remember to validate your email.");
			},
		 	error: function(user, error) {
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
	    this.$el.html(this.template())
	    return this;
	},

	updateUserInfo: function() {
		var user = Parse.User.current()
		user.set("firstName", $(".settings-first-name-input").val() );
		user.set("lastName", $(".settings-last-name-input").val() );
		user.set("website", $(".settings-website-input").val() );
		user.set("phone", $(".settings-phone-input").val() );
		user.set("about", $(".settings-about-you-input").val() );
		user.set("profilePicture", $(".settings-file-uploader").val() );
		
		user.save(null, {
			success: function(user) {
				alert("Your information has been updated successfully.");
			},
		 	error: function(user, error) {
		    	alert("Error: " + error.code + " " + error.message);
		    }
		});
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
	    this.$el.html(this.template());
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
	    return this;
	},

});