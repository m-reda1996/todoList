const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const uuid = require("uuid");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let LISTS = [];
app.get("/" , (req, res) => {
  res.json(LISTS)
} )

app.post('/' ,(req,res) => {
  const {body} = req
  LISTS.push({id : uuid.v4() , ...body})
  res.json(body)
})


app.listen(9000, () => {
  console.log("done");
});
