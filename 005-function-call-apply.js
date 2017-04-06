/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('apply', function() {
	fn.apply(this);
}, function() {
	function fn() {}
});

Meter.measure('call', function() {
	fn.call(this);
}, function() {
	function fn() {}
});

Meter.measure('directly', function() {
	fn();
}, function() {
	function fn() {}
});
