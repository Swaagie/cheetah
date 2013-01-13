'use strict';

/**
 * Required modules.
 */

var fs = require('fs')
  , useragent = require('useragent')
  , Logger = require('devnull')
  , logger = new Logger({
      timestamp: false
    , namespacing: 0
    , notification: 0
  });

/**
 * Configuration variables for Cheetah.
 */

var config = {
        output: '/tmp/'
    }
  , messages = {
        nosuite: 'No Benchmark suite provided, Cheetah will not process results!'
    };

/**
 * Constructor for Cheetah, benchmark
 *
 * @constructor
 * @api public
 */

module.exports = function Cheetah (suite) {
  if (!suite) return logger.critical(messages.nosuite);

  // After completion store operations/second to JSON.
  var data = {};
  suite.on('complete', function complete (test) {
    console.log(test);
  });
};
