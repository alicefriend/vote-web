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

	it('Test whether http client works', function(done) {
		request('http://www.google.com', function (error, response, body) {
			if (!error) {
				console.log(body);
				done();
			}
		});
	});

});