const pool = require("../database/index");

const LoginController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM login");
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
            const [rows, fields] = await pool.query("SELECT * FROM login WHERE id = ?", [id]);
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
            const { benutzername, passwort, vorname, nachname } = req.body;
            const sql = "INSERT INTO login (benutzername, passwort, vorname, nachname) VALUES (?, ?, ?, ?)"; // Korrektur: "login" statt "links" und korrekte Spaltennamen
            const [result, fields] = await pool.query(sql, [benutzername, passwort, vorname, nachname]); // Korrektur: Verwendung von korrekten Variablennamen
            res.status(201).json({
                data: {
                    id: result.insertId,
                    benutzername,
                    passwort,
                    vorname,
                    nachname
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
            const { benutzername, passwort, vorname, nachname } = req.body;
            const { id } = req.params;
            const sql = "UPDATE login SET benutzername = ?, passwort = ?, vorname = ?, nachname = ? WHERE id = ?"; // Korrektur: "login" statt "links" und korrekte Spaltennamen
            const [result, fields] = await pool.query(sql, [benutzername, passwort, vorname, nachname, id]); // Korrektur: Verwendung von korrekten Variablennamen
            res.json({
                data: {
                    id,
                    benutzername,
                    passwort,
                    vorname,
                    nachname
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
            await pool.query("DELETE FROM login WHERE id = ?", [id]); // Korrektur: "login" statt "links"
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

module.exports = LoginController;
