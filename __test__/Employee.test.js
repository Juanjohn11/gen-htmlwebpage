const Employee = require ('../lib/employee')

test('gets employee name', () => {
    const employee = new Employee('john','elmatanoco1144@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});