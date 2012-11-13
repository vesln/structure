
/*!
 * Internal dependencies.
 */

var struct = require('..');

describe('structure', function() {
  it('can create new structs', function() {
    var Time = struct('Time', 'hours', 'minutes', 'seconds')
      , time = new Time(6, 30, 0);

    time.hours().should.eq(6);
    time.minutes().should.eq(30);
    time.seconds().should.eq(0);

    time.hours(3).minutes(4).seconds(5);

    time.hours().should.eq(3);
    time.minutes().should.eq(4);
    time.seconds().should.eq(5);
  });

  it('can create a new structure with more readable format', function() {
    var Time = null
      , time = null

    Time = struct('Time')
      .attr('hours')
      .attr('minutes')
      .attr('seconds')
      .compile();

    time = new Time(6, 30, 0);
    time.hours().should.eq(6);
    time.minutes().should.eq(30);
    time.seconds().should.eq(0);
  });

  it('supports default values', function() {
    var Time = null
      , time = null

    Time = struct('Time')
      .attr('hours')
      .attr('minutes', 30)
      .attr('seconds')
      .compile();

    time = new Time(6);
    time.hours().should.eq(6);
    time.minutes().should.eq(30);
  });

  describe('Struct', function() {
    var Arm = struct('Arm', 'fingers', 'nails')

    it('has informative toString method', function() {
      var arm = new Arm(5, true);
      arm.toString().should.eq('[object Arm <fingers="5", nails="true">]');
    });

    it('can convert the object to array', function() {
      var arm = new Arm(5, true);
      arm.toArray().should.eql([5, true]);
    });

    it('has each method', function() {
      var res = []
        , arm = new Arm(5, true);

      arm.each(function(key, value) {
        res.push(key, value);
      });

      res.should.eql(['fingers', 5, 'nails', true]);
    });

    it('return JSON friendly representation of the struct', function() {
      var arm = new Arm(5, true);
      arm.toJSON().should.eql({ fingers: 5, nails: true });
    });
  });
});
