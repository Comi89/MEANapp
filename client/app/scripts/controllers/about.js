'use strict';

/**
 * @ngdoc function
 * @name clientAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientAppApp
 */
angular.module('clientAppApp')
  .controller('AboutCtrl', function (RESTfactory) {
    var vm = this;
    vm.products = [];
    RESTfactory.getProducts().then(function(data){
      vm.products = data;
    });

    vm.productDetails = function(id){
      console.log(id);
    }
  });
