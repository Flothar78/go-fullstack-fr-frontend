const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const stuffRoutes = require("./routes/stuff");
const userRoutes = require("./routes/user");

mongoose
  .connect(
    "mongodb+srv://Flothar78:Tortrock124!@cluster0.1ceqp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

app.use(cors());

app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
