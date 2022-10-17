const express = require("express");

const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      console.log("err:", err);
    } else {
      qoutes = JSON.parse(data);
      res.send([qoutes[Math.floor(Math.random() * qoutes.length)]]);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
