const express = require("express");
const cors = require("cors");
const app = express();

require('dotenv').config();

app.use(cors()); // CORS-Middleware aktivieren

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const kundenRouter = require('./routes/kundenwunsch.router');
const authRouter = require('./routes/auth.router');

app.use("/api/v1/kunden", kundenRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running....");
});