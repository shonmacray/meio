import express from "express";
import aboutme from "./aboutme.json"
import Person from "./utils.js"

const app = express();

const person = new Person(aboutme);

// check valid doc?
app.use(function isValidDoc(req, res, next){
  if(aboutme && "profile" in aboutme && "anchors" in aboutme){
    next();
  }else{
    res.status(500).send("document not valid")
  }
})

app.get("/", (req, res) => person.getAll(req, res))
app.get("/profile", (req, res) => person.getProfile(req, res))
app.get("/links", (req, res) => person.getLinks(req, res))
app.get("/link/:id", (req, res) => person.getLinkContent(req, res))

app.listen(2013, ()=> console.log("fuckin started"))