const path = require("path");
const express = require("express");
const app = express();

app.use(express.static( path.join(__dirname, "public")));


 app.get("/", function(require, response){
     response.sendFile(__dirname, "public", "index.html");
 });


app.listen(3000,function(){
    console.log("sever is staring on port 3000");
});


