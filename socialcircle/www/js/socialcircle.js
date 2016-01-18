 var socialcircle = angular.module("socialcircle", ['ngRoute','ngCordova','ngMaterial']);
 
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

socialcircle.config(function($routeProvider,$locationProvider) {
        $routeProvider 
           
           .when('/main', {
			   templateUrl: 'templates/main.html'
			})
			
			    .when('/capture', {
			   templateUrl: 'templates/captureImage.html'
			})
			
			
			.otherwise({
			redirectTo: '/main'
		});
	
	   
    });






// Add a valid option for exit 
document.addEventListener("deviceready", function () {
       
});

		
 function menuKeyDown() {
	//	alert('Menu button pressed.');
	}
	
