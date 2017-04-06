/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('No-Cached', function() {
	fn({ success: true });
}, function() {
	function fn(obj){obj.success;}
});

Meter.measure('Cached', function() {
	fn(success);
}, function() {
	var success = { success: true };
	function fn(obj){obj.success;}
});