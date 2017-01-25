'use strict';

var app = angular.module('app', [
    'ng',
    'ngAnimate',
    'ui.router',
    'ui.bootstrap'
]);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$qProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $qProvider) {

        $qProvider.errorOnUnhandledRejections(false);

        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    '@': {
                        templateUrl: 'views/main.html',
                        controller: 'AppController'
                    },
                    'header@app': {
                        templateUrl: 'views/components/header.html',
                        controller: 'HeaderController'
                    },
                    'footer@app': {
                        templateUrl: 'views/components/footer.html',
                        controller: 'FooterController'
                    }
                }
            })
            .state('app.home', {
                url: '/',
                controller: 'HomeController',
                page: { title: 'Home Page' },
                templateUrl: 'views/home.html'
            })
            .state('app.about', {
                url: '/about',
                controller: 'AboutController',
                page: { title: 'About Page' },
                templateUrl: 'views/about.html'
            });

        $urlRouterProvider.otherwise('/404');
        $locationProvider.html5Mode(true);
    }
]).run(function ($rootScope, $state, $log) {
    $rootScope.$log = $log;
    $rootScope.$state = $state;
});

app.constant('config', require('../../config.json'));

//////////////////////////////////////////////////////
///////////////////// CONTROLLERS ////////////////////
//////////////////////////////////////////////////////

require('./controllers/app.controller');
require('./controllers/home.controller');
require('./controllers/about.controller');


require('./controllers/components/footer.controller');
require('./controllers/components/header.controller');

//////////////////////////////////////////////////////
///////////////////// DIRECTIVES ////////////////////
//////////////////////////////////////////////////////
