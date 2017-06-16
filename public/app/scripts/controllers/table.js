angular
    .module('frontEndTest')
    .controller('TableCtrl', ['$scope', 'FetchJson', function ($scope, FetchJson) {
        FetchJson.getPosts().then(function (posts) {
            $scope.posts = posts;
            $scope.propertyName = 'userId';
            $scope.reverse = false;
        });

        $scope.sortBy = function (propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName && $scope.reverse) ? false : true;
            $scope.propertyName = propertyName;
        };
    }])