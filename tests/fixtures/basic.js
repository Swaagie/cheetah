'use strict';

var Benchmark = require('benchmark')
  , suite = new Benchmark.Suite
  , Cheetah = require('../../app.js');

suite.add('RegExp#test', function() {
  /o/.test('Hello World!');
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ 'async': true });

// Make cheetah listen to all that Benchmark is doing.
new Cheetah(suite);
