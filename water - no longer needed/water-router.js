// const express = require("express");
// const helmet = require("helmet");

// const Water = require("../water/water-model.js");

// const router = express.Router();

// // find
// router.get("/", (req, res) => {
//   Water.find()
//     .then(water => {
//       res.json(water);
//     })
//     .catch(error => {
//       res.status(500).json({ message: "Failed to get water schedule." });
//     });
// });
// // GET http://localhost:5000/api/water tested in Postman

// // findById
// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   Water.findById(id)
//     .then(water => {
//       if (water) {
//         res.json(water);
//       } else {
//         res
//           .status(404)
//           .json({ message: "Could not find water schedule with given ID." });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({ message: "Failed to get water schedule." });
//     });
// });
// // GET http://localhost:5000/api/water/1 Tested in Postman

// // add
// router.post("/", (req, res) => {
//   const waterData = req.body;

//   Water.add(waterData)
//     .then(water => {
//       res.status(201).json(water);
//     })
//     .catch(error => {
//       res.status(500).json({ message: "Failed to add new water schedule." });
//     });
// });
// // POST http://localhost:5000/api/water tested in Postman

// // update
// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   Water.findById(id)
//     .then(water => {
//       if (water) {
//         Water.update(changes, id).then(updatedWater => {
//           res.json(updatedWater);
//         });
//       } else {
//         res
//           .status(404)
//           .json({ message: "Could not find water schedule with given Id." });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({ message: "Failed to update water schedule." });
//     });
// });
// // PUT http://localhost:5000/api/water/16 tested in Postman

// // remove
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;

//   Water.remove(id)
//     .then(deleted => {
//       if (deleted) {
//         res.json({ removed: deleted });
//       } else {
//         res
//           .status(404)
//           .json({ message: "Could not find water schedule with given Id." });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({ message: "Failed to delete water schedule." });
//     });
// });
// // DELETE http://localhost:5000/api/water/16 Tested in Postman

// module.exports = router;

// it was decided this wasn't needed, keeping it just in case requirements change at the last minute.
