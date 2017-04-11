/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('assign: directly', function() {
	fn();
}, function() {
	var obj = {};
	function fn(val) {
		obj.value = val;
	}
});

Meter.measure('assign: check & assign', function() {
	fn();
}, function() {
	var obj = {};
	function fn(val) {
		if (val !== undefined)
			obj.value = val;
	}
});