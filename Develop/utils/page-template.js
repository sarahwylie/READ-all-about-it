const date = "`r format(Sys.date(), %Y')`"
const finishedProduct = require("./dist/generateMarkdown.js");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!confirmLicense) {
    return '';
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
    }
    return `
      ${licenseLink}
    `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `
        
    `
};


const license = `${renderLicenseSection}` + `\n` + `${licenseLink}`;

// TODO: Create a function to generate markdown for README
module.exports = gitData => {
    const { name, profile, ...license } = gitData;
  return `
  # ${project}
    ${licenseBadge}
  
  ## Description
  ${description}

  ## Table of Contents

  ## Installation

  ## Usage

  ${license}

  ## Contributors

  ## Tests

  ### Any questions? Please contact @${profile} by emailing me at ${email}.

  ### &copy ${date} ${name}
`;
}

module.exports = generateMarkdown;
