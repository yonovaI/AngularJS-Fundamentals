'use strict'

eventsApp.controller('eventsCtrl', function($scope, eventData, $log){
    $scope.sortOrder = '-upVoteCount';
    eventData.getEvent()
        .$promise.then(function (event) {
            $scope.event = event;
        })
        .catch(function (res) {
            console.log(res);
        })

        // $http:
        // .success(function (event) {
        //     $scope.event = event;
        // })
        // .error(function(data, status, headers, config){
        //     $log.warn(data, status, headers(), config);
        // })
    $scope.voteUp = function(session){
        session.upVoteCount++;
    }
    $scope.voteDown = function(session){
        session.upVoteCount--;
    }
});