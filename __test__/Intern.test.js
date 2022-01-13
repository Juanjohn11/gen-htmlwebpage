const Intern = require ('../lib/Intern')

test('gets employee school', () => {
    const intern = new Intern('john', 10, 'elmatanoco1144@gmail', 'UCD');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});