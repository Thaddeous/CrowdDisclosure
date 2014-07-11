'use strict';

Parse.initialize("fAAOcX6ymK5Y6cAxJm9SuWKueNwRuNg9a9yL9chU", "Rp7YkpFZqOV7jItJsut7vuDUBXO2GUPrWwkMTZr2");


// sign out functionality
$(".home-page-sign-out-button").click(function() {
	Parse.User.logOut();
	var currentUser = Parse.User.current();
});
