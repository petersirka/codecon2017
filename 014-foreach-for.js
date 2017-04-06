/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('forEach', function() {
	arr.forEach(function(item) {
	});
}, function() {
	var arr = [];
	for (var i = 0; i < 100; i++)
		arr.push(i);
});

Meter.measure('forEach cached', function() {
	arr.forEach(onItem);
}, function() {
	var arr = [];
	for (var i = 0; i < 100; i++)
		arr.push(i);
	function onItem(item) {}
});

Meter.measure('for', function() {
	for (var i = 0; i < arr.length; i++) {
		var item = arr[i];
	}
}, function() {
	var arr = [];
	for (var i = 0; i < 100; i++)
		arr.push(i);
});

Meter.measure('for cached', function() {
	for (var i = 0, length = arr.length; i < length; i++) {
		var item = arr[i];
	}
}, function() {
	var arr = [];
	for (var i = 0; i < 100; i++)
		arr.push(i);
});

Meter.mode('low');