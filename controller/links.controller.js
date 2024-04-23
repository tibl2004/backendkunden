const pool = require("../database/index");

const LinksController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM links");
            res.json({
                data: rows
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: "error"
            });
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const [rows, fields] = await pool.query("SELECT * FROM links WHERE id = ?", [id]);
            res.json({
                data: rows
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: "error"
            });
        }
    },
    create: async (req, res) => {
        try {
            const { name, image, description, linkTitle, linkTitleUrl } = req.body;
            const sql = "INSERT INTO links (name, image, description, linkTitle, linkTitleUrl) VALUES (?, ?, ?, ?, ?)";
            const [result, fields] = await pool.query(sql, [name, image, description, linkTitle, linkTitleUrl]);
            res.status(201).json({
                data: {
                    id: result.insertId,
                    name,
                    image,
                    description,
                    linkTitle,
                    linkTitleUrl
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: "error"
            });
        }
    },
    update: async (req, res) => {
        try {
            const { name, image, description, linkTitle, linkTitleUrl } = req.body;
            const { id } = req.params;
            const sql = "UPDATE links SET name = ?, image = ?, description = ?, linkTitle = ?, linkTitleUrl = ? WHERE id = ?";
            const [result, fields] = await pool.query(sql, [name, image, description, linkTitle, linkTitleUrl, id]);
            res.json({
                data: {
                    id,
                    name,
                    image,
                    description,
                    linkTitle,
                    linkTitleUrl
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: "error"
            });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            await pool.query("DELETE FROM links WHERE id = ?", [id]);
            res.json({
                status: "success"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: "error"
            });
        }
    }
};

module.exports = LinksController;
