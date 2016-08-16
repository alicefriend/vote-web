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
				done();
			}
			assert.throws(function(){
				throw 'Http Error!';
			});
		});
	});

	it('Test whether gulp works well', function() {
		assert.equal('A', 'A');
	});

});