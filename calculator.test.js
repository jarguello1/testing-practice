const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds 3 - 2 to equal 1', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
  });