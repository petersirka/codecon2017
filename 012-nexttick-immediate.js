/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('setImmediate', function() {
	setImmediate(NEXT);
}, true);

Meter.measure('nextTick', function() {
	process.nextTick(NEXT);
}, true);

Meter.mode('low');