const express = require("express");
const {
  getAll,
  getById,
  add,
  deleteContact,
  update,
} = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");
const { addSchema } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrlWrapper(getAll));

router.get("/:contactId", ctrlWrapper(getById));

router.post("/", validateBody(addSchema), ctrlWrapper(add));

router.delete("/:contactId", ctrlWrapper(deleteContact));

router.put("/:contactId", validateBody(addSchema), ctrlWrapper(update));

module.exports = router;
