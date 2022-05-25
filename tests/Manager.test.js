const Manager = require("../lib/Manager");

describe("Exmployee test", () => {
  test("Creating new employee object", () => {
    let newEmployee = new Manager(
      "TestName",
      "2324",
      "example@email.com",
      "129898"
    );
    expect(newEmployee.getName()).toStrictEqual("TestName");
    expect(newEmployee.getId()).toStrictEqual("2324");
    expect(newEmployee.getEmail()).toStrictEqual("example@email.com");
    expect(newEmployee.getRole()).toStrictEqual("Manager");
    expect(newEmployee.getOfficeNumber()).toStrictEqual("129898");
  });
});
