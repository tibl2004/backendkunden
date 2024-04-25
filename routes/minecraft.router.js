const express = require("express");
const router = express.Router();

const minecraftController = require("../controller/minecraft.controller");

router.get("/", minecraftController.getAll);
router.get("/:id", minecraftController.getById);
router.post("/", minecraftController.create);
router.put("/:id", minecraftController.update);
router.delete("/:id", minecraftController.delete);

module.exports = router;
