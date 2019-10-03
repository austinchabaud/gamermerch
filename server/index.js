require("dotenv").config();
const { gamerMerch, getDetails } = require("./controller/merchInventory");
const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("sk_test_e6aCw3he4DSqYD6PxGBEsibD00HOAITTwx");
const session = require("express-session");
const massive = require("massive");
const app = express();
const {
  gamerRegister,
  gamerLogin,
  gamerLogout,
  getGamerSession
} = require("./controller/authController.js");

const {
  addToCart,
  getCart,
  removeFromCart
} = require("./controller/cartController");
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
app.delete("/api/removeitem/:id", removeFromCart);
// stripe checkout
app.get("/stripe", (req, res) => {
  res.send("Add your stripe secret key to the .require('stripe') statement!");
});

app.post("/checkout", async (req, res) => {
  console.log("Request: ", req.body);

  let error;
  let status;
  try {
    const { merch, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });
    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: merch.price * 100,
        currency: "usd",
        customer: customer.id,
        reciept_email: token.email,
        description: `Thanks for your purchase of ${merch.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        impotency_key
      }
    );
    console.log("Charge:", { charge });
    status: "success";
  } catch (error) {
    console.log("error", error);
    status: failure;
  }
  res.json({ error, status });
});

const port = 4000;
app.listen(port, () => console.log(`listening on port ${port}`));
