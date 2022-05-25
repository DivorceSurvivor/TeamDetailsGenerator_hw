const Intern = require("../lib/Intern");

describe("Exmployee test", () => {
  test("Creating new employee object", () => {
    let newEmployee = new Intern(
      "TestName",
      "2324",
      "example@email.com",
      "TestSchool"
    );
    expect(newEmployee.getName()).toStrictEqual("TestName");
    expect(newEmployee.getId()).toStrictEqual("2324");
    expect(newEmployee.getEmail()).toStrictEqual("example@email.com");
    expect(newEmployee.getRole()).toStrictEqual("Intern");
    expect(newEmployee.getSchool()).toStrictEqual("TestSchool");
  });
});
