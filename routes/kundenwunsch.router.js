const express = require("express");
const router = express.Router();

const KundenwunschController = require("../controller/kundenwunsch.controller");

router.get("/", KundenwunschController.getAll);
router.get("/:id", KundenwunschController.getById);
router.post("/", KundenwunschController.create);
router.put("/:id", KundenwunschController.update);
router.delete("/:id", KundenwunschController.delete);

module.exports = router;
