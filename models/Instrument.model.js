const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instrumentSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },

  type: {
    type: String,
    enum: ["brass", "wind", "string", "percussion", "???"],
  },

  genre: [
    {
      type: String,
      enum: [
        "rock",
        "jazz",
        "r&b",
        "classical",
        "symphonic",
        "hip-hop",
        "blues",
      ],
    },
  ],

  price: {
    type: Number,
    default: 100,
  },
});

const Instrument = mongoose.model("Instrurment", instrumentSchema);

module.exports = Instrument;
