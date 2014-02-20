*This repository is a mirror of the [component](http://component.io) module [kenany/levenshtein](http://github.com/kenany/levenshtein). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/kenany-levenshtein`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# levenshtein

Levenshtein string difference as a [component](https://github.com/component).

Source from [gf3/Levenshtein](https://github.com/gf3/Levenshtein).

## Installation

``` shell
$ component install KenanY/levenshtein
```

## API

### Levenshtein(m, n)

Initialise a new Levenshtein object.

* `m` _(String)_: first string
* `n` _(String)_: second string

``` javascript
var l = new Levenshtein('kitten', 'sitting');
```

### .distance()

Distance between strings.

``` javascript
l.distance
// => 3
```

### .inspect()

Pretty print Levenshtein table.

``` javascript
l.inspect();
// =>  0 | 1 | 2 | 3 | 4 | 5 | 6
// => ---+---+---+---+---+---+---
// =>  1 | 1 | 2 | 3 | 4 | 5 | 6
// => ---+---+---+---+---+---+---
// =>  2 | 2 | 1 | 2 | 3 | 4 | 5
// => ---+---+---+---+---+---+---
// =>  3 | 3 | 2 | 1 | 2 | 3 | 4
// => ---+---+---+---+---+---+---
// =>  4 | 4 | 3 | 2 | 1 | 2 | 3
// => ---+---+---+---+---+---+---
// =>  5 | 5 | 4 | 3 | 2 | 2 | 3
// => ---+---+---+---+---+---+---
// =>  6 | 6 | 5 | 4 | 3 | 3 | 2
// => ---+---+---+---+---+---+---
// =>  7 | 7 | 6 | 5 | 4 | 4 | 3
```

### .toString()

Alias of `Levenshtein.inspect()`.

## Development

``` shell
$ make
```

## License

UNLICENSE