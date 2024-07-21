const { defineConfig } = require("cypress");
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

// Read email configuration
const emailConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'emailConfig.json')));


module.exports = defineConfig({

  "defaultCommandTimeout": 10000, // Set default command timeout to 10 seconds
  "pageLoadTimeout": 60000,       // Set page load timeout to 60 seconds
  "requestTimeout": 5000,         // Set request timeout to 5 seconds
  "responseTimeout": 30000,
   
  projectId: "rfnr3e",
  reporter: 'cypress-mochawesome-reporter',

  env: {
    WeightWorldUk: "https://www.weightworld.uk/",
    ShyToBuyUk: "https://www.shytobuy.uk/",
    AnimigoUk: "https://www.animigo.co.uk/"
  },

  retries: {
    runMode: 2,
    openMode: 2,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      on('task', {
        sendMail({ subject, text }) {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: emailConfig.senderEmail,
              pass: emailConfig.senderPassword
            },
          });

          // Define the directory path correctly
          const directoryPath = path.join(__dirname, 'cypress/fixtures');

          return new Promise((resolve, reject) => {
            fs.readdir(directoryPath, (err, files) => {
              if (err) {
                console.error('Unable to scan directory: ' + err);
                return reject(err);
              }

              const failedFiles = files.filter(file => file.startsWith('failed_urls'));
              if (failedFiles.length > 0) {
                const recentFile = failedFiles.sort((a, b) => {
                  return fs.statSync(path.join(directoryPath, b)).mtime.getTime() -
                         fs.statSync(path.join(directoryPath, a)).mtime.getTime();
                })[0];

                const mailOptions = {
                  from: emailConfig.senderEmail,
                  to: emailConfig.receiverEmails.join(', '),
                  subject: 'Site Health Check Up',
                  text: 'Please find the attached file containing URLs with response code other than 200.',
                  attachments: [
                    {
                      filename: recentFile,
                      path: path.join(directoryPath, recentFile)
                    }
                  ]
                };

                transporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                    console.error('Error sending email:', error);
                    return reject(error);
                  }
                  console.log('Email sent:', info.response);
                  resolve(info.response);
                });
              } else {
                console.log('No failed URLs file found.');
                resolve('No failed URLs file found.');
              }
            });
          });
        }
      });
    },

    specPattern: 'cypress/integration/CCAutomationFramework/WeightWorld/Script/*.js',
    defaultCommandTimeout: 60000, // Increase the default command timeout for Cypress
  },
  viewportHeight: 900,
  viewportWidth: 1280,
});
