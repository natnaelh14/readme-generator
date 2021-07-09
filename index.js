//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown.js");

//An array of questions for user input
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
    message: "What is your e-mail address?",
    validate: function (answer) {
      if (answer === "") {
        return console.log("Please enter an email-address.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "name",
    message: "What is your project's name?",
    validate: function (answer) {
      if (answer === "") {
        return console.log("Please enter a project name.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project.",
    validate: function (answer) {
      if (answer === "") {
        return console.log("Please enter a project description.");
      }
      return true;
    },
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "Apache", "GNU AGPLv3", "GNU GPLv3"],
  },
  {
    type: "input",
    name: "owner",
    message:
      "Please list the owner/owners of this application.",
    validate: function (answer) {
      if (answer === "") {
        return console.log("PPlease list the owner/owners of this application.");
      }
      return true;
    }
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    validate: function (answer) {
      if (answer === "") {
        return console.log("Please enter installation instructions.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    validate: function (answer) {
      if (answer === "") {
        return console.log("Please enter a command for run tests.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide a demonstration of your product in use (jpg, jpeg, mp4, png, gif)",
    validate: function (answer) {
      var allowedExtensions = /(\.jpg|\.jpeg|\.mp4|\.png|\.gif)$/i;
      if (!allowedExtensions.exec(answer)) {
        return console.log(" is not a valid file type");
      }
      return true;
    }
  },
  {
    type: "input",
    name: "contribution",
    message:
      "Do you want any contribution to your project/ if so, please provide instructions",
    validate: function (answer) {
      if (answer === "") {
        return console.log("Please provide contribution instructions.");
      }
      return true;
    }
  },
  {
    type: "input",
    name: "questions",
    message: "What do I do if users have questions?",
    validate: function (answer) {
      if (answer === "") {
        return console.log("Please provide instructions for user questions.");
      }
      return true;
    },
  },
];

//Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err
      ? console.log("Something went wrong. Please try again.")
      : console.log("Success! Your README.md file has been generated");
  });
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answer) => {
      console.log("answer", answer);
      writeToFile("README.md", generateMarkdown(answer));
    })
    .catch((err) =>
      err.isTtyError
        ? console.log("Prompt couldn't be rendered")
        : console.log("Something went wrong. Please try again.")
    );
}

// Function call to initialize app
init();
