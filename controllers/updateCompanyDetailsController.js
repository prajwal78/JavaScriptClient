controllers.controller('updateCompanyDetailsController', function($scope, $location, $routeParams, companyService) {

    var id = $routeParams.id;
    var name = $routeParams.name;

    $scope.company = {};
    $scope.company.address = null;
    $scope.company.city = null;
    $scope.company.country = null;
    $scope.company.email = null;
    $scope.company.phone_number = null;
    $scope.company.directors = null;
    $scope.company.owners = null;
    $scope.directors = [];
    $scope.owners = [];
    $scope.message = null;

    $scope.updateCompanyDetails = function(address, city, country, email, phone_number, directors, owners) {

        if (address == null && city == null && country == null && phone_number == null && directors == null && owners == null) {
            $scope.message = "Company details not update to the database!!!"
        } else {
            companyService.updateCompanyDetails(id, name, address, city, country, email, phone_number, directors, owners).$promise.then(function(data) {
                    $scope.message = data.message;
                },
                function(error) {
                    console.log("Service Failure");
                });
        }
    }

    $scope.updateDirectors = function() {
        $scope.directors.push({});
    }

    $scope.updateOwners = function() {
        $scope.owners.push({});
    }
});