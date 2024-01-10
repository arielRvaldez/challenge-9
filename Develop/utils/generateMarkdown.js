// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
  return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'Mit') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'Perl') {
    return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
  } else
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return '## License\ [Apache License](https://opensource.org/licenses/Apache-2.0)\ ';
  } else if (license === 'Mit') {
    return '## License\ [Mit License](https://opensource.org/licenses/MIT)\ ';
  } else if (license === 'Mozilla') {
    return '## License\ [Mozilla License](https://opensource.org/licenses/MPL-2.0)\ ';
  } else if (license === 'Perl') {
    return '## License\ [Perl License](https://opensource.org/licenses/Artistic-2.0)\ ';
  } else
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const licenseSection = `
  ## License
  
  This project is licensed under the terms of the [${license}](${renderLicenseLink (license)}).`;
  
  return licenseSection;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenseBadge = renderLicenseBadge(data.license);
  var licenseLink = renderLicenseLink(data.license);
  //console.log(licenseBadge);
  return ` 
### ${data.title}
${licenseBadge}

# Description
${data.description}

# Table of Contents
- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Tests](#tests)

- [Contributions](#contribution)

- [Questions](#questions)
      
# Installation
${data.installation}

# Usage
${data.usage}

# Contribution
${data.contribution}

# Tests
${data.test}

# License
${data.license}
${renderLicenseBadge (data.license)}
${renderLicenseLink (data.license)}

## Questions
GitHub UserName: [${data.GitHub}](www.github.com/${data.GitHub})

Contact me with any questions.
(mailto: ${data.email})
`;
}

module.exports = generateMarkdown;
