// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require("axios");
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
          return console.log(error);
        }
        console.log("Success! Your README.md file has been generated")
    });
}
const writeFileAsync = util.promisify(writeToFile);



// inquirer.prompt(questions)
//     .then((inquirerResponse, data) => {   
//         fs.writeFileSync("ReadMe.md", inquirerResponse, data);
//     })
// let inputType = '';
// switch (inputType) {
//     case 'Title':
//         let title = '';
//         title = `## ${answers.Title}`
//         break;
//     case 'Description':
//         let description = '';
//         description = `## Description\n${answers.Description}`
//         break;
//     case 'Installation':
//         let installation = '';
//         installation = `## Installation\n${answers.Installation}`;
//         break;
//     case 'Usage':
//         let usage = '';
//         usage = `## Usage\n${answers.Usage}`;
//         break;
//     case 'Contribution':
//         let contribution = '';
//         contribution = `## Contributing\n${answers.Contributing}`;
//         break;
//     case 'Tests':
//         let tests = '';
//         tests = `## Tests\n${answers.Tests}`
//         break;
//     case 'Questions':
//         let questions = '';
//         questions = `## Questions\n${answers.Questions}`
//         break;
//     case 'License':
//         let license = '';
//         license = `## License\n${answers.License}`
//         break;
//     case 'GitHub':
//         let github = '';
//         github = `##GitHub Username\n${answers.GitHub}`;
//         break;
//     case 'Email':
//         let email = '';
//         email = `##Email\n${answers.Email}`;
//         break;
    
// }




// TODO: Create a function to initialize app
function init() {}

async function init() {
    try {
        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
        // Call GitHub api for user info
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
        // Write markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);
    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
