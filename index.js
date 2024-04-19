const express = require("express");
const cors = require("cors");
const app = express();

require('dotenv').config();

app.use(cors()); // CORS-Middleware aktivieren

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const spielermeldenRouter = require('./routes/spielermelden.router');
const bugmeldenRouter = require('./routes/bugmeldens.router');
const trauungenRouter = require('./routes/trauungen.router');
const authRouter = require('./routes/auth.router');

app.use("/api/v1/spielermelden", spielermeldenRouter);
app.use("/api/v1/bugmelden", bugmeldenRouter);
app.use("/api/v1/trauungen", trauungenRouter);
app.use("/api/v1/auth", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running....");
});