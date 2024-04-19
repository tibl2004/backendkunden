const pool = require("../database/index");

const spielerMeldenController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM spielermelden");
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
            const [rows, fields] = await pool.query("SELECT * FROM spielermelden WHERE id = ?", [id]);
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
            const { spielername, benutzername } = req.body;
            const sql = "INSERT INTO spielermelden (spielername, benutzername) VALUES (?, ?)";
            const [rows, fields] = await pool.query(sql, [spielername, benutzername]);
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
            const { spielername, benutzername } = req.body;
            const { id } = req.params;
            const sql = "UPDATE spielermelden SET spielername = ?, benutzername = ? WHERE id = ?";
            const [rows, fields] = await pool.query(sql, [spielername, benutzername, id]);
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
            const [rows, fields] = await pool.query("DELETE FROM spielermelden WHERE id = ?", [id]);
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

module.exports = spielerMeldenController;
