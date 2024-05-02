const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 3 - 2 to equal 1', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('multiply 10 * 15 to equal 150', () => {
  expect(calculator.multiply(10, 15)).toBe(150)
})

test('divide 400 / 20 to equal 20', () => {
  expect(calculator.divide(400, 20)).toBe(20)
})