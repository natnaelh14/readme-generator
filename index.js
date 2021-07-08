//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require("axios");
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is your Project Title?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please provide description of your project.'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please provide a step-by-step Installation instruction'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide a demonstration of your product in use'
    },

    {
        type: 'input',
        name: 'Contribution',
        message: 'Do you want any contribution to your project/ if so, please provide instructions'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Please provide tests for your application'
    },
    {
        type:"input",
        name:"Questions",
        message:'What do I do if I have an issue?'
    },
    {
        type: 'list',
        name: 'License',
        message: 'What license do you want?',
        choices: ['MIT', 'Apache', 'GNU AGPLv3', 'GNU GPLv3']
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Please provide GitHub username',
        result: async function(input) {
            let githubUrl = `https://api.github.com/users/${input}`
            try{
                await axios.get(githubUrl)
                return true
            }catch{
                return 'GitHub username is not found'
            }
        }
    },
    {
        type:'input',
        name: 'Email',
        message: 'Please provide GitHub e-mail address'
    }
];

//Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
          return console.log(error);
        }
        console.log("Success! Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(answer => {
    console.log(answer)
      const completedAnswers = generateMarkdown(answer);
      writeToFile('read.md', completedAnswers);
    })
    .catch(error => {
      console.log(error)
    });
}

// Function call to initialize app
init();
