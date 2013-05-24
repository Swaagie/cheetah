'use strict';

/**
 * Required modules.
 */

var fs = require('fs')
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
      , ext: 'json'
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

function Cheetah () {
  // Add cycles to the data.
  var data = {};

  /**
   * Add cycles to the data.
   *
   * @param {Object} test each completed test
   * @api private
   */
  /*suite.on('cycle', function cycle (test) {
    console.log(test);
  });*/

  /**
   * After completion store operations/second to JSON
   * in addition start HTML and SVG generation.
   *
   * @api private
   */

  /*suite.on('complete', function complete () {
  });*/
};

module.exports = new Cheetah();
