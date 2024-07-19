const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., use 'gmail' or your preferred email service
  auth: {
    user: 'shreeniwas.ukhale@comfortclick.co.uk',
    pass: 'aogp knrf wtpk cvcn'
  }
});

// Get the most recent failed URLs file
const directoryPath = path.join(failed_urls.json, 'cypress/fixtures');
let recentFile;

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  const failedFiles = files.filter(file => file.startsWith('failed_urls_'));
  recentFile = failedFiles.sort((a, b) => {
    return fs.statSync(path.join(directoryPath, b)).mtime.getTime() -
           fs.statSync(path.join(directoryPath, a)).mtime.getTime();
  })[0];

  if (recentFile) {
    // Send the email with the recent failed URLs file as an attachment
    const mailOptions = {
      from: 'shreeniwas.ukhale@comfortclick.co.uk',
      to: 'shreenivasukhale@gmail.com',
      subject: 'Cypress Test - Failed URLs',
      text: 'Please find the attached file containing the failed URLs.',
      attachments: [
        {
          filename: recentFile,
          path: path.join(directoryPath, recentFile)
        }
      ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Email sent: ' + info.response);
    });
  } else {
    console.log('No failed URLs file found.');
  }
});
