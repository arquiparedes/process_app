const express = require ("express");
const router = express.Router();
const { Pool } = require ("pg");
const { config }= require("../Utils/datosBD")


// Datos Iniciales de Tinas
router.post("/datosiniciales", async (req, res) => {
    const pool = new Pool (config)
        try {
        const lote = req.body.loteValue;
        const producto = req.body.productoValue;
        const equivalente = req.body.equivalenteValue;
        const serial = req.body.serialValue;
        const horaInicio = req.body.horaDeInicio;
        const numeroDeProceso = req.body.numeroDeProceso

        const nuevaTina = await pool.query(
            "INSERT INTO app_process ( lote, producto, equivalente, serial, horainiciollenado, numerodeproceso) VALUES ( $1 , $2 , $3 , $4 , $5 , $6 );",
            [lote , producto , equivalente , serial, horaInicio , numeroDeProceso]
        );

        res.json(nuevaTina.rows[0]);
        
        } catch (err) {
        console.error(err.message);
        }
        pool.end();
});


module.exports = router