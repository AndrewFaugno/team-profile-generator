const Employee = require('../lib/Employee');

test('Can instantiate Employee instance', () => {
    const employee = new Employee()

    expect(typeof(employee)).toBe('object');
});

test('Can set name via constructor', () => {
    const employee = new Employee('Andrew');

    expect(employee.name).toBe('Andrew');
});

test('Can set id via constructor', () => {
    const employee = new Employee('Andrew', '25');

    expect(employee.id).toBe('25');
});

test('Can set email via constructor', () => {
    const employee = new Employee('Andrew', '25', 'email');

    expect(employee.email).toBe('email');
});

test('Can get name via getName()', () => {
    const employee = new Employee('Andrew');

    expect(employee.getName()).toBe('Andrew')
});

test('Can get id via getId()', () => {
    const employee = new Employee('Andrew', '25');

    expect(employee.getId()).toBe('25')
});

test('Can get email via getEmail()', () => {
    const employee = new Employee('Andrew', '25', 'email');

    expect(employee.getEmail()).toBe('email')
});

test('getRole() should return "employee"', () => {
    const employee = new Employee();

    expect(employee.getRole()).toBe('Employee');
});