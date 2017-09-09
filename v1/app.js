//SETUP
var express     = require('express'),
    app         = express(),
    ejs         = require('ejs'),
    bodyParser  = require('body-parser');
 
 app.set("view engine", "ejs");

//Routing

app.get("/homepage", function(req,res){
    res.render("home");
});

//Listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});