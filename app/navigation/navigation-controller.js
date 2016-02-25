(function(){
	angular.module('WebDev')
	.controller('NavigationController', ['$scope','$http','$state', function($scope, $http, $state){
		$scope.logUserIn = function(){
			
			if(localStorage['User-Data']){
				$scope.loggedIn = true;
			} else{
				$scope.loggedIn = false;
			}

			$http.post('api/user/login', $scope.login).success(function(response){
				localStorage.setItem('User-Data', JSON.stringify(response));
				$scope.loggedIn = true;
			}).error(function(error){
				console.error(error);
			});
		};
        
        $scope.logOut = function(){
            localStorage.clear();
            $scope.loggedIn = false;
        }
	}]);
}());