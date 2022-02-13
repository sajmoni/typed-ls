import test from 'ava'

import { sayHello } from 'typed-ls'

test('sayHello', (t) => {
  t.is(sayHello(), 'Hello world!')
})
