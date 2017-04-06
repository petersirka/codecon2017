/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('new Date().getTime()', function() {
	new Date().getTime();
});

Meter.measure('Date.now()', function() {
	Date.now();
});