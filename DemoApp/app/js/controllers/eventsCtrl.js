'use strict'

eventsApp.controller('eventsCtrl', function($scope, eventData, $log, $anchorScroll, $routeParams){
    $scope.sortOrder = '-upVoteCount';
    $scope.event = eventData.getEvent($routeParams.eventId);


    $scope.voteUp = function(session){
        session.upVoteCount++;
    }
    $scope.voteDown = function(session){
        session.upVoteCount--;
    }
    $scope.scrollToSession = function () {
        $anchorScroll();
    }
});