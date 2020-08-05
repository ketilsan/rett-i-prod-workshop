import indexFn from './index';

test('hello should be world', () => {
    expect(indexFn.hello).toBe("world");
});
test('This should fail', () => {
    expect(indexFn.worldDomination).toBe("world");
});