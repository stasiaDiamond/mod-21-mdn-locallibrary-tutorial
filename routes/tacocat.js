const express = require("express");
const router = express.Router();

// router.get("/", function (req, res, next) {
//   res.send("Hi, I'm the routes/tacocat.js file")
// })

router.get("/", function (req, res, next) {
  res.send("TACOCAT IN DA HOUSE!")
})

module.exports = router;