'use strict';

//
// Required native modules.
//
var fs = require('fs')
  , path = require('path')
  , EventEmitter = require('events').EventEmitter;

//
// Required third-party modules.
//
var esprima = require('esprima')
  , arg = require('argh').argv
  , Logger = require('devnull');

//
// Configuration variables for Cheetah.
//
var entry = arg.argv[0]
  , logger = new Logger({
        timestamp: false
      , namespacing: 0
      , notification: 0
    })
  , config = {
        output: '/tmp/'
      , ext: 'json'
    };

/**
 * Constructor for Cheetah.
 *
 * @constructor
 * @api public
 */
function Cheetah () {
  var self = this;

  // Open the provided file and parse the content.
  fs.readFile(path.resolve(entry), { encoding: 'utf-8' }, function parse(err, content) {
    if (err) logger.error('Provided file could not be parsed.');

    self.ast = esprima.parse(content, { loc: true });
    self.emit('initialized');
  });

  // Loop functions, store in reference object
  // Add event emitter to function that emits arguments
  // Recompile and run
  // On call catch event, run x times with arguments
  // Store benchmark results

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
}

//
// Expose events.
//
Cheetah.prototype.__proto__ = EventEmitter.prototype;

//
// Export the module.
//
module.exports = new Cheetah();
