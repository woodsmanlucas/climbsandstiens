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

  const userRoute = require("./routes/user")
  const employeeRoute = require("./routes/employee")

  app.use("/user", userRoute)

  app.listen(5000, () => console.log("server is good"));

  module.exports = app;

