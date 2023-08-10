const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;

// Declarar una carpeta statica
app.use(express.static(path.join(__dirname, "../public")));

// Levantar un servidor 
app.listen(PORT, () =>
    console.log("Servidor Funcionando en", PORT)
);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})