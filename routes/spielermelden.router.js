const express = require("express");
const router = express.Router();

const spielerMeldenController = require("../controller/spielermelden.controller");

router.get("/", spielerMeldenController.getAll);
router.get("/:id", spielerMeldenController.getById);
router.post("/", spielerMeldenController.create);
router.put("/:id", spielerMeldenController.update);
router.delete("/:id", spielerMeldenController.delete);

module.exports = router;
