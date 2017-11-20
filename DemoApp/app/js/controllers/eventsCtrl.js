'use strict'

eventsApp.controller('eventsCtrl', function($scope){
    $scope.btnDisabled = false;
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
                name: 'Directives Masterclass',
                upVoting: 0,
                downVoting: 0
            },
            {
                name: 'Directives Masterclass 1',
                upVoting: 0,
                downVoting: 0
            },
            {
                name: 'Directives Masterclass 2',
                upVoting: 0,
                downVoting: 0
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