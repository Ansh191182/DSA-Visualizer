const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signupLogic = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const userEmail = await User.findOne({ email });

    if (userEmail) {
      return res.status(409).json({
        message: "User is already registered",
      });
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create JWT Token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Create user
    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();

    return res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = signupLogic;
