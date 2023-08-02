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
const { validateBody, isValidId } = require("../../middlewares");
const { addSchema, updateFavoriteSchema } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrlWrapper(getAll));

router.get("/:contactId", isValidId, ctrlWrapper(getById));

router.post("/", validateBody(addSchema), ctrlWrapper(add));

router.delete("/:contactId", isValidId, ctrlWrapper(deleteContact));

router.put(
  "/:contactId",
  isValidId,
  validateBody(addSchema),
  ctrlWrapper(update)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrlWrapper(updateStatusContact)
);

module.exports = router;
