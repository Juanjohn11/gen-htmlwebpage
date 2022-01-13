const Manager = require ('../lib/Manager')

test('gets role of employee', () => {
    const manager = new Manager('john', 10, 'elmatanoco1144@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 