(function(angular){
    angular
    .module('app', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider){
        
        $urlRouterProvider.otherwise('/home');

        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'about.html'
        });

        $locationProvider.hashPrefix('!');
        $locationProvider.html5Mode(true);
    }]);
})(angular);