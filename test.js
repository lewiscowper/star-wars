var starwars = require('./index.js');
var test = require('tape');

test ('star-wars argument list tests', function (t) {
  t.notOk(starwars(['--testing', '--testing123']), 'try [\'--testing\', \'--testing123\']; return false');
  t.ok(starwars(['--testing', '--force']), 'try [\'--testing\', \'--force\']; return true');

  t.notOk(starwars('testing'), 'try \'testing\'; return false');
  t.ok(starwars(['force']), 'try \'force\'; return true');

  t.ok(starwars(['force']), 'try [\'force\']; return true');
  t.ok(starwars(['--force']), 'try [\'--force\']; return true');

  t.end();
});