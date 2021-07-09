const express = require("express");
const router = express.Router();

//localhost:5000
router.get("/", (req, res) => {
  res.json({ RECIPER_API: "server is running and working.." });
});

module.exports = router;
