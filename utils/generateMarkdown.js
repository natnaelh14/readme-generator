// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "GNU GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "GNU AGPLv3":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    default:
      "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return "(http://www.apache.org/licenses/LICENSE-2.0)";
      break;
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
      break;
    case "GNU GPLv3":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "GNU AGPLv3":
      return "(https://www.gnu.org/licenses/agpl-3.0)";
      break;
    default:
      "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "Apache":
      return `This is Apache License documentation`;
      break;
    case "MIT":
      return `This is MIT License documentation`;
      break;
    case "GNU GPLv3":
      return `This is GNU GPLv3 documentation`;
      break;
    case "GNU AGPLv3":
      return `This is GNU AGPLv3 documentation`;
      break;
    default:
      "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  let licenseBadge = renderLicenseBadge(answer.license);
  let licenseLink = renderLicenseLink(answer.license);
  let licenseSection = renderLicenseSection(answer.license);

  return `
## ${answer.name}
${licenseBadge}
## Description
${answer.description}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contribution)
* [Tests](#Tests)
* [Questions](#Questions)
* [Contact](#Contact)
## Installation\n
To run necessary dependencies, run the following command:\n
* ${answer.installation}
## Usage
* ![alt text](${answer.usage})
## License
* ${licenseSection}
* For more information: ${licenseLink}
## Contributing
* ${answer.contribution}
## Tests
* ${answer.tests}
## Questions
* ${answer.questions}
## Contact
* You can contact me directly ${answer.email}. You can also find more of my work at (https://github.com/${answer.github}/)`;
}

module.exports = generateMarkdown;
