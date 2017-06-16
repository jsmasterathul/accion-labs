var jsonData = readJSON('test/unit-tests/json-data.json');
describe("Json Services", function () {

    beforeEach(module('frontEndTest'));

    describe("Json services", function () {

        var service, $httpBackend;

        beforeEach(inject(function($injector) {
            service = $injector.get('FetchJson');
            $httpBackend = $injector.get('$httpBackend');
            

            $httpBackend.when('GET', "http://jsonplaceholder.typicode.com/posts").respond(jsonData);
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('getPosts - should return all json data', function () {
            service.getPosts().then(function(response) {
                expect(response.length).toEqual(100); //the response is null
            });
            $httpBackend.flush();
        });


    });
});