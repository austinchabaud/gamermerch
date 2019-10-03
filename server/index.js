require("dotenv").config();
const { gamerMerch, getDetails } = require("./controller/merchInventory");
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const app = express();
const {
  gamerRegister,
  gamerLogin,
  gamerLogout,
  getGamerSession
} = require("./controller/authController.js");

const { addToCart, getCart } = require("./controller/cartController");
const { SESSION_SECRET, CONNECTION_STRING } = process.env;

app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  console.log("db connected");
  app.set("db", db);
});

// login, logout, and register

app.post("/api/gamerregister", gamerRegister);
app.post("/api/gamerlogin", gamerLogin);
app.post("/api/gamerlogout", gamerLogout);
app.get("/api/gamerdata", getGamerSession);

// merch, cart, and details

app.get("/api/gamermerch", gamerMerch);
app.post("/api/gamermerch", addToCart);
app.get("/api/cart", getCart);
app.post("/api/details", getDetails);

const port = 4000;
app.listen(port, () => console.log(`listening on port ${port}`));
