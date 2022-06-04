const express = require ("express");
const router = express.Router();
const { Pool } = require ("pg");
const { config }= require("../Utils/datosBD")


// Adición Cuajo
router.post("/adicion", async (req, res) => {
    const pool = new Pool (config)
    try {
      const horaAgregarMP275 = req.body.horaAgregarMP275;
      const aguaMP275Value = req.body.aguaMP275Value;
      const mlMP275Value = req.body.mlMP275Value;
      const loteMP275Value = req.body.loteMP275Value;
      const loteProceso = req.body.loteProceso;
  
      const nuevaTina = await pool.query(
          "UPDATE app_process SET horaadicionmp275 = $1 , cantidadmp275 = $2 , lotemp275 = $3 , cantidadaguamp275 = $4 WHERE lote = $5;",
        [horaAgregarMP275 , mlMP275Value , loteMP275Value , aguaMP275Value , loteProceso]
      );
  
      res.json(nuevaTina.rows[0]);
      
    } catch (err) {
      console.error(err.message);
    }
    pool.end();
});
  
// Primera prueba de corte
router.post("/pruebacorte1", async (req, res) => {
    const pool = new Pool (config)
    try {
        const horaPrueba1 = req.body.horaPrueba;
        const loteProceso = req.body.loteProceso;

        const nuevaTina = await pool.query(
            "UPDATE app_process SET horapruebacorte1 = $1 WHERE lote = $2;",
        [horaPrueba1 , loteProceso]
        );

        res.json(nuevaTina.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
    pool.end();
});

// Segunda prueba de corte
router.post("/pruebacorte2", async (req, res) => {
    const pool = new Pool (config)
    try {
        const horaPrueba2 = req.body.horaPrueba;
        const cantidadPruebasCorte = req.body.cantidadPruebasCorte
        const loteProceso = req.body.loteProceso;

        const nuevaTina = await pool.query(
            "UPDATE app_process SET horapruebacorte2 = $1 , cantidadpruebascorte = $2 WHERE lote = $3;",
        [horaPrueba2 , cantidadPruebasCorte , loteProceso]
        );

        res.json(nuevaTina.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
    pool.end();
});

// Corte de Cuajada
router.post("/corte", async (req, res) => {
    const pool = new Pool (config)
    try {
        const horaCorte = req.body.horaCorte;
        const tempInicial = req.body.tempInicial;
        const loteProceso = req.body.loteProceso;

        const nuevaTina = await pool.query(
            "UPDATE app_process SET horacorte = $1 , tempcorte = $2 WHERE lote = $3;",
        [horaCorte , tempInicial , loteProceso]
        );

        res.json(nuevaTina.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
    pool.end();
});

// Medida tina
router.post("/medida", async (req, res) => {
    const pool = new Pool (config)
    try {
      const medida = req.body.medida;
      const loteProceso = req.body.loteProceso;
  
      const nuevaTina = await pool.query(
          "UPDATE app_process SET medida = $1 WHERE lote = $2;",
        [medida , loteProceso]
      );
        console.log("Se graba medida de tina")
      res.json(nuevaTina.rows[0]);
      
    } catch (err) {
      console.error(err.message);
    }
    pool.end();
  });

module.exports = router