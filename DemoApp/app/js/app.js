'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/newEvent',{
            templateUrl: '/templates/NewEvent.html',
            controller: 'editEventCtrl'
        });

        $routeProvider.when('/events',{
            templateUrl: '/templates/EventList.html',
            controller: 'EventListController'
        });

        $routeProvider.when('/event/:eventId',
            {
                templateUrl: 'templates/eventDetails.html',
                controller: 'eventsCtrl'
            });

        $routeProvider.otherwise({redirectTo: '/events'});
    });
