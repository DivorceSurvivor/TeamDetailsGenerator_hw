const inquirer = require("inquirer");

const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

async function getData() {
  let allData = [];

  const basicQuestions = [
    {
      type: "input",
      name: "name",
      message: "Name:"
    },
    {
      type: "input",
      name: "eid",
      message: "Employee ID:"
    },
    {
      type: "input",
      name: "email",
      message: "Email address:"
    }
  ];
  //   Get manager's information
  console.log("Please enter the team manager’s details:");
  const answers = await inquirer.prompt([
    ...basicQuestions,
    {
      type: "input",
      name: "number",
      message: "Office number:"
    }
  ]);

  allData.push(
    new Manager(answers.name, answers.eid, answers.email, answers.number)
  );

  let empAns;
  do {
    empAns = await inquirer.prompt([
      {
        type: "list",
        message: "Select employee type to add:",
        name: "type",
        choices: ["Engineer", "Intern", "Finish"]
      }
    ]);
    if (empAns.type === "Engineer") {
      console.log("Please enter the engineer’s details:");
      const answers = await inquirer.prompt([
        ...basicQuestions,
        {
          type: "input",
          name: "username",
          message: "Github username:"
        }
      ]);
      allData.push(
        new Engineer(answers.name, answers.eid, answers.email, answers.username)
      );
    } else if (empAns.type === "Intern") {
      console.log("Please enter the intern’s details:");
      const answers = await inquirer.prompt([
        ...basicQuestions,
        {
          type: "input",
          name: "school",
          message: "School:"
        }
      ]);
      allData.push(
        new Intern(answers.name, answers.eid, answers.email, answers.school)
      );
    }
  } while (empAns.type !== "Finish");
  return allData;
}

module.exports = getData;
