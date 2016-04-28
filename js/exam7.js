var app7 = angular.module('app7', ['weatherFilters']);

app7.controller('mainCtrl', function($scope) {

	$scope.students = [
		{name: "George Thomas", gpa: 3.5},
		{name: "Susy Smith", gpa: 3.6},
		{name: "Paul Marks", gpa: 3.2},
		{name: "Sue Edgar", gpa: 3.8}
	];

	$scope.student = {
		gpas:[
			{name: "George Thomas", gpa: 3.5},
			{name: "Susy Smith", gpa: 3.6},
			{name: "Paul Marks", gpa: 3.2},
			{name: "Sue Edgar", gpa: 3.8}
		]
	};

	$scope.currDate = new Date();

	$scope.randomStr = "Lorem ipsum dolor sit amet, consectetur";

	$scope.randArray = [
		"Tomato",
		"Potato",
		"Bread",
		"Pickles",
		"Raisins"
	];

	$scope.weather = [
		{day: "Monday", rain: false},
		{day: "Tuesday", rain: true}
	];

});