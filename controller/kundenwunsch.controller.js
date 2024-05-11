const pool = require("../database/index");

const KundenWunschController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM kundenwunsch");
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
            const [rows, fields] = await pool.query("SELECT * FROM kundenwunsch WHERE id = ?", [id]);
            if (rows.length === 0) {
                res.status(404).json({
                    status: "error",
                    message: "Kundenwunsch nicht gefunden"
                });
            } else {
                res.json({
                    data: rows[0]
                });
            }
        } catch (error) {
            console.error(error);
            res.json({
                status: "error"
            });
        }
    },
    create: async (req, res) => {
        try {
            const { artikel, marke, maxPreis, vorname, nachname, adresse, plz, ort, anrede, mobil, bildLink } = req.body;
            const sql = "INSERT INTO kundenwunsch (artikel, marke, maxPreis, vorname, nachname, adresse, plz, ort, anrede, mobil, bildLink) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            const [result, fields] = await pool.query(sql, [artikel, marke, maxPreis, vorname, nachname, adresse, plz, ort, anrede, mobil, bildLink]);
            res.json({
                data: {
                    id: result.insertId,
                    artikel,
                    marke,
                    maxPreis,
                    vorname,
                    nachname,
                    adresse,
                    plz,
                    ort,
                    anrede,
                    mobil,
                    bildLink
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
            const { id } = req.params;
            const { artikel, marke, maxPreis, vorname, nachname, adresse, plz, ort, anrede, mobil, bildLink } = req.body;
            const sql = "UPDATE kundenwunsch SET artikel = ?, marke = ?, maxPreis = ?, vorname = ?, nachname = ?, adresse = ?, plz = ?, ort = ?, anrede = ?, mobil = ?, bildLink = ? WHERE id = ?";
            const [result, fields] = await pool.query(sql, [artikel, marke, maxPreis, vorname, nachname, adresse, plz, ort, anrede, mobil, bildLink, id]);
            if (result.affectedRows === 0) {
                res.status(404).json({
                    status: "error",
                    message: "Kundenwunsch nicht gefunden"
                });
            } else {
                res.json({
                    status: "success",
                    message: "Kundenwunsch aktualisiert"
                });
            }
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
            const result = await pool.query("DELETE FROM kundenwunsch WHERE id = ?", [id]);
            if (result.affectedRows === 0) {
                res.status(404).json({
                    status: "error",
                    message: "Kundenwunsch nicht gefunden"
                });
            } else {
                res.json({
                    status: "success",
                    message: "Kundenwunsch gelöscht"
                });
            }
        } catch (error) {
            console.error(error);
            res.json({
                status: "error"
            });
        }
    }
};

module.exports = KundenWunschController;
