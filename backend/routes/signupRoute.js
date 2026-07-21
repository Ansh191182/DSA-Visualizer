const express = require("express");
const router = express.Router();
const signupLogic = require("../controlers/signupControler");
// signupRoute

router.post("/signup", signupLogic);
module.exports = router;
