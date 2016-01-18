socialcircle.controller('menuController', function($scope,$location,$rootScope,$mdSidenav,$cordovaOauth, $http) {
				this.scope   = $scope;
			
			$scope.openLeftMenu = function(){$mdSidenav('left').toggle();};
	
					$scope.fb_login = function () {
						$cordovaOauth.facebook('1636454786575094', [
						'email',
						'public_profile'
						], {
						redirect_uri: 'http://localhost:8000/callback'
						}).then(function (result) {
						displayData_FB($http, result.access_token);
						}, function (error) {
						alert(error);
						});
					};
					
					$scope.tw_login = function(){
						var api_key = "raicqH0dmpIs3YLfsjQwgMYVm"; 
						var api_secret = "xAocKfg4qwfxzL0xTXUJGFmmxn9Cn2LrNTQcPOyv8L8GeDmrNF";
						var myToken ='';
						//var twitterKey ="twitterKey";
						var twitterKey = 'STORAGE.TWITTER.KEY';
						    $cordovaOauth.twitter(api_key, api_secret).then(function (succ) {
								myToken = succ;
								window.localStorage.setItem(twitterKey, JSON.stringify(succ));
								//$twitterApi.configure(api_key, api_secret, succ);
								//$scope.showHomeTimeline();
								console.log('Success');
								
								$rootScope.loggedin_tw= succ;
								$rootScope.loggedin_tw.loggedOn = true;
							  }, function(error) {
								console.log(error);
							  });
						
																			
					}
					
					

					function displayData_FB($http, access_token)
					{
							$http.get('https://graph.facebook.com/v2.2/me', {
							params: {
									access_token: access_token,
									fields: 'name,gender,location,picture',
									format: 'json'
							}
						}).then(function (result) {
						
						$rootScope.loggedin_fb= result.data;
						$rootScope.loggedin_fb.loggedOn = true;
					//	var authUser = '{"name": "' + name + '", "gender": "' + result.data.gender + '"}'
					//	console.log(authUser);
					//	BackendService.loginBack(authUser).then(function successCallback(response) {
						console.log('Success');
						//$location.path('/home');
						
						}, function errorCallback(response) {
						//	console.log('Error ');
							alert(response);
						
						}, function (error) {
							alert(error);
							//OwnPlugin.showToast("Login Failed ~ Could not display() ");
						});
					};
});
