const date = "`r format(Sys.date(), %Y')`"
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!aboutText) {
    return '';
}
return `
  ${licenseBadge}
`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const license = `${renderLicenseLink}` + `\n` + `${renderLicenseSection}`;

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ${licenseBadge}
  ## Description
  ${description}

  ## Table of Contents

  ## Installation

  ## Usage

  ${license}

  ## Contributors

  ## Tests

  ### Any questions? Please contact @${gitInput} by emailing me at ${email}.

  ### &copy ${date} ${name}
`;
}

module.exports = generateMarkdown;
