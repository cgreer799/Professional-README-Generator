// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide a title for your project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project. You may include your motivation, why you built this project, what problem does it solve, and what you learned building the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide a step-by-step description of how to install your project.',
    },
    {
        
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples on how to use your project.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please provide credit to any collaborators, third-party assets, tutorials, and any other outside resources.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license for this project?',
        choices: [
            'None',
            'Apache License 2.0',
            'Eclipse Public License 1.0',
            'GNU General Public License v3.0',
            'Mozilla License',
            'MIT License',
            'The Unlicense'
        ]
    
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide guidelines for how to contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide a step-by-step description of how to run tests for your project.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide a your GitHub user name.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your contact email address.',
    }
];

// TODO: Create a function to write README file
function writeFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating your readme file');
        writeFile('./utils/README.md', generateMarkdown({ ...inquirerResponses }));
    });
};

// Function call to initialize app
init();
