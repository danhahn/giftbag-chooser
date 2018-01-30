const getRandomNumber = require('./getRandomNumber');

test('We get back a number', () => {
  expect(getRandomNumber(1, ['a', 'b']).toBe(3));
})