const express = require ("express");
// const { Pool } = require ("pg");
const cors = require("cors");
const app = express();
require('dotenv').config()
// const { config }= require("./Utils/datosBD")

app.use(cors());
app.use(express.json());


app.listen(3001, () => {
    console.log("Servidor corriendo en 3001");
});


// Enviar App al Iniciar Servidor
app.use(express.static("build"))
app.get("/", function(req,res) {
    res.set("Content-Type","text/html");
    res.sendFile(__dirname + "/build/index.html")
})



// Datos iniciales
const datosInicialesRoute = require("./Routes/datosInicialesRoute")
app.use("/datosiniciales", datosInicialesRoute)


// Rutas de llenado
const llenadoRoute = require("./Routes/llenadoRoute")
app.use("/llenado", llenadoRoute)


// Rutas de ingredientes
const ingredientesRoute = require("./Routes/ingredientesRoute")
app.use("/ingredientes", ingredientesRoute)


// Rutas de cuajo
const cuajoRoute = require("./Routes/275Route")
app.use("/275", cuajoRoute)


// Rutas de etapa final
const etapaFinalRoute = require("./Routes/etapaFinalRoute")
app.use("/etapafinal", etapaFinalRoute)


// Rutas de obtener datos
const obtenerDatosRoute = require("./Routes/obtenerDatosRoute")
app.use("/obtenerdatos", obtenerDatosRoute)