// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {writeFile} = require('./utils/generateMarkdown.js');
const generatePage = require("./utils/page-template.js");

// TODO: Create an array of questions for user input
const questions = (gitData) => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'profile',
            message: 'What is your GitHub username? (Required)',
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub profile!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project? (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project (be sure to explain the what/why/how - why does this project exist?). (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the required steps to install this project? (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please let us know how to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add a license to your project?',
            default: false,
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license.',
            choices: ['Apache', 'Boost', 'Eclipse', 'IBM', 'MIT', 'Mozilla', 'Unlicense', 'WTFPL'],
            when: ({confirmLicense}) => {
             if (confirmLicense) {
                return true
             } else {
                return false;
            }
        }},
        // {
        //     type: 'checkbox',
        //     name: 'badges',
        //     message: 'Which of the following did you use to create your project? (check all that apply)',
        //     choices: [''],
        //     validate: badgeInput => {
        //         if (badgeInput) {
        //             return true;
        //         } else {
        //             console.log('Please enter a description of your project.');
        //             return false;
        //         }
        //     }
        // },
    ]);
}

questions()
    .then(renderLicenseBadge)
    .then(gitData => {
    return generatePage(gitData);
    })
    .then (README => {
    return writeFile(README);
    })
    .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
    })
    .then(copyFileResponse => {
    console.log(copyFileResponse);
    })
    .catch(err => {
    console.log(err)
    })

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
