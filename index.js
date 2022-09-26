const express = require("express");
const bodyParser = require("body-parser");
const api = require("./routes/api");

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use("/", api);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
