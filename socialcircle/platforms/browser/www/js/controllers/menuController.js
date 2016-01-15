socialcircle.controller('menuController', function($scope,$location,$rootScope,$mdSidenav,$cordovaOauth) {
				this.scope   = $scope;
			
			$scope.openLeftMenu = function(){$mdSidenav('left').toggle();};
	

	
					
				
					$scope.fb_login = function () {
						$cordovaOauth.facebook('1636454786575094', [
						'email',
						'public_profile'
						], {
						redirect_uri: 'http://localhost:8000/callback'
						}).then(function (result) {
						displayData($http, result.access_token);
						}, function (error) {
						alert(error);
						});
					};


					function displayData($http, access_token)
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
						var authUser = '{"name": "' + name + '", "gender": "' + result.data.gender + '"}'
						console.log(authUser);
					//	BackendService.loginBack(authUser).then(function successCallback(response) {
						console.log('Success');
						//$location.path('/home');
						
						}, function errorCallback(response) {
							console.log('Error ');
							alert(response);
						
						}, function (error) {
							alert(error);
							//OwnPlugin.showToast("Login Failed ~ Could not display() ");
						});
					};
});
