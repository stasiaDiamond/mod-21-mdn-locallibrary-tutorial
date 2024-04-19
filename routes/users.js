var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send("Hi, I'm the route/users.jsx file");
// });

router.get("/cool", function (req, res, next) {
  res.send("You're so cool")
})

module.exports = router;
