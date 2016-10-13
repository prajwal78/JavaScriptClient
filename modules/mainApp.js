var mainApp = angular.module('mainApp', ['ngRoute', 'ngResource', 'controllers', 'services']);

mainApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: './partialViews/main_page_template.html'
        }).when('/register', {
            templateUrl: './partialViews/register_company_template.html',
            controller: 'registerController'
        }).when('/company/:id', {
            templateUrl: './partialViews/company_details_template.html',
            controller: 'companyDetailsController'
        }).when('/company/update/:id/:name', {
            templateUrl: './partialViews/update_company_details_template.html',
            controller: 'updateCompanyDetailsController'
        }).otherwise({
            redirectTo: '/home'
        })
    }
]);