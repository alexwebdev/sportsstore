angular.module('sportsStore')
    .controller('dayCtrl', function($scope, days) {

        $scope.day = days.today;

    });