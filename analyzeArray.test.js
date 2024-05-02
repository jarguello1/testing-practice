const analyzeArray = require('./analyzeArray');

test('Verify results of the array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(
        {"average": 4, "length": 6, "max": 8, "min": 1})
});
