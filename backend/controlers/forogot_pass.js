const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");
const forgotPass = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "10m",
    });

    const resetLink = `http://localhost:5173/reset-password/${token}`;

    await sendEmail(
      email,
      "Password-Reset",
      `Click this link to reset password:\n${resetLink}`,
    );

    res.status(200).json({
      message: "reset Link send successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = forgotPass;
