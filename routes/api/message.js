var keystone = require('keystone');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  direct: true
});

function validateForm(body) {
  return true;
}

exports = module.exports = function (req, res, next) {
  var sent = false;
  var body = req.body;

  if (!validateForm(body)) {
    return res.status(403).json({
      sent: false
    });
  }

  sent = true;
  // transporter.sendMail()

  res.json({
    sent: sent
  })
};
