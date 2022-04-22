const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const port=3200
//middleware
app.use(cors());// why need cors
app.use(express.json()); //req.body

app.get("/",async(req,res)=>{
  try {
    res.json("abc=d");
  } catch (error) {
    console.log(error);
    
  }
})
app.get("/all", async (req, res) => {
  try {
  
const tour= req.query.tourname;
const year=req.query.year;

   const tourdata = await pool.query
    ("SELECT * FROM tournament WHERE tourney_year = $1 AND tourney_name=$2" ,[year,tour]);
   
    res.json(tourdata.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.listen(port, () => {
  console.log("server has started on port "+port);
});
