const express = require("express");
const app = express();

app.use(express.static("public"))

app.route("/index.html").get((req, res) => res.sendFile(__dirname + "/public/HTML/index.html"))

app.route("/home.html").get((req, res) => res.sendFile(__dirname + "/public/HTML/home.html"))

// app.get("/", function(req, res){
//   res.sendFile(__dirname + "/public/HTML/index.html")
// });


// class tabs {
//   constructor(file){
//     this._file = file;
//   }


//   get GetArea(){
//     return app.route(`/${this._file}`).get( (req, res) => res.sendFile(__dirname + `/public/HTML/${this._file}`))
//   }
// }

// let pages = [
//   {id: 1, file: new tabs(`index.html`)}
// ]






// function tabs (){
//   const login = app.route("/").get( (req, res) => res.sendFile(__dirname + "/public/HTML/index.html"));
//   const home = app.route("/home.html").get( (req, res) => res.sendFile(__dirname + "/public/HTML/home.html"));
  
// }

// tabs();


// app.get("/home.html", function(req, res){
//   res.sendFile(__dirname + "/public/HTML/home.html")
// });


app.listen("3000", ()=>{
  console.log("Running server at 3000")
})

