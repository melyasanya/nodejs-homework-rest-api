const express = require("express");
const {
  getAll,
  getById,
  add,
  deleteContact,
  update,
  updateStatusContact,
} = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { addSchema, updateFavoriteSchema } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(getAll));

router.get("/:contactId", authenticate, isValidId, ctrlWrapper(getById));

router.post("/", authenticate, validateBody(addSchema), ctrlWrapper(add));

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(deleteContact)
);

router.put(
  "/:contactId",
  isValidId,
  authenticate,
  validateBody(addSchema),
  ctrlWrapper(update)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  authenticate,
  validateBody(updateFavoriteSchema),
  ctrlWrapper(updateStatusContact)
);

module.exports = router;
