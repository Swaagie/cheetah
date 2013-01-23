'use strict';

var Benchmark = require('benchmark')
  , suite = new Benchmark.Suite
  , Cheetah = require('../../app.js');

suite.add('RegExp#test', function() {
  /o/.test('Hello World!');
}).add('RegExp#match', function() {
  'Hello World!'.match(/o/);
})
.run({ 'async': true });

// Make cheetah listen to all that Benchmark is doing.
new Cheetah(suite);
