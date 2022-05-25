const Engineer = require("../lib/Engineer");

describe("Exmployee test", () => {
  test("Creating new employee object", () => {
    let newEmployee = new Engineer(
      "TestName",
      "2324",
      "example@email.com",
      "TestGithub"
    );
    expect(newEmployee.getName()).toStrictEqual("TestName");
    expect(newEmployee.getId()).toStrictEqual("2324");
    expect(newEmployee.getEmail()).toStrictEqual("example@email.com");
    expect(newEmployee.getRole()).toStrictEqual("Engineer");
    expect(newEmployee.getGithub()).toStrictEqual("TestGithub");
  });
});
