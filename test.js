var request = require('request');
var assert = require('assert');
var app = require('./app');

describe('server', function() {
	var server;

	beforeEach(function() {
		server = app.listen(8080);
	});

	afterEach(function(){
		server.close();
	});

	it('Server should response 200', function(done) {
		request('http://127.0.0.1/', function (error, response, body) {
			if (!error) {
				done();
			}
			assert.throws(function(){
				throw 'Http Error!';
			});
		});
	});
});

describe('route-signup', function() {
	var server;

	beforeEach(function() {
		server = app.listen(8080);
	});

	afterEach(function(){
		server.close();
	});

	it('simply just getback body', function(done) {
		var signupInfo = { name : "test", email : "test@test", pw : "test" };

		request({
			url: 'http://127.0.0.1/signup', 
			method: 'POST', 
			json: signupInfo
		}, function(error, response, body) {
			if(!error && response.statusCode == 200 ) {
				done();
			}
			assert(false, 'HTTP error');
		});
	});

	

});

