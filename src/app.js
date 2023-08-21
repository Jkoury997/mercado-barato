const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

// Declarar una carpeta statica
app.use(express.static(path.join(__dirname, "../public")));

// Levantar un servidor 
app.listen(port, () =>
    console.log("Servidor Funcionando en", port)
);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
})
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
})