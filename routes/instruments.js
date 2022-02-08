var express = require("express");
var router = express.Router();

const Instrument = require("../models/Instrument.model");

/* GET home page. */
router.get("/all-instruments", function(req, res, next) {
    Instrument.find()
        .then((results) => {
            res.render("all-instruments", { instruments: results });
        })
        .catch((err) => {
            console.log("Something went wrong", err);
        });
});

router.get("/create-instrument", function(req, res, next) {
    res.render("create-instrument");
});

router.post("/create-instrument", (req, res) => {
    console.log("this is the body", req.body);
    Instrument.create({
            name: req.body.name,
            type: req.body.type,
            genre: [req.body.genre],
            price: req.body.price,
        })
        .then(res.redirect("/instruments/all-instruments"))
        .catch((err) => {
            console.log("Something went wrong", err);
        });
});

module.exports = router;