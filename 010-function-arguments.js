/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('Without reference', function() {
	fn(obj.name, obj.age);
}, function() {
	var obj = {};
	obj.name = 'Peter';
	obj.age = 33;
	function fn(name,age){};
});

Meter.measure('Reference', function() {
	fn(obj);
}, function() {
	var obj = {};
	obj.name = 'Peter';
	obj.age = 33;
	function fn(obj){};
});