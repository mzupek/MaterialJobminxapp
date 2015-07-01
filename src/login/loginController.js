'use strict';
app.controller('loginController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {
    $scope.loginData = {
        userName: "",
        password: ""
    };

    $scope.message = "";

    $scope.login = function () {
        console.log("click");
        authService.login($scope.loginData).then(function (response) {

            $location.path('/consultant');

        },
         function (err) {

             $scope.message = err.error_description;
         });
    };
}]);
