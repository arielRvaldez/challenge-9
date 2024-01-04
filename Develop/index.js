// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateREADME = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
{
    type: 'input',
    message: 'what is the title of your project?',
    name: 'title',
    // default: 'Project Title Goes Here',
},
{
    type: 'input',
    message: 'Write a brief description of your project: ',
    name: 'description',
},
{
    type: 'input',
    message: 'Describe the installation process if any: ',
    name: 'installation',
},
{
    type: 'input',
    message: 'What is the project used for?',
    name: 'usage',
},
{
    type: 'rawlist',
    message: 'What License do you want to use?',
    name: 'license',
    choices: [
        'Apache', 'Academic', 'MIT', 'Mozilla', 'Pearl'
    ],
},
{
    type: 'input',
    message: 'List contributors if any: ',
    name: 'contribution',
},
{
    type: 'input',
    message: 'How can I test this project?',
    name: 'test',
},
{
    type: 'input',
    name: 'questions',
    message: 'What do I do if I have an issue?',
},
{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'GitHub',
},
{
    type: 'input',
    message: 'What is your email? ',
    name: 'email',
},
])
.then((answers) => {
    var generate = generateREADME(answers);

// TODO: Create a function to write README file
var fileName = 'YourREADME.md';
fs.writeFile(fileName, generate, (err) => 
    err ? console.log(err) : console.log('Successfully created professional README.md!')
);
});

// TODO: Create a function to initialize app
// function init() {
//     inquirer
//      .prompt(questions)
//      .then(answers => {
//         var fileName = 'YourREADME.md';
//         writeToFile(fileName, answers);
//      })
// }

// // Function call to initialize app
// init();
