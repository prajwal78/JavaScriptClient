controllers.controller('companyDetailsController', function($scope, $location, $routeParams, companyService) {

    var companyID = $routeParams.id;
    var companies = $scope.companies;
    $scope.company = null;

    companyService.getCompanyDetails(companyID).$promise.then(function(data) {
            $scope.company = data[0];
        },
        function(error) {
            console.log("Service Failure");
        });

    $scope.redirectToUpdateCompanyDetailsPage = function(company_id, name) {
        $location.path('/company/update/' + company_id + '/' + name);
    }



});