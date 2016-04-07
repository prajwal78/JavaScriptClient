services.factory('companyService', function($resource) {

    var getCompaniesResource = $resource('https://young-atoll-83319.herokuapp.com/companies', {}, {
        getAllCompanies: {
            method: 'GET',
            isArray: true
        }
    });

    var getCompanyResource = $resource('https://young-atoll-83319.herokuapp.com/company/:id', {}, {
        getCompany: {
            method: 'GET',
            isArray: true
        }
    });

    var addNewCompanyResource = $resource('https://young-atoll-83319.herokuapp.com/company', {}, {
        addNewCompany: {
            method: 'POST',
            isArray: false
        }
    });

    var updateCompanyResource = $resource('https://young-atoll-83319.herokuapp.com/company', {}, {
        updateCompany: {
            method: 'PUT',
            isArray: false
        }
    });

    return {
        getCompanies: function() {
            return getCompaniesResource.getAllCompanies({

            })
        },
        getCompanyDetails: function(company_id) {
            return getCompanyResource.getCompany({
                id: company_id
            })
        },
        addCompany: function(company_id, name, address, city, country, email, phone_number, directors, owners) {
            var newCompany = {
                company: {
                    company_id: company_id,
                    name: name,
                    address: address,
                    city: city,
                    country: country,
                    email: email,
                    phone_number: phone_number,
                    directors: directors,
                    owners: owners
                }
            }
            return addNewCompanyResource.addNewCompany(newCompany)
        },
        updateCompanyDetails: function(id, name, address, city, country, email, phone_number, directors, owners) {
            var updComp = {
                company: {
                    company_id: id,
                    name: name,
                    address: address,
                    city: city,
                    country: country,
                    email: email,
                    phone_number: phone_number,
                    directors: directors,
                    owners: owners
                }
            }
            return updateCompanyResource.updateCompany(updComp)
        }
    }
});