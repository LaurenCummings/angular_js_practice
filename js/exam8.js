angular.module('app8', [])

.directive("jqlDirective", function() {
	return function(scope, element, attrs) {
		var players = element.children();

		var listOfPlayers = "";

		for(i = 0; i < players.length; i++){
			if(players.eq(i).text() == "Barry Bonds"){
				players.eq(i).css("color", "red");

				players.eq(i).attr("number", "25");
			}
		}
	}
})

.controller("mainCtrl", function($scope) {
	
})