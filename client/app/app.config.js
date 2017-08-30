angular.module("myApp",['ui.router'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
 $stateProvider
 .state('home',{
 	url : '/home',
 	templateUrl : 'view/home.html'
	})
 .state('formalshoes',{
 	url : '/formalshoes',
 	templateUrl : 'view/formalshoes.html'	
 })
 .state('casualshoes',{
 	url : '/casualshoes',
 	templateUrl : 'view/casualshoes.html',
 	controller : 'casualCltr'		
  })
 .state('aboutus',{
 	url : '/aboutus',
 	templateUrl : 'view/aboutus.html',
 	controller : 'aboutCltr'		
  })
 $urlRouterProvider.otherwise('/home');
}])