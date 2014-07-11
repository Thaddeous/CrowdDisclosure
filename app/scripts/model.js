'use strict';

var Article = Parse.Object.extend({
	className: "Article",

	defaults: {
		postTitle: "",
		postContent: "",
	}
});

var Articles = Parse.Collection.extend({
	model: Article
});