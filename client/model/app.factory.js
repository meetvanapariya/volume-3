angular.module('myApp')
.factory('testFactory',['$q','$http',function($q,$http){
	var obj={};
	/*obj.login= function(x){
		var defer =$q.defer();
		$http.post("http://localhost/25-8/server/scandir.php?x1="+rootScope.x1)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}*/
	obj.submitData = function(arr){
		var defer = $q.defer();
		$http.post("http://localhost/25-8/server/submitform.php",arr)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
		}
	obj.getData = function(){
		var defer = $q.defer();
		$http.get("http://localhost/25-8/server/reciveform.php")
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.deleteData = function(x){
		var defer = $q.defer();
		$http.post("http://localhost/25-8/server/deleteformdata.php?id="+x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	
	return obj;
}])	