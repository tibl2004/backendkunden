const pool = require("../database/index");

const bugMeldenController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM bugmelden");
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
            const [rows, fields] = await pool.query("SELECT * FROM bugmelden WHERE id = ?", [id]);
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
            const { bug, benutzername } = req.body;
            const sql = "INSERT INTO bugmelden (bug, benutzername) VALUES (?, ?)";
            const [rows, fields] = await pool.query(sql, [bug, benutzername]);
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
    update: async (req, res) => {
        try {
            const { bug, benutzername } = req.body;
            const { id } = req.params;
            const sql = "UPDATE bugmelden SET bug = ?, benutzername = ? WHERE id = ?";
            const [rows, fields] = await pool.query(sql, [bug, benutzername, id]);
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
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const [rows, fields] = await pool.query("DELETE FROM bugmelden WHERE id = ?", [id]);
            res.json({
                data: rows
            });
        } catch (error) {
            console.error(error);
            res.json({
                status: "error"
            });
        }
    }
};

module.exports = bugMeldenController;
