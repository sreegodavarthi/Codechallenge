var myApp = angular.module("myApp",[]);

myApp.controller("myCtrl", function ctrl($scope) {
    $scope.things =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 112, 113];
    $scope.filterEvenStartFrom = function (index) {
        return function (item) {
            return index++ % 2 == 1;
        };
    };
});

