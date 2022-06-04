const express = require ("express");
const router = express.Router();
const { Pool } = require ("pg");
const { config }= require("../Utils/datosBD")


// Hora de inicio de calentamiento
router.post("/iniciollenadohora", async (req, res) => {
    const pool = new Pool (config)
    try {
        const inicioCalentamiento = req.body.horaInicioCalentamiento;
        const loteProceso = req.body.loteProceso;

        const nuevaTina = await pool.query(
            "UPDATE app_process SET horainiciocalent = $1 WHERE lote = $2;",
            [inicioCalentamiento , loteProceso]
        );

    res.json(nuevaTina.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
    pool.end();
    });

// Inicio Llenado
router.post("/iniciollenado", async (req, res) => {
    const pool = new Pool (config)
    try {
        const tempL = req.body.tempL1Value;
        const azL = req.body.azLValue;
        const loteProceso = req.body.loteProceso;

        const nuevaTina = await pool.query(
            "UPDATE app_process SET templ = $1 , acidezinicial = $2 WHERE lote = $3;",
        [tempL , azL , loteProceso]
        );

        res.json(nuevaTina.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
    pool.end();
});

// Llenado Fin
router.post("/finalllenado", async (req, res) => {
    const pool = new Pool (config)
    try {
        const horaLlenado = req.body.horaLlenado;
        const loteProceso = req.body.loteProceso;

        const nuevaTina = await pool.query(
            "UPDATE app_process SET horafinalllenado = $1  WHERE lote = $2;",
        [horaLlenado , loteProceso]
        );

        res.json(nuevaTina.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
    pool.end();
});

// Hora Ajuste Temp
router.post("/horaajustefinal", async (req, res) => {
    const pool = new Pool (config)
    try {
        const horaFinalAjusteTemp = req.body.horaFinalAjusteTemp;
        const loteProceso = req.body.loteProceso;

        const nuevaTina = await pool.query(
            "UPDATE app_process SET horaajustetemp = $1 WHERE lote = $2;",
            [horaFinalAjusteTemp , loteProceso]
        );

        res.json(nuevaTina.rows[0]);
    
    } catch (err) {
        console.error(err.message);
    }
    pool.end();
});

// Temp Final
router.post("/datosfinalllenado", async (req, res) => {
    const pool = new Pool (config)
    try {
        const tempFinalLlenadoValue = req.body.tempFinalLlenadoValue;
        const azFinalValue = req.body.azFinalValue;
        const loteProceso = req.body.loteProceso;

        const nuevaTina = await pool.query(
            "UPDATE app_process SET ajustetemp = $1 , azfinal = $2 WHERE lote = $3;",
        [tempFinalLlenadoValue , azFinalValue , loteProceso]
        );

        res.json(nuevaTina.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
    pool.end();
});

module.exports = router