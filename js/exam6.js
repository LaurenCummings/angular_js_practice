var app6 = angular.module('app6', []);

app6.controller('mainCtrl', function() {
	this.name = "Animal";
	this.sound = "Grrr";

	this.animalClick = function() {
		alert(this.name + " says " + this.sound);
	};
});

app6.controller('dogCtrl', function($controller) {
	var childCtrl = this;

	childCtrl.child = $controller('mainCtrl', {});

	childCtrl.child.name = "Dog";

	childCtrl.child.bark = "Wooof";

	childCtrl.child.dogData = function() {
		alert(this.name + " says " + this.sound + " and " + this.bark);
	}
})
