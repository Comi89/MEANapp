'use strict';

/**
 * @ngdoc service
 * @name clientAppApp.RESTfactory
 * @description
 * # RESTfactory
 * Factory in the clientAppApp.
 */
angular.module('clientAppApp')
  .factory('RESTfactory', function ($http, $q) {

    var products = [];
    function getProducts(){
      var deffered = $q.defer();
      products = [];
      $http({
        method: 'GET',
        url: 'http://localhost:3333/api/products'
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        products = response.data;
        deffered.resolve(products);
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        products = "error";
        deffered.reject(products);
      });
      return deffered.promise;
    }

    // Public API here
    return {
      getProducts: getProducts
    };
  });
