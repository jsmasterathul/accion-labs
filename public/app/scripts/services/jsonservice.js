angular
    .module('frontEndTest')
    .factory('FetchJson', ['$http', '$q', function ($http, $q) {
        var posts = [];

        

        return {
            getPosts: function () {
                var defer = $q.defer();
                $http.get('http://jsonplaceholder.typicode.com/posts')
                    .then(function (fetchedPosts) {
                        posts = fetchedPosts.data;
                        defer.resolve(posts);
                    })
                return defer.promise;
            }
        }
    }]);