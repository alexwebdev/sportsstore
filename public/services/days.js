angular.module('sportsStore')
    .service('days', function() {
        this.today = new Date().getDay();
        this.tomorrow = this.today + 1;
    });