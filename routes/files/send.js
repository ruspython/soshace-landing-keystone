exports = module.exports = function(req, res) {
    var options = {
      root: __dirname + '/../../data/files',
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };

    var fileName = req.params.name;
    res.sendFile(fileName, options, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
      else {
        console.log('Sent:', fileName);
      }
    });
};
