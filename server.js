var express = require("express"),
    bodyParser=require('body-parser'),
    path=require('path'),
    cors=require('cors');
var app=express();
var routes=require('./Apis/routes');
var users=require('./Apis/users');

app.use(bodyParser.urlencoded({
    extended:true
}));
 // app.use(cors());
app.use(bodyParser.json());
app.use(express.static("./public"));
app.use(cors());
app.use('/api',routes);
app.use('/api/users',users);

//@@
app.use(express.static(path.join(__dirname, "client", "build")));

const port = process.env.PORT || 8010;
// app.get("*",(req,res)=>{
//     res.sendFile(path.join(__dirname,"client","build","index.html"))
//   });
  
  app.listen(port, err => {
    console.log("connected to port =\t", port);
  });
  