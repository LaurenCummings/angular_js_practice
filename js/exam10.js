var app10 = angular.module('app10', []);

app10.directive("player", function() {
	
	var directive = {};

	directive.restrict = 'E';

});

app10.controller("mainCtrl", function($scope) {
	$scope.barryBonds = {name: "Barry Bonds", avg: 0.298, hr: 762, obp: 0.444};
	$scope.hankAaron = {name: "Hank Aaron", avg: 0.305, hr: 755, obp: 0.374};
	$scope.babeRuth = {name: "Babe Ruth", avg: 0.342, hr: 714, obp: 0.474};
	$scope.tedWilliams = {name: "Ted Williams", avg: 0.344, hr: 521, obp: 0.482};
});
	