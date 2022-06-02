const Manager = require('../lib/Manager');

test('Can instantiate Manager instance', () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe('object');
});

test('Can set officenumber via constructor', () => {
    const manager = new Manager('name', 'id', 'email', '203');

    expect(manager.officeNumber).toBe('203');
});

test('getRole() should get "Manager"', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
});