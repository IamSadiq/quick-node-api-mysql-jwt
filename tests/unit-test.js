var expect  = require('chai').expect;
var request = require('request');

it('Home route status', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

// it('Home route content', function(done) {
//     request('http://localhost:3000' , function(error, response, body) {
//         expect(body).to.equal(render('index', { title: 'Express' }));
//         done();
//     });
// });

it('Users route status', function(done) {
    request('http://localhost:3000/users' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Users route content', function(done) {
    request('http://localhost:3000/users' , function(error, response, body) {
        expect(body).contains(Object);
        done();
    });
});

it('About page status', function(done) {
    request('http://localhost:3000/about' , function(error, response, body) {
        // expect(response.statusCode).to.equal(404);
        expect(error);
        done();
    });
});