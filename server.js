// Node API Wireframe Implementation

const express = require("express");
const users = require("./data");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello! My Node.js server is running!");
});

app.get("/api/users", (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});