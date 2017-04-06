/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('No-cached', function() {
	async(function() {
		// Something
	});
}, function() {
	function async(callback) {
		callback();
	}
});

Meter.measure('Cached', function() {
	async(fn);
}, function() {
	function async(callback) {
		callback();
	}
	function fn(){
		// Something
	}
});