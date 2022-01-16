const Express = require("express");
const BodyParser = require("body-parser");

const Router=require('./routes/api')
require('dotenv').config();


var app = Express();
app.use(Express.json());
app.use(BodyParser.urlencoded({ extended: true }));
let database, collection;

app.use(Router);

app.listen(5000, () => {
    console.log('Server started')
})