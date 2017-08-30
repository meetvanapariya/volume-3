angular.module("myApp")
.controller('aboutCltr',function($scope,testFactory){
	
	$scope.submitData = function(x){
		testFactory.submitData(x).then(function(res){
		$scope.x={};
		alert("successfully added");
		getData();	
		},function(error){
			console.log(error);
		});

	}
	getData();
	function getData(){
		testFactory.getData()
		.then(function(res){
			$scope.allData = res.data;
			
		},function(error){
			console.log(error);
		});
	}
	$scope.deleteData = function(x){
		console.log(x);
		testFactory.deleteData(x).then(function(response){
			alert("successfully deleted");
			getData();
		},function(error){
			console.log(error);
		});
	}
});
