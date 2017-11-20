'use strict'

eventsApp.controller('eventsCtrl', function($scope){
    $scope.btnDisabled = false;
    $scope.sortOrder = 'name';
    $scope.event = {
        name: 'Anglar bootcamp',
        date: new Date(),
        time: new Date().getHours(),
        location: {
            city: 'Sofia',
            address: 'Knyaginya Tamara Street',
            province: 'Sofia'
        },
        imageUrl: '/img/angularjs-logo.png',
        sessions: [
            {
                name: 'Directives Masterclass - Getting Started',
                upVoting: 0,
                duration: 1
            },
            {
                name: 'Directives Masterclass 1',
                upVoting: 0,
                duration: 2
            },
            {
                name: 'Directives Masterclass 2',
                upVoting: 0,
                duration: 2
            },
            {
                name: 'Directives Masterclass 3',
                upVoting: 0,
                duration: 3
            },
            {
                name: 'Advanced Directives Masterclass',
                upVoting: 0,
                duration: 3
            }
        ]
    }
    $scope.voteUp = function(s){
        s.upVoting++;
    }
    $scope.voteDown = function(s){
        s.upVoting--;
    }
});