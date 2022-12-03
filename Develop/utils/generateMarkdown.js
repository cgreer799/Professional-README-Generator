// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return `![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue)`
  }
  else if (license === "Eclipse Public License 1.0") {
    return `![License: Eclipse Public License 1.0](https://img.shields.io/badge/License-EPL_1.0-red)`
  }
  else if (license === "GNU General Public License v3.0") {
    return `![License: GNU General Public License v3.0](https://img.shields.io/badge/License-GPLv3-blue)`
  }
  else if (license === "Mozilla License") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen)`
  }
  else if (license === "MIT License") {
    return `![License: MIT License](https://img.shields.io/badge/License-MIT-yellow)`
  }
  else if (license === "The Unlicense") {
    return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue)`
  }
  return "";

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  else if (license === "Eclipse Public License 1.0") {
    return `https://opensource.org/licenses/EPL-1.0`
  }
  else if (license === "Mozilla License") {
    return `https://opensource.org/licenses/MPL-2.0`
  }
  else if (license === "GNU General Public License v3.0") {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }
  else if (license === "MIT License") {
    return `https://opensource.org/licenses/MIT`
  }
  else if (license === "The Unlicense") {
    return `https://unlicense.org/`
  }
    
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
    return `This project is licensed under the ${license}. Use the link provided below to learn more about this license:
    `
  }

  return "No license was used for this project.";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
   
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}
  
  ## License

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  For more of my projects, please refer to my GitHub page: [${data.github}](https://github.com/${data.github}/). For any questions, please contact me at ${data.email}.



`;
}

module.exports = generateMarkdown;
