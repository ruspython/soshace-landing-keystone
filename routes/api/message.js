var keystone = require('keystone');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  direct: true
});

var mailOptions = {
  from: 'Fred Foo 👥 <foo@blurdybloop.com>', // sender address
  to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world 🐴', // plaintext body
  html: '<b>Hello world 🐴</b>' // html body
};

function validateForm(body) {

  var name = body.name;
  var email = body.email;
  var message = body.message;

  if (validator.isMail(email)) {
    return true;
  } else {
    return false;
  }
}

exports = module.exports = function (req, res, next) {
  var sent = true;
  var body = req.body;

  console.log(body.name);
  console.log(body.email);
  console.log(body.message);

  if (!validateForm(body)) {
    return res.status(403).json({
      sent: false
    });
  }

  //sent = true;

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent:' + info.response);
  });

  res.json({
    sent: sent
  })
};
