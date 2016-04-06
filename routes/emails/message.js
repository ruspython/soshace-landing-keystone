var keystone = require('keystone');
var Company = keystone.list('Company');

// Values are taken from the .env file
var nodemailer = require('nodemailer'),
    transporter = nodemailer.createTransport({
        service: process.env.MAIL_SERVICE,
        auth: {
          user: process.env.MAIL_NO_REPLY,
          pass: process.env.MAIL_NO_REPLY_PASSWORD
      }
    });

/**
 * Server-side form validation
 * @param {Object} body
 */
function validateForm(body) {
  var name = body.name,
      email = body.email,
      message = body.message,
      REG_EXP_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var isEmailValid = REG_EXP_EMAIL.test(email),
      isNameValid = false,
      isMessageValid = false;

  if (name.length > 2) {
    isNameValid = true;
  }

  if (message.length > 5) {
    isMessageValid = true;
  }

  return (isNameValid && isEmailValid && isMessageValid);
}

exports = module.exports = function (req, res) {
  var sent = true;
  var body = req.body;

  // Load recievers emails from 'Company' model
  return Company.model.findOne().exec().then(function (company) {
    var recieversList = company.emails;
        recieversList = recieversList.split(' ');

    var recieversEmails = recieversList.join(', ');

    if (!validateForm(body)) {
      return res.status(403).json({
        sent: false
      });
    }

    var time = (new Date()).toString();

    // Options for nodemailer
    // Sender address is taken from .env file
    // Recievers list are taken from model 'Company'
    var mailOptions = {
      from: process.env.MAIL_NO_REPLY,                 // Sender address
      to: recieversEmails,                             // Receivers addresses
      subject: 'team.soshace.com message from ' + body.name, // Subject line
      html: '<p>Name: ' + body.name + '</p>' + '<p>' + 'Email: ' + body.email + '</p>' + '<p>' +'Was sent at ' + time + '</p>' + 'Message: ' + '<p>' + body.message + '</p>' // html body
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.error(error);
        sent = false;
      } else {
        console.log('Message sent:' + info.response);
      }

      res.json({
        sent: sent
      });
    });
  }, function (error) {
    console.error(error);

    res.status(500).json({
      error: error
    });
  });
};
