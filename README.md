# star-wars
Use the `--force`, Luke.

This is a tiny module that wants to check whether you're using `--force` or `force` when calling your CLI tool.

## Usage

```javascript
var starwars = require('star-wars');

starwars(process.argv);
```

When you run your CLI tool without adding either `--force` or `force`, the return value of `star-wars` will be false.

Use it for checks in your application where you need to be sure that the user intends to do the action they just tried.

```javascript
var starwars = require('star-wars');

if (starwars(process.argv)) {
  // do the intended action
} else {
  console.log('Are you sure you want to do this? Add \'force\' or \'--force\' as an argument to continue');
};
```

## tl;dr

Pass this module `process.argv` and it'll return true if your CLI tool has been called with `--force` or `force`