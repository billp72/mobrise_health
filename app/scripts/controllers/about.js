'use strict';

/**
 * @ngdoc function
 * @name prototypeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the prototypeApp
 */
angular.module('prototypeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
