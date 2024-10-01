  // Import necessary modules
  const { defineConfig } = require("cypress");
  const nodemailer = require('nodemailer');
  const path = require('path');
  const fs = require('fs');
  const xlsx = require('xlsx');
  const ExcelJS = require('exceljs');

  // Read email configuration
  const emailConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'email_Config.json')));

  module.exports = defineConfig({
    defaultCommandTimeout: 1000, // Set default command timeout to 10 seconds
    pageLoadTimeout: 40000,      // Set page load timeout to 10 seconds
    requestTimeout: 5000,        // Set request timeout to 5 seconds
    responseTimeout: 50000,

    projectId: "rfnr3e",
    reporter: 'cypress-mochawesome-reporter',

    env: {
      WeightWorldUk: "https://www.weightworld.uk/",
      ShyToBuyUk: "https://www.shytobuy.uk/",
      AnimigoUk: "https://www.animigo.co.uk/"
    },

    e2e: {
      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);

        on('task', {
          sendMail({ subject, html }) {
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: emailConfig.senderEmail,
                pass: emailConfig.senderPassword
              },
            });

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
                    subject: subject,
                    html: html,
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
          },

          sendPerformanceMail({ subject, html }) {
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: emailConfig.senderEmail,
                pass: emailConfig.senderPassword
              },
            });
          
            const directoryPath = path.join(__dirname, 'cypress/fixtures');
            const pageLoadTimeFile = path.join(directoryPath, 'page_load_times.xlsx'); // Full path to the file

            // Get current date and time
            const now = new Date();
            const dateString = now.toLocaleDateString(); 
            const timeString = now.toLocaleTimeString();

            // Append date and time to the subject
            const fullSubject = `${subject} - ${dateString} ${timeString}`;

            return new Promise((resolve, reject) => {
              fs.access(pageLoadTimeFile, fs.constants.F_OK, (err) => {
                if (err) {
                  console.error('File does not exist:', err);
                  return reject(err);
                }
          
                const mailOptions = {
                  from: emailConfig.senderEmail,
                  to: emailConfig.receiverEmails.join(', '),
                  subject: fullSubject,
                  html: html,
                  attachments: [
                    {
                      filename: 'page_load_times.xlsx', // Name of the file as it should appear in the email
                      path: pageLoadTimeFile // Full path to the file
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
              });
            });
          },
          
          checkIfFileExists(filePath) {
            return fs.existsSync(filePath);
          },

          readExcelFile(filePath) {
            const workbook = xlsx.readFile(filePath);
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            return xlsx.utils.sheet_to_json(sheet, { header: 1 });
          },

          writeExcelFile({ filePath, jsonSheet }) {
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Page Load Time');

            // Add header row
            worksheet.addRow(jsonSheet[0]);

            // Add rows
            jsonSheet.slice(1).forEach(row => {
              worksheet.addRow(row);
            });

            // Return a promise that resolves after writing the file
            return workbook.xlsx.writeFile(filePath).then(() => null);
          },

          log(message) {
            console.log(message);
            return null;
          },
        });
      },

      specPattern: 'cypress/integration/CCAutomationFramework/WeightWorld/*/*.js',
      defaultCommandTimeout: 6000,
    },
    viewportHeight: 900,
    viewportWidth: 1280,
  });
