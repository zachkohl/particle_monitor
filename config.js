//Local Variable
if (process.env.NODE_ENV !== 'production') {
require('dotenv').load();
    }
//prep export object
config = {};

//Express +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const express = require('express');
const helmet = require('helmet');
const path = require('path') ;
const PORT = process.env.PORT || 80;
const app = express(); 
app.use(helmet())
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json()); 
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'loggedout'}));
app.set('view engine', 'handlebars');
//app.set('views',[__dirname +"/views"+"/test",__dirname+'/views'])
//app.set('views', [path.join(__dirname,'views'),path.join(__dirname,'views','test')]);
app.set('views','./views')
app.use(express.static('static'));
//app.listen(PORT, () => console.log('Example app listening on port 80!')) //see Socket.io below for new implementation


config.app = app;
//end Express --------------------------------------------------------------------------------------------------------------------------------------------------------------

//Socket.io++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(PORT,console.log('listening on port '+PORT));

config.io = io;

//https://socket.io/docs/#Installing
//END Socket.io--------------------------------------------------------------------------------------------------------------------------------------------------------------



//Export +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


module.exports = config;