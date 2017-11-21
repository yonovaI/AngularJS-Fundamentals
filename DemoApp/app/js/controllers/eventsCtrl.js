'use strict'

eventsApp.controller('eventsCtrl', function($scope, eventData){
    $scope.btnDisabled = false;
    $scope.sortOrder = 'name';
    $scope.event = eventData.event;
    $scope.voteUp = function(s){
        s.upVoting++;
    }
    $scope.voteDown = function(s){
        s.upVoting--;
    }
});