const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if no token
  if (!token) {
    return res.status(401).json({
      // => Not authorized
      msg: "No token, authorization denied",
    });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get("JWT_SECRET"));

    req.user = decoded.user;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
