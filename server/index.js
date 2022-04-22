const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const tourRouter=require('../../d_ocean_tennis/server/router/tour');

var port=process.env.PORT||3200;
//middleware
app.use(cors());// why need cors
app.use(express.json()); //req.body
app.use("/api",tourRouter);

app.listen(port, () => {
  console.log(`server has started on port ${port} `);
});

app.listen(port, () => {
  console.log("server has started on port "+port);
});
