import { superImportantService } from './super-important-service';

test('hello should be world', () => {
    const { hello } = superImportantService();
    expect(hello).toBe("world");
});

test('This should fail', () => {
    expect(superImportantService()).toBe("world!");
});
