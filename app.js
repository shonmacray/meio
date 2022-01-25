import express from "express"
import aboutme from "./aboutme.json"

const app = express()

function getMyName(req, res){
  res.json(aboutme)
}

app.get("/", getMyName)

app.listen(2013, ()=> console.log("fuckin started"))