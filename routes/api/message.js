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
  var name = body.name;
  var email = body.email;
  var message = body.message;

  var REG_EXP_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var REG_EXP_NAME = /^[A-Za-z0-9 ]{3,20}$/;
  var REG_EXP_MESSAGE = /^[A-Za-z0-9 ]{3,500}$/;

  var isNameValid = REG_EXP_NAME.test(name);
  var isEmailValid = REG_EXP_EMAIL.test(email);
  var isMessageValid = REG_EXP_MESSAGE.test(message);

  if (isNameValid && isEmailValid && isMessageValid) {
    return true;
  } else {
    return false;
  }
}

exports = module.exports = function (req, res) {
  var sent = true;
  var body = req.body;

  // Load recievers emails from 'Company' model
  return Company.model.findOne().exec().then(function (company) {
    var recieversEmails = company.emailFirst + ', ' + company.emailSecond;

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
      from: process.env.MAIL_NO_REPLY,                 // sender address
      to: recieversEmails,                             // list of receivers
      subject: 'team.soshace.com message from ' + body.name, // Subject line
      //text: 'Name: ' + body.name + 'Email: ' + body.email + 'Message: ' + body.message, // plaintext body
      html: 'Name: ' + body.name + '<br>' + 'Email: ' + body.email + '<br>' + 'Was sent at ' + time + '<br>' + 'Message: ' + '<br>' + body.message // html body
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent:' + info.response);
    });

    res.json({
      sent: sent
    });
  }, function (error) {
    res.status(500).json({
      error: error
    });
  });
};
