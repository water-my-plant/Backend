const express = require("express");
const helmet = require("helmet");

const Plants = require("../plants/plants-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Plants.find()
    .then(plants => {
      res.json(plants);
      console.log(plants);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get plants." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Plants.findById(id)
    .then(plant => {
      if (plant) {
        res.json(plant);
      } else {
        res
          .status(404)
          .json({ message: "Could not find plant with given ID." });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get Plant." });
    });
});

// add plant

module.exports = router;
