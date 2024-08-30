const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(cors())

let data = {
  "name": ["abhay", "anshul"]
};

app.get("/api", (req, res) =>{
  
  res.json(data)
})

app.post("/api", async (req, res) =>{
  
  data = await req.body;
  res.end()
})

const PORT =  5000
app.listen(PORT, () =>{
  console.log(`server up and running on port${PORT}`)
  console.log(data)
})
