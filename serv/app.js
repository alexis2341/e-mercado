const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) =>{
    res.send("Servidor corriendo");
})



app.listen(port, () => {
    console.log("Escuchando a http://localhost:" + port);
})