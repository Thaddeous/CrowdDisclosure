'use strict';



//    __ __                 _   ___           
//   / // /__  __ _  ___   | | / (_)__ _    __
//  / _  / _ \/  ' \/ -_)  | |/ / / -_) |/|/ /
// /_//_/\___/_/_/_/\__/   |___/_/\__/|__,__/   
//                                     
var HomeView = Parse.View.extend({
	className: "homeView",
	template: _.template($(".home-page-view-template").text()),
	events: {

	},

	initialize: function(){
		$(".home-page").append(this.el);
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
	className: "aboutView",
	template: _.template($(".about-page-view-template").text()),
	events: {

	},

	initialize: function(){
		$(".about-page").append(this.el);
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
var SignInView = Parse.View.extend({
	className: "signInView",
	template: _.template($(".sign-in-page-view-template").text()),
	events: {

	},

	initialize: function(){
		$(".sign-in-page").append(this.el);
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
var SignUpView = Parse.View.extend({
	className: "signUpView",
	template: _.template($(".sign-up-page-view-template").text()),
	events: {

	},

	initialize: function(){
		$(".sign-up-page").append(this.el);
		this.render();
	},

	render: function(){
	    this.$el.html(this.template());
	    return this;
	},

});

       

//    ____    __  __  _                 _   ___           
//   / __/__ / /_/ /_(_)__  ___ ____   | | / (_)__ _    __
//  _\ \/ -_) __/ __/ / _ \/ _ `(_-<   | |/ / / -_) |/|/ /
// /___/\__/\__/\__/_/_//_/\_, /___/   |___/_/\__/|__,__/ 
//                        /___/
//                           
var SettingsView = Parse.View.extend({
	className: "settingsView",
	template: _.template($(".settings-page-view-template").text()),
	events: {

	},

	initialize: function(){
		$(".settings-page").append(this.el);
		this.render();
	},

	render: function(){
	    this.$el.html(this.template());
	    return this;
	},

});



//    ___           __    _   ___           
//   / _ \___  ___ / /_  | | / (_)__ _    __
//  / ___/ _ \(_-</ __/  | |/ / / -_) |/|/ /
// /_/   \___/___/\__/   |___/_/\__/|__,__/ 
//
var PostView = Parse.View.extend({
	className: "postView",
	template: _.template($(".post-page-view-template").text()),
	events: {

	},

	initialize: function(){
		$(".post-page").append(this.el);
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
	className: "thumbnailView",
	template: _.template($(".thumbnail-page-view-template").text()),
	events: {

	},

	initialize: function(){
		$(".thumbnail-page").append(this.el);
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
	className: "detailView",
	template: _.template($(".detail-page-view-template").text()),
	events: {

	},

	initialize: function(){
		$(".detail-page").append(this.el);
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
	className: "profileView",
	template: _.template($(".profile-page-view-template").text()),
	events: {

	},

	initialize: function(){
		$(".profile-page").append(this.el);
		this.render();
	},

	render: function(){
	    this.$el.html(this.template());
	    return this;
	},

});