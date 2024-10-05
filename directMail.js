var nodemailer = require('nodemailer');
require('dotenv').config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email , // From 
    pass: process.env.appPassword // App password 
  }
});

var mailOptions = {
  from: process.env.email ,
  to: '******@gmail.com',
  subject: 'Welcome',
  text: 'Mail using NODE JS'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    console.log(mailOptions);
  }
});