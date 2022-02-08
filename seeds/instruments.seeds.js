const mongoose = require("mongoose");
const Instrument = require("../models/Instrument.model");

mongoose
  .connect("mongodb://localhost/morning-challenge")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

const seeds = [
  {
    name: "Tuba",
    type: "wind",
    genre: ["symphonic", "hip-hop"],
    price: 700,
  },
  {
    name: "Cuica",
    type: "???",
    genre: ["jazz", "rock"],
    price: 30,
  },
  {
    name: "Pipa",
    type: "string",
    genre: ["classical"],
    price: 200,
  },
];

Instrument.create(seeds)
  .then((results) => {
    console.log("Database Seeded:", results);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Something went wrong:", err);
  });
