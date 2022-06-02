const Intern = require('../lib/Intern');

test('Can instantiate Intern instance', () => {
    const intern = new Intern();

    expect(typeof(intern)).toBe('object');
});

test('Can set school via constructor', () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.school).toBe('school');
});

test('Can get school via getSchool()', () => {
    const intern = new Intern('name', 'id', 'email', 'school');
    
    expect(intern.getSchool()).toBe('school');
});

test('getRole() should get "Intern"', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
});