'use strict';

var HomeView = Parse.View.extend({
	className: "homeView",
	template: _.template($(".home-page-view-template").text()),
	events: {
	},

	initialize: function(){
		$(".home-page").append(this.el);
		this.render();
		console.log("homeView this.model.attributes", this.model.attributes);
	},

	render: function(){
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	}
});