socialcircle.controller('mainController', function($scope,$location,$rootScope, $mdDialog, $mdMedia,$cordovaOauth) {
				this.scope   = $scope;
				
				
				  $scope.showConfirm = function(ev,item) {
						// Appending dialog to document.body to cover sidenav in docs app
						var confirm = $mdDialog.confirm()
							  .title(item.what)
							  .clickOutsideToClose(true)
							  .textContent(item.notes)
							  .ariaLabel('Lucky day')
							  .targetEvent(ev)
							  .ok('Share')
							  .cancel('Cancel');
						$mdDialog.show(confirm).then(function() {
						  $scope.status = 'You decided to get rid of your debt.';
						}, function() {
						  $scope.status = 'You decided to keep your debt.';
						});
					  };
				


				
				
				
				
				
				
				
// HARD CODED FEEDS . CHANGE!!!!				
				
			var imagePath = 'img/list/60.jpeg';
$scope.messages = [{
      face : imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }];

});