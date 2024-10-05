
const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email , // replace with your email
    pass: process.env.appPassword // replace with your password or app password
  }
});

const defaultSubject = 'Welcome';// Default Suject 
const defaultText = 'Welcome to '; //Default Text 

/**
 * Middleware function to send an email.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise} - Resolves if email is sent, rejects if an error occurs.
 */
const sendEmailAndHandleRequest = async (req, res) => {
  const { to, subject = defaultSubject, text = defaultText } = req.body; // Extract "to", "subject", and "text"

  // Check if the recipient's email address is provided
  if (!to) {
    return res.status(400).send('Recipient email address is required.');
  }

  const mailOptions = {
    from: process.env.email, // replace with your email
    to,
    subject,
    text
  };

  try {
    // Attempt to send the email
    const info = await transporter.sendMail(mailOptions);
    return res.status(200).send(`Email sent: ${info.response}`);
  } catch (error) {
    console.error('Error sending email:', error.message);
    return res.status(500).send('Error sending email. Please try again later.');
  }
};

module.exports = { sendEmailAndHandleRequest };
