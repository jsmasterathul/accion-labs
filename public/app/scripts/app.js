angular
.module('frontEndTest', [ 'ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/table.html',
    controller: 'TableCtrl'

  })
  .otherwise({
        redirectTo: '/'
      });

});

