const express = require("express");
const {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
} = require("../../controllers/users");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { loginAndRegisterSchema } = require("../../models/user");
const subscriptionSchema = require("../../schemas/users");

const router = express.Router();

router.post(
  "/register",
  validateBody(loginAndRegisterSchema),
  ctrlWrapper(register)
);

router.post("/login", validateBody(loginAndRegisterSchema), ctrlWrapper(login));

router.get("/current", authenticate, ctrlWrapper(getCurrent));

router.post("/logout", authenticate, ctrlWrapper(logout));

router.patch(
  "/:id/subscription",
  authenticate,
  validateBody(subscriptionSchema),
  ctrlWrapper(updateSubscription)
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);

module.exports = router;
