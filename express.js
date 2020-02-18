const express = require("express");
const path = require("path");
const app = express();
app.use("/public", express.static(path.join(__dirname, "main")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "main", "index.html"));
});

// examples

// app.get("/example", (req, res) => {
//   res.send("you reached the example route");
// });

// app.get("/example/:name/:age", (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
//   res.send(req.params.name + " : " + req.params.age);
// });

app.listen(3000);
