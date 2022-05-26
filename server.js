/* eslint-disable no-console */
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
port = 9090;

app.use(express.static(process.cwd() + "/dist/"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
