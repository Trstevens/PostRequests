var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({extended: true})); //Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option.
app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lilly"];

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend; //This requires npm package body-parser which is above!
    friends.push(newFriend);
    console.log(req.body); //This is an object that contains all the data from the request body
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
}); 

app.listen(port, function(){
    console.log("server has started!");
});