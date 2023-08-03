const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;

// Declarar una carpeta statica
app.use(express.static(path.join(__dirname, "../public")));

// Levantar un servidor 
app.listen(PORT, () => {
    // crea un nuevo objeto `Date`
    var today = new Date();
    // obtener la fecha y la hora
    var now = today.toLocaleString();
    console.log("Servidor Funcionando en", PORT, "Hora:", now);
});

// Declarar dirreciones
app.get("/", (req, res) => {
    res.send("Hola Mundo!");
})
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})