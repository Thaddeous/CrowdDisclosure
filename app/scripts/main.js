'use strict';

Parse.initialize("fAAOcX6ymK5Y6cAxJm9SuWKueNwRuNg9a9yL9chU", "Rp7YkpFZqOV7jItJsut7vuDUBXO2GUPrWwkMTZr2");


// sign out functionality
$(".sign-out-menu-link").click(function() {
	Parse.User.logOut();
	var currentUser = Parse.User.current();
});


var checkNav = function() {
	if(Parse.User.current()){
		var renderedTemplate = _.template($(".signed-in-header-view-template").text());
		$(".header-link-logged-in").html(renderedTemplate());

		$(".sign-out-menu-link").click(function() {
			Parse.User.logOut();
			var currentUser = Parse.User.current();
			router.navigate("/#", {trigger: true });
		});

	} else {
		var renderedTemplate = _.template($(".sign-up-header-view-template").text());
		$(".header-link-logged-in").html(renderedTemplate());
	}
}
