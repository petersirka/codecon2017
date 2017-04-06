/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('No-cached', function() {
	fn(new Date());
}, function() {
	function fn(dt) {dt;}
});

Meter.measure('Cached', function() {
	fn(current);
}, function() {
	var current = new Date();
	function fn(dt) {dt;}
});

Meter.measure('Half cached', function() {
	if (INDEX % 5 === 0)
		current = new Date();
	fn(current);
}, function() {
	var current = new Date();
	function fn(dt) {dt;}
});