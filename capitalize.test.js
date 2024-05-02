const capitalize = require('./capitalize');

test('All lowercase' , () => {
    expect(capitalize('capital')).toBe('Capital');
});

