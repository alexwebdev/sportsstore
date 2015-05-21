angular.module('superFilters', [])
    .filter('dayName', function() {

        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];

        return function(input) {
            return angular.isNumber(input) ? dayNames[input] : input;
        };

    });