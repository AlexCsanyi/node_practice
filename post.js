const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const joi = require("joi");
const app = express();

app.use("/public", express.static(path.join(__dirname, "post")));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "post", "index.html"));
});

app.post("/", (req, res) => {
  const schema = joi.object().keys({
    email: joi
      .string()
      .trim()
      .email()
      .required(),
    password: joi
      .string()
      .min(5)
      .max(10)
      .required()
  });
  joi.validate(req.body, schema, (err, result) => {
    if (err) {
      console.log(err);
      res.send("an error has occured");
    }
    console.log(result);
    res.send("successfully posted data");
  });
});

app.listen(3000);
