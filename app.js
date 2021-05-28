/* Require Modules */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

const server = app.listen(8000, function(){
    console.log("Listening to Port 8000");
});
/* Routes */
var routes = require('./routes');
app.use(routes);
