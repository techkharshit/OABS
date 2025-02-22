const express = require("express");
const app = express();
const path = require("path");

var cors = require("cors");
var bodyParser = require("body-parser");

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(express.static(path.resolve(__dirname, "frontend/build")));
module.exports = function (collection) {
  // app.get("/", (req, res) => {
  //   console.log("hello /link");
  // });
  app.get("/getData", (req, res) => {
    require("./getData")(req, res, collection);
  });
  app.post("/postData", async (req, res) => {
    await collection.insertOne(req.body);
    res.status(200).send("real data inserted");
  });

  app.get("/getHistory", (req, res) => {
    require("./getHistory")(req, res, collection);
  });


    app.get("/", (req, res) => {
      res.send("RIT Hall Booking Server running");
    });
  

  app.listen(PORT, () => {
    console.log("Server is listening to port " + PORT);
  });
};
