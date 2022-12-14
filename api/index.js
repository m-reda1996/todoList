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

app.get('/:id' , (req,res) => {
  const {id} = req.params
  const list = LISTS.filter((list) => list.id === id)
  res.json(list)
})

app.put('/:id' , (req,res) => {
  const {id} = req.params
  const {body} = req
  const index = LISTS.findIndex((index) => index.id === id )
  LISTS[index] = ({id , ...body })
  res.json(LISTS[index])
})

app.delete('/:id' , (req,res) => {
  const {id} = req.params
  LISTS = LISTS.filter((list) => list.id !== id )
  res.send('deleted')
})
app.listen(9000, () => {
  console.log("done");
});
