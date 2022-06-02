const Engineer = require('../lib/Engineer');

test('Can instantiate Engineer instance', () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe('object');
});

test('Can set github via constructor', () => {
    const engineer = new Engineer('name', 'id', 'email', 'githubname');

    expect(engineer.github).toBe('githubname');
});

test('Can get github via getGitHub', () => {
    const engineer = new Engineer('name', 'id', 'email', 'githubname');
    
    expect(engineer.getGitHub()).toBe('githubname');
});

test('getRole() should get "Engineer"', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
});