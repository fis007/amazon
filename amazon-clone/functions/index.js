const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// secrect key
const stripe = require("stripe")(
  "sk_test_51HpTnMJSp7LzhdyCKIRhrykUhUIGwMen1u4Cgs831VO837JYvfQF9iuHgYDMFeXzxHHBtA7whOd3A9zqZoIJNfER006qsPVQEE"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!!! for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// http://localhost:5001/challenge-8e2f1/us-central1/api
