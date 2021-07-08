//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown.js");

//Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    validate: async function (input) {
      let githubUrl = `https://api.github.com/users/${input}`;
      try {
        await axios.get(githubUrl);
        return true;
      } catch {
        return "GitHub username is not found";
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your e-mail address?"
  },
  {
    type: "input",
    name: "name",
    message: "What is your project's name?"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project."
  },
    {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "Apache", "GNU AGPLv3", "GNU GPLv3"],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?"
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide a demonstration of your product in use.",
  },

  {
    type: "input",
    name: "contribution",
    message:
      "Do you want any contribution to your project/ if so, please provide instructions",
  },

  {
    type: "input",
    name: "questions",
    message: "What do I do if users have questions?",
  }
];

//Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err
      ? console.log("Something went wrong. Please try again.")
      : console.log("Success! Your README.md file has been generated");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answer) => {
      console.log("answer", answer);
      writeToFile("read.md", generateMarkdown(answer));
    })
    .catch((err) =>
      err.isTtyError
        ? console.log("Prompt couldn't be rendered")
        : console.log("Something went wrong. Please try again.")
    );
}

// Function call to initialize app
init();
