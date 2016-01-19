socialcircle.controller('mainController', function($scope,$location,$rootScope, $mdDialog, $mdMedia,$cordovaOauth) {
				this.scope   = $scope;
				
				
				  $scope.showConfirm = function(ev,item) {
						// Appending dialog to document.body to cover sidenav in docs app
						var confirm = $mdDialog.confirm()
							  .title(item.who)
							  .clickOutsideToClose(true)
							  .textContent(item.notes)
							  .ariaLabel('Lucky day')
							  .targetEvent(ev)
							  .ok('Share')
							  .cancel('Cancel');
						$mdDialog.show(confirm).then(function() {
						  $scope.feedbutton = '_SHARE';
						}, function() {
						   $scope.feedbutton = '_CANCEL';
						});
					  };
				


				
				
				
				
				
				
				
// HARD CODED FEEDS . CHANGE!!!!		
		$scope.refreshFeeds = function(){
			if($rootScope.loggedin_tw.loggedOn){
				
			}
		}
			
				$rootScope.feeds = $rootScope.twitter_feeds != null ? $rootScope.twitter_feeds : $rootScope.feeds ;
				//$rootScope.feeds = $rootScope.facebook_feeds  != null ? $rootScope.facebook_feeds : $rootScope.feeds ;
				
			var imagePath = 'img/list/60.jpeg';
$rootScope.feeds = [{
      face : imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands",
	  icon: "fa fa-university ",
	  iconstyle:"width:10%; color:ligthyellow;font-size:24px;",
	  fullfeed : null
    }];

});