const express=require('express')
 const router=express.Router()

const cors = require("cors");
const pool = require("../../../tennis_proj/server/db");

//middleware
router.use(cors());// why need cors
router.use(express.json()); //req.body

router.get("/",async(req,res)=>{
  try {
    res.json("abc=d");
  } catch (error) {
    console.log(error);
    
  }
})
router.get("/validyear",async(req,res)=>{
    try {
      const tour=req.query.tourname;
      const suggestion = await pool.query
      ("SELECT DISTINCT(tourney_year) from tournament WHERE tourney_name=$1",[tour])
      res.json(suggestion.rows)
    } catch (error) {
      console.error(err.message);
    }
  }) 
router.get("/all", async (req, res) => {
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
module.exports=router