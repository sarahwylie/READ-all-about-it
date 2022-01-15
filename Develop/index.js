// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const { writeFile } = require('./utils/generateMarkdown');
const {pageTemplate} = require("./utils/page-template");

// TODO: Create an array of questions for user input
const questions = (gitData) => {
    return inquirer.prompt([
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
            type: 'list',
            name: 'license',
            message: 'Please choose a license.',
            choices: ['Apache', 'Boost', 'Eclipse', 'IBM', 'MIT', 'Mozilla', 'Unlicense', 'WTFPL', 'No License'],
            // when: ({confirmLicense}) => {
            //  if (confirmLicense) {
            //     return renderLicenseBadge();
            //  } else {
            //     return false;
            // }
        },
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
    .then(README => {
     writeFile(pageTemplate(README));
    })
    .catch(err => {
        console.log(err)
    })

const writeFile = fileContent => {
    // return new Promise((resolve, reject) => {
        return fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                // reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Created!'
            })
        })
    // })
}


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();