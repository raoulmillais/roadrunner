/* global $ */
/* global server */
/* global config */
/* global upload */
var assert = require('assert');
var RemoteTarget = require('../lib/remotetarget');

describe('RemoteTarget', function () {

	describe('ctor', function () {

		it('should perform initialisation', function () {
			var target = new RemoteTarget();

			assert.ok(target.opts);
			assert.ok(target.rc);
		});

	});

	describe('prepare and destroy', function () {

		it('should add upload to the global', function () {
			function fakeDispatcher(command, callback) {
				callback();
			}
			var fakeConfig = { foo: 'bar', file: 'baz.zip' };
			var target = new RemoteTarget({ server: 'foo.acme.com', config: fakeConfig });
			target.dispatcher =  fakeDispatcher;
			target.prepare();
			upload(config.baz);
			assert.equal(target.chains.length, 1);
			target.destroy();
		});

	});

	describe('server', function () {

		it('should return the conenction host', function () {
			var target = new RemoteTarget({
					host: 'abc.xyz.com',
					user: 'test',
					key: '/home/user/foo/.ssh/id_pub.rsa'
				});

			assert.equal(target.server(), 'abc.xyz.com');
		});

	});

	describe('local', function () {

		it('should return false', function () {
			var target = new RemoteTarget({});
			assert.ok(!target.local());
		});

	});

});
