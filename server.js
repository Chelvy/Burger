var express = require("express");
var methodOverride = require("method-override");
var app = express();
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(port, function() {
    console.log("Server listening on: http://localhost:" + port)
});

console.log('node process: ' + process.env.NODE_ENV)