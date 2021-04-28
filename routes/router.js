const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/pinged", (req, res) => {
  res.render("pinged");
});

router.post("/ping", (req, res) => {
  console.log(`origin: ${req.get("ping-from")}`);
  console.log(`destination: ${req.get("ping-to")}`);
});

module.exports = router;
