config = require('./config');

config.app.get('/', function (req, res) {
res.render('dashboard')
});//end '/'



//Features

chat = require('./socket.js')(config);