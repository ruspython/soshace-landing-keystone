var keystone = require('keystone');
var Company = keystone.list('Company');

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

exports = module.exports = function (req, res, next) {
  var sent = true;
  var body = req.body;

  if (!validateForm(body)) {
    return res.status(403).json({
      sent: false
    });
  }

  //sent = true;

  var mailOptions = {
    from: process.env.MAIL_NO_REPLY, // sender address
    to: Company.get.email, // list of receivers
    subject: 'team.soshace message from' + body.email, // Subject line
    text: 'Name: ' + body.name + 'Email: ' + body.email + 'Message: ' + body.message // plaintext body
    //html: '<b>Hello world 🐴</b>' // html body
  };

  console.log(Company.model.email);


  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent:' + info.response);
  });

  res.json({
    sent: sent
  });
};
