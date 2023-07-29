const express = require("express");
const {
  getAll,
  getById,
  add,
  deleteContact,
  update,
} = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", ctrlWrapper(getAll));

router.get("/:contactId", ctrlWrapper(getById));

router.post("/", ctrlWrapper(add));

router.delete("/:contactId", ctrlWrapper(deleteContact));

router.put("/:contactId", ctrlWrapper(update));

module.exports = router;
