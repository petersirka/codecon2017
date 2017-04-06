/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('String.indexOf', function() {
	str.indexOf('Node');
}, function() {
	var str = 'Total.js je najlepsi Node.js framework.';
});

Meter.measure('String.lastIndexOf', function() {
	str.lastIndexOf('Node');
}, function() {
	var str = 'Total.js je najlepsi Node.js framework.';
});

Meter.measure('RegExp.test', function() {
	reg.test(str);
}, function() {
	var reg = /Node/;
	var str = 'Total.js je najlepsi Node.js framework.';
});

Meter.measure('RegExp.match', function() {
	str.match(reg);
}, function() {
	var reg = /Node/;
	var str = 'Total.js je najlepsi Node.js framework.';
});

Meter.mode('low');