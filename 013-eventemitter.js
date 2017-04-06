/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('EventEmitter', function() {
	obj.emit('a');
	obj.emit('b');
	obj.emit('c');
}, function() {
	const EventEmitter = require('events');
	var obj = new EventEmitter();
});

Meter.measure('Custom', function() {
	obj.emit('a');
	obj.emit('b');
	obj.emit('c');
}, function() {

	var obj = {};
	obj.events = null;

	obj.emit = function(name) {
		obj.events && obj.events[name] && obj.events.call(obj, arguments[0], arguments[1], arguments[2], arguments[3]);
		return obj;
	};
});
