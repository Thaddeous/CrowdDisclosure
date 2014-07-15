'use strict';

var Article = Parse.Object.extend({
	className: "Article",

	defaults: {
		postTitle: "",
		postContent: "",
		postContentEditor: "",
	}
});

var Articles = Parse.Collection.extend({
	model: Article,
});