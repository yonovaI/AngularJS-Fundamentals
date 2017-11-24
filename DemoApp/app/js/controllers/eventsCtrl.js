'use strict'

eventsApp.controller('eventsCtrl', function($scope, eventData){
    $scope.sortOrder = 'name';
    eventData.getEvent(function (event) {
        $scope.event = event;
    })
    $scope.voteUp = function(s){
        s.upVoting++;
    }
    $scope.voteDown = function(s){
        s.upVoting--;
    }
});