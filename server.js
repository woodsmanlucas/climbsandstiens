const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());


app.use(
    cors({
      origin: ["http://localhost:5000"],
      credentials: true,
    })
  );

  app.use(
    "/",
    (req, res) => {
        res.json({data: "hello world"})
    }
  )

  app.listen(5000, () => console.log("server is good"));

  module.exports = app;

