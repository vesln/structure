
/*!
 * Internal dependencies.
 */

var Builder = require('./builder');

/**
 * Create a new struct.
 *
 * If only `name` is supplied it will return a
 * builder object, otherwise it will return the
 * new `struct`.
 *
 * @param {String} name
 * @param {String} arg1, arg2..
 * @returns {Builder|Struct}
 * @api public
 */

function create(name) {
  var args = Array.prototype.slice.call(arguments)
    , builder = null;

  args.shift();

  builder = new Builder(name, args);

  return args.length === 0
    ? builder
    : builder.compile();
};

/**
 * Expose `Create`.
 */

module.exports = create;
