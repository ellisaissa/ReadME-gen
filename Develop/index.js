// TODO: Include packages needed for this application

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Github",
        question: "What is your username?",
    },
    {
        type: "input",
        name: "email address",
        question: "What is your email address?",
    },
    {
        type: "input",
        name: "Project name",
        question: "What is the name of your project?",
    },
    {
        type: "input",
        name: "about",
        question: "Give a brief synopsis of your project",
    },
    {
        type: "input",
        name: "install",
        question: "What command do you run to install dependencies?",
    },
    {
        type: "input",
        name: "testing",
        question: "What command is run for running tests?",
    },
    {
        type: "input",
        name: "license",
        question: "What license should your project have?",
    },
    {
        type: "input",
        name: "use",
        question: "What does someone need to know about using this project?",
    },
    {
        type: "input",
        name: "contribute",
        question: "What does someone need to know about contributing to this project?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses)=> {
        console.log("Creating ReadME");
        writeToFile("")
    })
}

// Function call to initialize app
init();
