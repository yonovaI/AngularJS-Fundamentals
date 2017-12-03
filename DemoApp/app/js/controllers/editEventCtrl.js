eventsApp.controller('editEventCtrl', function ($scope, eventData) {

        $scope.saveEvent = function(event, newEventForm) {
            if(newEventForm.$valid) {

                eventData.save(event)
                    .$promise
                        .then(function (res) {console.log('success!', event)})
                    .error(function (res) {
                        console.log(res)
                    })

            }
        };
        
        $scope.cancelEvent = function () {
            window.location = '/eventDetails.html';
        }

})