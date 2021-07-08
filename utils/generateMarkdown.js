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
      return `Apache License
      Version 2.0, January 2004
   http://www.apache.org/licenses/
TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
1. Definitions.
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
      break;
    case "MIT":
      return `MIT License
      Copyright (c) [year] [fullname]
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.`;
      break;
    case "GNU GPLv3":
      return `GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007 Copyright (C) 2007 Free Software Foundation, Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed Preamble`;
      break;
    case "GNU AGPLv3":
      return `GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007 Copyright (C) 2007 Free Software Foundation, Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed Preamble`;
      break;
      default:
        "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  let licenseBadge = renderLicenseBadge(answer.License);
  let licenseLink = renderLicenseLink(data.License);
  let licenseSection = renderLicenseSection(data.License);

  return `
# ${data.title}
${licenseBadge}
## Description
${data.description}
## Table of Contents
[Installation](#Installation)
[Usage](#Usage)
[License](#Usage)
[Contributing](#Contribution)
[Tests](#Tests)
[Questions](#Questions)
## Installation
${data.Installation}
## Usage
${data.Usage}
## License
* Link for more information: ${licenseLink}
* ${licenseSection}
## Contributing
${data.Contribution}
## Tests
${data.Tests}
## Questions
* Questions? Visit my GitHub: [${data.questions}](https://github.com/${data.questions}) 
* With additional questions, feel free to email me at: ${data.email}
`;  
}

module.exports = generateMarkdown;
