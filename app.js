var app = angular.module("registrationApp", []);

app.controller("FormController", function($scope) {
    $scope.user = {};
    $scope.submitted = false;

    $scope.submitForm = function() {
        if ($scope.regForm.$valid) {
            $scope.submitted = true;
        }
    };
});
