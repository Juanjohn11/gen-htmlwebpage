const Engineer = require ('../lib/engineer')

test('gets engineer github value', () => {
    const engineer = new Engineer('john', 10, 'elmatanoco1144@gmail.com', 'juanjohn11');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});