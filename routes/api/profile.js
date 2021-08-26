const express = require("express");
const router = express.Router();

// @route   GET api/profule
// @desc    profile route
// @access  public
router.get("/", (req, res) => res.send("Profile route"));

module.exports = router;
