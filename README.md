# Sending Gmail using Node.js

This guide provides a step-by-step process to send emails using Gmail in a Node.js application with Nodemailer.

## Prerequisites

- **Node.js**: Make sure you have Node.js installed.
- **Google Account**: You will need a Gmail account.

## Setup Instructions

### 1. Install Nodemailer

Open your terminal and run the following command to install Nodemailer:
npm install nodemailer

2. Create an App Password
To securely send emails from your Gmail account, create an app password by following these steps:

Go to your Google Account settings.
Navigate to "Security."
Under "Signing in to Google," ensure that 2-Step Verification is enabled.
Find "App Passwords" and follow the prompts to create a new app password.

3. Implement the Mail Function
The mail function can be found in the file /Main-Function/emailFunction.js. You can utilize this function in other parts of your application.

4. Run the Application
To start your server, execute the following command in your terminal:
node server.js

5. Send Direct Email
To send an email directly, use the following command:
node directMail.js

Additional Notes
Remember to replace placeholder values in the email function with your actual Gmail credentials and recipient information.
For further customization and details, consult the Nodemailer documentation.
