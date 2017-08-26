angular.module("myApp")
.controller('casualCltr',function($scope,$http){
	$http.get("http://localhost/25-8/server/casulshoes.php")
	.then(function(response){
		$scope.img1 = response.data;
	}, function(error){
		 $scope.content = "Something went wrong";
	});
	
});


