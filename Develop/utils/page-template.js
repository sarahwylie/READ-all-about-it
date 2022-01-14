const date = "`r format(Sys.date(), %Y')`"
// const finishedProduct = require("./utils/generateMarkdown.js");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (!confirmLicense) {
    return '';
} else if (license.choices === 'Apache') {
    return apacheBadge(licenseBadge) = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
} else if (license.choices === 'Boost') {
    return boostBadge(licenseBadge) = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
} else if (license.choices === 'Eclipse') {
    return eclipseBadge(licenseBadge) = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`
} else if (license.choices === 'IBM') {
    return IBMBadge(licenseBadge) = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`
} else if (license.choices === 'MIT') {
    return MITBadge(licenseBadge) = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
} else if (license.choices === 'Mozilla') {
    return mozillaBadge(licenseBadge) = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
} else if (license.choices === 'Unlicense') {
    return unlicenseBadge(licenseBadge) = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`
} else if (license.choices === 'WTFPL') {
    return WTFPLBadge(licenseBadge) = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]`
}
return `
  ${licenseBadge}
`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!confirmLicense) {
        return '';
    } else if (license.choices === 'Apache') {
        return apache(licenseLink) = `[![Apache](https://opensource.org/licenses/Apache-2.0)]`;
    } else if (license.choices === 'Boost') {
        return boost(licenseLink) = `[![Boost](https://www.boost.org/LICENSE_1_0.txt)]`
    } else if (license.choices === 'Eclipse') {
        return eclipse(licenseLink) = `[![Eclipse](https://opensource.org/licenses/EPL-1.0)]`
    } else if (license.choices === 'IBM') {
        return IBM(licenseLink) = `[![IBM IPL 1.0](https://opensource.org/licenses/IPL-1.0)]`
    } else if (license.choices === 'MIT') {
        return MIT(licenseLink) = `[![MIT](https://opensource.org/licenses/MIT)]`
    } else if (license.choices === 'Mozilla') {
        return mozilla(licenseLink) = `[![Mozilla MPL 2.0](https://opensource.org/licenses/MPL-2.0)]`
    } else if (license.choices === 'Unlicense') {
        return unlicense(licenseLink) = `[![Unlicense](http://unlicense.org/)]`
    } else if (license.choices === 'WTFPL') {
        return WTFPL(licenseLink) = `[![WTFPL](http://www.wtfpl.net/about/)]`
    }
    return `
      ${licenseLink}
    `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!confirmLicense) {
        return '';
    } if (confirmLicense === true) {
    return `
    ${renderLicenseBadge(licenseBadge)}
    ## License
    ${renderLicenseLink(licenseLink)}
    `}
};


// const license = `${renderLicenseSection}` + `\n` + `${licenseLink}`;

// TODO: Create a function to generate markdown for README
module.exports = gitData => {
    const { name, profile, ...license } = gitData;
  return `
  # ${project}
    ${licenseBadge}
  
  ## Description
  ${description}

  ## Table of Contents
    * [Installation](#-Installation)
    * [Usage](#-Usage)
    * [Queries](#-Any-questions?)

  ## Installation
    ${installation}

  ## Usage

  ${renderLicenseSection()}

  ## Contributors

  ## Tests

  ### Any questions? Please contact @${profile} by emailing me at ${email}.

  ### &copy ${date} ${name}
`;
}
 
module.export