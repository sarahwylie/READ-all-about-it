// const date = "`r format(Sys.date(), %Y')`"
// const finishedProduct = require("./utils/generateMarkdown.js");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'No License') {
    return '';
} else if (license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
} else if (license === 'Boost') {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
} else if (license === 'Eclipse') {
    return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`
} else if (license === 'IBM') {
    return `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`
} else if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
} else if (license === 'Mozilla') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
} else if (license === 'Unlicense') {
    return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
} else if (license === 'WTFPL') {
    return `![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)`
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'No License') {
        return '';
    } else if (license === 'Apache') {
        return `[Apache](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === 'Boost') {
        return `[Boost](https://www.boost.org/LICENSE_1_0.txt)`
    } else if (license === 'Eclipse') {
        return `[Eclipse](https://opensource.org/licenses/EPL-1.0)`
    } else if (license === 'IBM') {
        return `[IBM IPL 1.0](https://opensource.org/licenses/IPL-1.0)`
    } else if (license === 'MIT') {
        return `[MIT](https://opensource.org/licenses/MIT)`
    } else if (license === 'Mozilla') {
        return `[Mozilla MPL 2.0](https://opensource.org/licenses/MPL-2.0)`
    } else if (license === 'Unlicense') {
        return `[Unlicense](http://unlicense.org/)`
    } else if (license === 'WTFPL') {
        return `[WTFPL](http://www.wtfpl.net/about/)`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'No License') {
        return '';
    } else return `
## License
${renderLicenseLink(license)}
    `
};



// const license = `${renderLicenseSection}` + `\n` + `${licenseLink}`;

// TODO: Create a function to generate markdown for README
function pageTemplate(gitData) {
    const { name, profile, email, project, description, usage, installation, license, contributors, tests } = gitData;
  return `
  # ${project}
    ${renderLicenseBadge(license)}
  
  ## Description
  ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Queries](#any-questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

${renderLicenseSection(license)}

  ## Contributors
  ${contributors}

  ## Tests
  ${tests}

  ### Any questions? 
  Please contact @${profile} by emailing me at ${email}.


  © 2022 ${name}
`;
};
 
module.exports = {pageTemplate}