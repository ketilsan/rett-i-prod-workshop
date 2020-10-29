import { superImportantService } from './super-important-service';

test('hello should be world', () => {
    const { hello } = superImportantService();
    expect(hello).toBe("world");
});
