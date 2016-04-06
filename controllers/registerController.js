controllers.controller('registerController', function($scope, $location, companyService) {
    $scope.company = {};
    $scope.company.company_id = null;
    $scope.company.name = null;
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

    $scope.registerNewCompany = function(company_id, name, address, city, country, email, phone_number, directors, owners) {
        if (company_id == null && name == null && address == null && city == null && country == null && directors.length == 0 && owners.length == 0) {
            $scope.message = "Company is not registered to the database!!!";
        } else {
            companyService.addCompany(company_id, name, address, city, country, email, phone_number, directors, owners).$promise.then(function(data) {
                    $scope.message = data.message;
                },
                function(error) {
                    console.log("Service Failure");
                });
        }
    }

    $scope.addDirectors = function() {
        $scope.directors.push({});
    }

    $scope.addOwners = function() {
        $scope.owners.push({});
    }
});