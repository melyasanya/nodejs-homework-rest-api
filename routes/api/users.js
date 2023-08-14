const express = require("express");
const { register } = require("../../controllers/users");
const { ctrlWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");
const { loginAndRegisterSchema } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validateBody(loginAndRegisterSchema),
  ctrlWrapper(register)
);

module.exports = router;
