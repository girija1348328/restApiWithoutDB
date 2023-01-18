const express = require('express')
const router = express.Router()
var fs = require('fs'); //require file system object

router.get("/getDetails",function (req,res){
    let data = ["hello","hii"]
    return res.send({message:"Hello dear",data:data})
})




// Endpoint to Get a list of users
router.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})



//insert
//Step 1: Create a new user variable
var user = {
    "user5": {
        "id":5,
        "firstname":"Liudmyla",
        "lastname":"Nagorna",
        "email":"mila@gmail.com"
      },
} 

//The addUser endpoint
router.post('/addUser', function(req, res){
    //Step 2: read existing users
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        data = JSON.parse(data);
        //Step 3: append user variable to list
        data["user5"] = user["user5"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

//Endpoint to get a single user by id
router.get('/:id', function (req, res) {
    // First retrieve existing user list
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })


 
 //Code to delete a user by id
 var id = 3;
 router.delete('/deleteUser', function (req, res) {
    // First retrieve existing users
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 3];
        
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })
module.exports = router