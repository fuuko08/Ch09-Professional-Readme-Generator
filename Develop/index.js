// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const markdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    }, 
    {
        type: "input",
        message: "Please enter a short description of this project?",
        name: "description"
    },
    {
        type: "input",
        message: "What is your project installation instructions?",
        name: "instruction"
    },
    {
        type: "input",
        message: "What is your project usage information?",
        name: "usage"
    },
    {
        type: "input",
        message: "What is your project contributing?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What is your project testing procedure?",
        name: "testing"
    },
    {
        type: "list",
        message: "What license are you using for the project?",
        name: "license",
        choices:[
            'MIT',
            'ISC',
            'Apache'
        ]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markdown(data), (err) => 
       err ? console.log(err) : console.log('Success!')  
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(res => {
        console.log(res);
        writeToFile(`${res.title}.md`, res);
    });
}

// Function call to initialize app
init();
