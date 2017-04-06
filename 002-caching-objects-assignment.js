/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('No-Cached', function() {
	fn({ success: INDEX % 2 === 0 });
}, function() {
	function fn(obj){obj.success;}
});

Meter.measure('Cached with assignment', function() {
	success.success = INDEX % 2 === 0;
	fn(success);
}, function() {
	var success = { success: true };
	function fn(obj){obj.success;}
});