const express = require("express");
const router = express.Router();

const YouTubeKollegenController = require("../controller/youtubekollegen.controller");

router.get("/", YouTubeKollegenController.getAll);
router.get("/:id", YouTubeKollegenController.getById);
router.post("/", YouTubeKollegenController.create);
router.put("/:id", YouTubeKollegenController.update);
router.delete("/:id", YouTubeKollegenController.delete);

module.exports = router;
