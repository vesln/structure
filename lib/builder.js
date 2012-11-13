
/*!
 * External dependencies.
 */

var inherits = require('super');

/*!
 * Internal dependencies.
 */

var Attribute = require('./attribute')
  , Struct = require('./struct');

/**
 * Struct Builder.
 *
 * @param {String} name
 * @param {String} arg1, arg2..
 * @constructor
 */

function Builder(name, attrs) {
  var self = this;
  this.attrs = [];
  this.name = name;
  attrs.forEach(function(name) { self.attr(name); });
};

/**
 * Set an attribute with `name` and default value `def`.
 *
 * @param {String} name
 * @param {Mixed} default value
 * @returns {Object} `this`
 * @api public
 */

Builder.prototype.attr = function(name, def) {
  this.attrs.push(new Attribute(name, def));
  return this;
};

/**
 * Return an accessor with `name`.
 *
 * @returns {Function}
 * @api private
 */

Builder.prototype.accessor = function(name) {
  return function(val) {
    if (arguments.length === 0) return this.attrs[name];
    this.attrs[name] = val;
    return this;
  };
};

/**
 * Compile the new struct.
 *
 * @returns {Function} struct
 * @api public
 */

Builder.prototype.compile = function() {
  var keys = this.attrs
    , name = this.name
    , klass = null;

  klass = function() {
    this._name = name;
    this.keys = keys;
    Struct.apply(this, arguments);
  };

  inherits(klass, Struct);

  this.attrs.forEach(function(attr) {
    klass.prototype[attr.name] = this.accessor(attr.name);
  }, this);

  return klass;
};

/*!
 * Expose `Builder`.
 */

module.exports = Builder;
