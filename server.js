const express = require("express");
const app = express();
const port = "3000";

app.use(express.static("public"))

app.route("/index.html").get((req, res) => res.sendFile(__dirname + "/public/HTML/index.html"))

app.route("/home.html").get((req, res) => res.sendFile(__dirname + "/public/HTML/home.html"))

app.listen(port, ()=>{
  console.log(`Running at ${port}`)
})

