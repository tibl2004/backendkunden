const express = require("express");
const router = express.Router();

const linksController = require("../controller/links.controller");

router.get("/", linksController.getAll);
router.get("/:id", linksController.getById);
router.post("/", linksController.create);
router.put("/:id", linksController.update);
router.delete("/:id", linksController.delete);

module.exports = router;
