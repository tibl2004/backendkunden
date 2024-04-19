const express = require("express");
const router = express.Router();

const bugMeldenController = require("../controller/bugmelden.controller");

router.get("/", bugMeldenController.getAll);
router.get("/:id", bugMeldenController.getById);
router.post("/", bugMeldenController.create);
router.put("/:id", bugMeldenController.update);
router.delete("/:id", bugMeldenController.delete);

module.exports = router;
