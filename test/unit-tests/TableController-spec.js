
var jsonData = readJSON('test/unit-tests/json-data.json');

describe("TableController", function () {

    beforeEach(module('frontEndTest'));
    var $controller;

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('changes the property name and reverse property on calling the sortBy method',function(){
        var $scope = {};
        var controller = $controller('TableCtrl', { $scope: $scope });
       $scope.posts = jsonData;
       
       $scope.sortBy('title');
       expect($scope.propertyName).toBe('title');
       expect($scope.reverse).toBe(true);

       $scope.sortBy('title');
       expect($scope.propertyName).toBe('title');
       expect($scope.reverse).toBe(false);

     
    });



});