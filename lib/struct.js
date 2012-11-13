
/**
 * Struct base class.
 *
 * @constructor
 */

function Struct() {
  var args = Array.prototype.slice.call(arguments);
  this.attrs = {};

  this.keys.forEach(function(key, i) {
    var value = undefined === args[i]
      ? key.value
      : args[i];

    var name = key.name;

    this[name](value);
  }, this);
};

/**
 * Each `key`, `val`.
 *
 * @param {Function} callback
 * @api public
 */

Struct.prototype.each = function(fn) {
  this.keys.forEach(function(attr) {
    fn(attr.name, this[attr.name]());
  }, this);
};

/**
 * More informative to string method.
 *
 *
 *   var Arm = struct('Arm', 'fingers', 'nails')
 *     , arm = new Arm(5, true);
 *
 *   arm.toString() // '[object Arm <fingers="5", nails="true">]'
 *
 * @returns {String}
 * @api public
 */

Struct.prototype.toString = function() {
  var attrs = this.keys.map(function(attr) {
    return attr.name + '="' + this[attr.name]() + '"';
  }, this).join(', ');

  return [
    '[object', this._name, '<' + attrs + '>]',
  ].join(' ');
};

/**
 * Return the struct values as an array.
 *
 * @returns {Array}
 * @api public
 */

Struct.prototype.toArray = function() {
  return this.keys.map(function(attr) {
    return this[attr.name]();
  }, this);
};

/**
 * Return a copy of the structs's attributes for JSON
 * stringification.
 *
 * @returns {Object}
 * @api public
 */

Struct.prototype.toJSON = function() {
  var json = {};

  this.each(function(key, val) {
    json[key] = val;
  });

  return json;
};

/**
 * Expose `Struct`.
 */

module.exports = Struct;
