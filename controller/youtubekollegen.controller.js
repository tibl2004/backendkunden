const pool = require("../database/index");

const YouTubeKollegenController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM youtubekollegen");
            res.json({
                data: rows
            });
        } catch (error) {
            console.error(error);
            res.json({
                status: "error"
            });
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const [rows, fields] = await pool.query("SELECT * FROM youtubekollegen WHERE id = ?", [id]);
            res.json({
                data: rows
            });
        } catch (error) {
            console.error(error);
            res.json({
                status: "error"
            });
        }
    },
    create: async (req, res) => {
        try {
            const { name, image, description, customLinkText, customLinkUrl } = req.body;
            const sql = "INSERT INTO youtubekollegen (name, image, description, customLinkText, customLinkUrl) VALUES (?, ?, ?, ?, ?)";
            const [result, fields] = await pool.query(sql, [name, image, description, customLinkText, customLinkUrl]);
            res.json({
                data: {
                    id: result.insertId,
                    name,
                    image,
                    description,
                    customLinkText,
                    customLinkUrl
                }
            });
        } catch (error) {
            console.error(error);
            res.json({
                status: "error"
            });
        }
    },
    update: async (req, res) => {
        try {
            const { name, image, description, customLinkText, customLinkUrl } = req.body;
            const { id } = req.params;
            const sql = "UPDATE youtubekollegen SET name = ?, image = ?, description = ?, customLinkText = ?, customLinkUrl = ? WHERE id = ?";
            const [result, fields] = await pool.query(sql, [name, image, description, customLinkText, customLinkUrl, id]);
            res.json({
                data: {
                    id,
                    name,
                    image,
                    description,
                    customLinkText,
                    customLinkUrl
                }
            });
        } catch (error) {
            console.error(error);
            res.json({
                status: "error"
            });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            await pool.query("DELETE FROM youtubekollegen WHERE id = ?", [id]);
            res.json({
                status: "success"
            });
        } catch (error) {
            console.error(error);
            res.json({
                status: "error"
            });
        }
    }
};

module.exports = YouTubeKollegenController;
