const router = require("express").Router();

const Users = require("./users-model.js");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => res.send(error));
});
// GET localhost:5000/api/users tested in Postman

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Users.findById(id)
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res
          .status(404)
          .json({ message: "Could not find user with gviven ID." });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get user" });
    });
});
// GET localhost:5000/api/users/3 tested in Postman

module.exports = router;
