const express = require("express");
const router = express.Router();

const LoginController = require("../controller/login.controller");

router.get("/", LoginController.getAll);
router.get("/:id", LoginController.getById);
router.post("/", LoginController.create);
router.put("/:id", LoginController.update);
router.delete("/:id", LoginController.delete);

module.exports = router;
