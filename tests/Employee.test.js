const Employee = require("../lib/Employee");

describe("Exmployee test", () => {
  test("Creating new employee object", () => {
    let newEmployee = new Employee("TestName", "2324", "example@email.com");
    expect(newEmployee.getName()).toStrictEqual("TestName");
    expect(newEmployee.getId()).toStrictEqual("2324");
    expect(newEmployee.getEmail()).toStrictEqual("example@email.com");
    expect(newEmployee.getRole()).toStrictEqual("Employee");
  });
});
