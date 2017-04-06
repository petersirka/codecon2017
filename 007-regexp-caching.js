/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('No-cached', function() {
	/Node/.test(str);
}, function() {
	var str = 'Total.js je najlepsi Node.js framework.';
});

Meter.measure('Cached', function() {
	reg.test(str);
}, function() {
	var reg = /Node/;
	var str = 'Total.js je najlepsi Node.js framework.';
});