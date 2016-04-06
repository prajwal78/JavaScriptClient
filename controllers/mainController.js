controllers.controller('mainController', function($scope, $location, companyService) {

    companyService.getCompanies().$promise.then(function(data) {
            $scope.companies = data;
        },
        function(error) {
            console.log("Service Failure");
        });

    $scope.redirectToRegistrationPage = function() {
        $location.path("/register");
    }

});