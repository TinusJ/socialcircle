socialcircle.controller('menuController', function($scope,$location,$rootScope,$mdSidenav,$cordovaOauth, $http,$twitterApi) {
				this.scope   = $scope;
			
			$scope.openLeftMenu = function(){$mdSidenav('left').toggle();};
	
					$scope.fb_login = function () {
						$cordovaOauth.facebook('1636454786575094', [
						'email',
						'public_profile',
						'user_posts'
						], {
						redirect_uri: 'http://localhost:8000/callback'
						}).then(function (result) {
						displayData_FB($http, result.access_token);
						}, function (error) {
						alert(error);
						});
					};
					
					 $scope.tweet = {};
					  
					$scope.tw_login = function(){
						var api_key = "raicqH0dmpIs3YLfsjQwgMYVm"; 
						var api_secret = "xAocKfg4qwfxzL0xTXUJGFmmxn9Cn2LrNTQcPOyv8L8GeDmrNF";
				
						//var twitterKey ="twitterKey";
						var twitterKey = 'STORAGE.TWITTER.KEY';
						
						    myToken = JSON.parse(window.localStorage.getItem(twitterKey));
							if (myToken === '' || myToken === null) {
								$cordovaOauth.twitter(api_key, api_secret).then(function (succ) {
									myToken = succ;
									window.localStorage.setItem(twitterKey, JSON.stringify(succ));
									console.log('Success');
									$twitterApi.configure(api_key, api_secret, succ);
									$rootScope.showHomeTimeline();
									$rootScope.loggedin_tw= succ;
									console.log(succ);
									$rootScope.loggedin_tw.loggedOn = true;
								  }, function(error) {
									console.log(error);
								  });
							}else {
								  $twitterApi.configure(api_key, api_secret, myToken);
								  $scope.showHomeTimeline();
								  	$rootScope.loggedin_tw= myToken;
									console.log(myToken);
									$rootScope.loggedin_tw.loggedOn = true;
								}
													
																			
					}
					
					$rootScope.showHomeTimeline = function() {
						  $twitterApi.getHomeTimeline().then(function(data) {
							$rootScope.twitter_feeds = data;
							console.log($rootScope.twitter_feeds);
							angular.forEach($rootScope.twitter_feeds, function(object) {
								//console.log(object.extended_entities.media.0.display_url);
								//  var obj = $rootScope.feeds;
								  $rootScope.feeds.push({"face":object.user.url,"what":"","who":object.user.name,"when":object.created_at,"notes":object.text,"icon":"fa fa-twitter x5","iconstyle":"width:10%; color:lightblue;font-size:24px;","fullfeed":object});
								//  $rootScope.feeds = JSON.stringify(obj);
								});
						  });
						};

						
						
					$scope.correctTimestring = function(string) {
						  return new Date(Date.parse(string));
						};

					function displayData_FB($http, access_token)
					{
							$http.get('https://graph.facebook.com/v2.5/me', {
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
						
						$http.get("https://graph.facebook.com/v2.5/me/feed", { params: { access_token: access_token, format: "json" }}).then(function(result) {
									$rootScope.facebook_feeds = result.data.data;
								console.log(result);
								console.log(result.data);
								//	$rootScope.facebook_feeds =result.data.data;
									
									
								angular.forEach($rootScope.facebook_feeds, function(object) {
								//console.log(object.extended_entities.media.0.display_url);
								//  var obj = $rootScope.feeds;
								  $rootScope.feeds.push({"face":null,"what":"","who":object.id,"when":object.created_time,"notes":object.story != null ? object.story  : object.message,"icon":"fa fa-facebook-f x5","iconstyle":"width:10%; color:blue;font-size:24px;","fullfeed":object});
								//  $rootScope.feeds = JSON.stringify(obj);
								});

								}, function(error) {
									alert("There was a problem getting your profile.  Check the logs for details.");
									console.log(error);
								});
					};
});
