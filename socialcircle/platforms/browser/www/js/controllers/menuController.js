socialcircle.controller('menuController', function($scope,$location,$rootScope,$mdSidenav) {
				this.scope   = $scope;
			
			$scope.openLeftMenu = function(){$mdSidenav('left').toggle();};
	

});

var app = angular.module('myApp', ['ngMaterial']);
app.controller('MyController', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
});