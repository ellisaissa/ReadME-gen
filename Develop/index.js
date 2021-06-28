

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
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
        type:"list",
        name: "license",
        question: "What type of license does your prject have?",
        options: ["none", "APACHE 2.0", "MIT", "BSD 3", "GPL 3.0"],
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
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


function init() {
    inquirer.prompt(questions).then((inquirerResponses)=> {
        console.log("Creating ReadME");
        writeToFile("READMEmd", generateMarkdown({...inquirerResponses}))
    })
}

init();
