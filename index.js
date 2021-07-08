//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown.js");

//Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your Project Title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide a step-by-step Installation instruction",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide a demonstration of your product in use",
  },

  {
    type: "input",
    name: "contribution",
    message:
      "Do you want any contribution to your project/ if so, please provide instructions",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide tests for your application",
  },
  {
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue?",
  },
  {
    type: "list",
    name: "license",
    message: "What license do you want?",
    choices: ["MIT", "Apache", "GNU AGPLv3", "GNU GPLv3"],
  },
  {
    type: "input",
    name: "github",
    message: "Please provide GitHub username",
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
    message: "Please provide GitHub e-mail address",
  },
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
