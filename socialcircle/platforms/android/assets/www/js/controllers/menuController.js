socialcircle.controller('menuController', function($scope,$location,$rootScope,$mdSidenav) {
				this.scope   = $scope;
			
			$scope.openLeftMenu = function(){$mdSidenav('left').toggle();};
	

});
