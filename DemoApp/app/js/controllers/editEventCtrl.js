eventsApp.controller('editEventCtrl', function ($scope) {

        $scope.saveEvent = function(event, newEventForm) {
            if(newEventForm.$valid) {
                alert('event' + event.name + 'is saved!');
            }
        };
        
        $scope.cancelEvent = function () {
            window.location = '/eventDetails.html';
        }

})