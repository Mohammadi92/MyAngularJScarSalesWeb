var myApp = angular.module("myApp", [ "ngRoute" ]);

myApp.config(function($routeProvider) {
	$routeProvider.
	when("/books", {
		templateUrl : "partials/cars-list.html",
		controller : "MyCtrl2"

	})
	.when("/Cart", {

		templateUrl : "partials/Cart-list.html",
		controller : "CartListCtrl"
	})

	.otherwise({
		redirectTo : "/books"
	});

});

myApp.factory("cartservice", function() {

	var cart = [];

	return {
		getkart : function() {
			return cart;

		},
		addToKart1 : function(book) {
			console.log("ADD TO CART 30 CART before ",cart);
			cart.push(book);
			console.log("ADD TO CART 32 cart after ",cart);

		},

		buy : function(book) {

			alert("HOPE YOU ENJOY YOUR DREAM MACHINE", book.name);

		}

	}

});

myApp.factory("bookservice",	function() {
					var books = [
							{
								"product_description" : " DODGE VIPER",
								"shipping_details" : "CALL DEALERSHIP (718-555-5555)",
								"customer_reviews" : "The Viper is both all-American and a true exotic, with lots of curves and bulges in all the right places to let you know it means business. The long nose, bodacious body, and predatory stare give the Viper a menacing look, while its 645-hp, 8.4-liter V-10 can catapult it to 60 mph in about three seconds.  ",
								"price" : "$140,000.00",
								"image_path" : "../images/viper.jpeg",
								"stock_availability" : "5 star",
								"no_of_items" : "2014"
							},
							{
								"product_description" : "Koenigsegg Agera r",
								"shipping_details" : "CALL DEALERSHIP (718-555-5555)",
								"customer_reviews" : " The Koenigsegg Agera R is an exclusive hypercar born from the mind of Christian von Koenigsegg, a Swedish entrepreneur who turned a childhood dream into a reality when he formed his own car company over 15 years ago. ",
								"price" : "$1.5 million",
								"image_path" : "../images/kowesnesig.jpeg",
								"stock_availability" : "5 star",
								"no_of_items" : "2014"
							},
							{
								"product_description" : "Pagani Hyara",
								"shipping_details" : "CALL DEALERSHIP (718-555-5555)",
								"customer_reviews" : "Somewhat obscure, and very low production, it’s a hard-core machine for discriminating connoisseurs with sufficient liquidity. Brilliantly quick, tenacious on any surface, and almost freakishly aggressive, it’s a car that beautifully warps the minds of the world’s youth. ",
								"price" : "$1 million",
								"image_path" : "../images/zayra.jpeg",
								"stock_availability" : "5 star",
								"no_of_items" : "2015"
							},
							{
								"product_description" : "Bugatti veyron Mansory",
								"shipping_details" : "CALL DEALERSHIP (718-555-5555)",
								"customer_reviews" : "Given the nature on how Mansory builds its programs, the Vivere program for the Veyron fits right into the Swiss tuner’s wheelhouse. ",
								"price" : "$3.3 million",
								"image_path" : "../images/mansory.jpeg",
								"stock_availability" : "5 star",
								"no_of_items" : "2016"
							},
							{
								"product_description" : "Laferaari",
								"shipping_details" : "CALL DEALERSHIP (718-555-5555)",
								"customer_reviews" : " Above sports cars, there are exotic sports cars. And the LaFerrari is poised to be the king of all exotic sports cars. Its 789-hp V-12 gets a 161-hp boost from an electric motor—that’s right, it’s a hybrid—enabling it to accelerate like a Bugatti Veyron while achieving somewhat respectable fuel economy. ",
								"price" : "$1.5 million",
								"image_path" : "../images/greenlaferrari.jpeg",
								"stock_availability" : "5 star",
								"no_of_items" : "2015"
							},
							{
								"product_description" : "Porsche 918 ",
								"shipping_details" : "CALL DEALERSHIP (718-555-5555)",
								"customer_reviews" : " It took Porsche years to develop a worthy successor to the vaunted Carrera GT supercar, but at last, the 918 is here—and it’s a plug-in hybrid! With a combined 887 hp and 944 lb-ft of torque from its mid-mounted V-8 and electric motors—one at each axle—the 918 delivers Bugatti-like acceleration, tenacious handling, and a 211-mph top end. ",
								"price" : "$997,000.00",
								"image_path" : "../images/porsche.jpeg",
								"stock_availability" : "5 star",
								"no_of_items" : "2012"
							},
							{
								"product_description" : "BMW i8",
								"shipping_details" : "CALL DEALERSHIP (718-555-5555)",
								"customer_reviews" : " A turbocharged three-cylinder gas engine teams with two electric motors for a combined 357 hp; the i8 hits 60 mph faster than an M3. Top speed is 155 mph; fuel economy is less than 30 mpg—amazing for a supercar but not for a plug-in.  ",
								"price" : "$140,000.00",
								"image_path" : "../images/bmw.jpeg",
								"stock_availability" : "5 star",
								"no_of_items" : "2016"
							} 
							
							];
					
					return {

						getBooks : function() {

							return books;

						}

					}

				});

myApp.controller("CartListCtrl", function($scope,cartservice) {

	$scope.cart = cartservice.getkart();

	$scope.buy = function(book) {

		cartservice.buy(book);

	}
	
});

myApp.controller("MyCtrl", function($scope, $location) {
	$scope.appDetails = {};
	$scope.appDetails.title = "LUXURY AUTO";
	$scope.appDetails.tagline = "We have lots of cars in inventory";

	
    $scope.nav={};
    $scope.nav.isActive=function(path){
    	 if (path===$location.path()){
    		 return true;
    	 }
    	return false;
    }
	
});

myApp.controller("MyCtrl2", function($scope, bookservice, cartservice) {
	$scope.allproducts = bookservice.getBooks();

	$scope.addToKart = function(book) {
		cartservice.addToKart1(book);
console.log("JUST CHECK 149 ");

	
	}

});
