const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");
const Product = require("./db/Product");
const User = require("./db/User");

app.use(express.json());
app.use(cors());
const jwt = require("jsonwebtoken");
const jwtKey = "e-comm";

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  if (result) {
    jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err,token) => {
      if (err) {
        res.send({ result: "No user found, please try again" });
      }
      res.send({ result, auth: token });
    });
  }
});
app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err,token) => {
        if (err) {
          res.send({ result: "No user found, please try again" });
        }
        res.send({ user, auth: token });
      });
    } else res.send({ result: "No user found" });
  } else res.send({ result: "No user found" });
});
app.post("/add-product", async (req, res) => {
  const product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});
app.get("/products", async (req, res) => {
  let result = await Product.find();
  if (result.length > 0) res.send(result);
  else res.send("No products found");
});
app.delete("/products/:id", async (req, res) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
});
app.get("/products/:id", async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) res.send(result);
  else res.send({ result: "No record found" });
});
app.put("/products/:id", async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});
app.get("/search/:key", async (req, res) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { mobile: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});
app.listen(3000);
