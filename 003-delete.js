/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('delete', function() {
	var obj = { success: true };
	delete obj.success;
	JSON.stringify(obj);
});

Meter.measure('undefined', function() {
	var obj = { success: true };
	obj.success = undefined;
	JSON.stringify(obj);
});

Meter.mode('low');