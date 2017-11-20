'use strict';
eventsApp.filter('durations', function () {
    return function (duration) {
        switch (duration) {
            case 1:
                return '1 Hour';
            case 2:
                return 'Half Day';
            case 3:
                return 'Full Day';
        }
    }
})