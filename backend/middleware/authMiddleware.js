const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    // Pehle authorization header check karo
    if (!req.headers.authorization) {
      return res.status(400).json({
        message: "Token is not found",
      });
    }

    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(400).json({
        message: "Token is not found",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Agar baad me user ki information chahiye hogi
    req.user = decoded;

    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      message: "Invalid or Expired Token",
    });
  }
};

module.exports = authMiddleware;
