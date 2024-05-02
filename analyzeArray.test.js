const analyzeArray = require('./analyzeArray');

test('Verify results of the array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toBe(
        object == {
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
});

const object = analyzeArray([1,8,3,4,2,6]);

object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};
