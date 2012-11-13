[![Build Status](https://secure.travis-ci.org/vesln/structure.png)](http://travis-ci.org/vesln/structure)

# structure

Struct generator.

## Synopsis

```js
var struct = require('structure');
```

### Creating a new struct

```js
var Time = struct('Time')
  .attr('hours')
  .attr('minutes')
  .attr('seconds')
  .compile();

var time = new Time(6, 30, 0);

// Getters

time.hours() // 6
time.minutes() // 30
time.seconds() // 0

// Setters

time.hours(3)
time.minutes(0)
time.seconds(0)

// Also..

time.hours(3).minutes(0).seconds(0)
```

### Default values

```js
var Time = struct('Time')
  .attr('hours')
  .attr('minutes', 0)
  .attr('seconds', 0)
  .compile();

var time = new Time(6);

time.hours() // 6
time.minutes() // 0
time.seconds() // 0
```

### Short syntax

```js
var Time = struct('Time', 'hours', 'minutes', 'seconds')
var time = new Time(6, 30, 0);
```

### each

```js
time.each(function(key, value) {
  console.log(key, value);
});
```

### toArray

```js
time.toArray() // => [6, 30, 0]
```

### toJSON

```js
time.toJSON() // => { hours: 6, minutes: 30, seconds: 0 }
```

### toString

```js
time.toString() // => [object Time <hours="6", minutes="30", seconds="0">]
```

## Installation

```bash
$ npm install structure
```

## Requirements

- Node.js >= 0.6.0

## Tests

```
$ npm install
$ make test
```

## TODO

- Browser support
- #equals

## License

(The MIT License)

Copyright (c) 2012 Veselin Todorov <hi@vesln.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
