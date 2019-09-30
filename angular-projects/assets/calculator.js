/* JavaScript Document */

/* This is an Enclosure of an anonymous function. */
/* So the reason we're doing this is so that this particular function in this JavaScript file can exist with other JavaScripts in a page and everything that we're going to define inside up here is going to be to declare the Angular application for the HTML.
*/


(function(){
	
var app = angular.module('myCalculator',[]);

app.controller('CalculatorController', ['$scope', function($scope){  /* This is the $scope service from angular And what the scope service allows us to do is pass variables between the HTML and the JavaScript. */

	$scope.lumen_options = [375, 600, 1125, 1600];
	$scope.current_lumens = 600;
	$scope.current_cost = 12;
	$scope.current_hours = 3;
	$scope.total_days = 365;
	
	$scope.inc_converstion = .0625;
	$scope.hal_converstion = .0450;
	$scope.cfl_converstion = .0146;
	$scope.led_converstion = .0125;

	$scope.calculate = function(){
		/*alert('success');*/
		
		$scope.inc_wattage = ($scope.current_lumens * $scope.inc_converstion).toFixed(1);
		$scope.hal_wattage = ($scope.current_lumens * $scope.hal_converstion).toFixed(1);
		$scope.cfl_wattage = ($scope.current_lumens * $scope.cfl_converstion).toFixed(1);
		$scope.led_wattage = ($scope.current_lumens * $scope.led_converstion).toFixed(1);
		
		if( $scope.current_hours > 24 ) {$scope.current_hours = 24; };
		
		var total_hours = $scope.total_days * $scope.current_hours;
		var cost = $scope.current_cost / 100;
		
		$scope.inc_cost = ((($scope.inc_wattage * total_hours) / 1000) * cost).toFixed(2);
		$scope.hal_cost = ((($scope.hal_wattage * total_hours) / 1000) * cost).toFixed(2);
		$scope.cfl_cost = ((($scope.cfl_wattage * total_hours) / 1000) * cost).toFixed(2);
		$scope.led_cost = ((($scope.led_wattage * total_hours) / 1000) * cost).toFixed(2);
	};
	
	$scope.calculate();

}]);
	
	
	
})();






















