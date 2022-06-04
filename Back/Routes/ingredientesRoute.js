const express = require ("express");
const router = express.Router();
const { Pool } = require ("pg");
const { config }= require("../Utils/datosBD")


// Ingredientes 1-1
router.post("/ingrediente11", async (req, res) => {
    const pool = new Pool (config)
    try {
      const horaAgregarMP115 = req.body.horaAgregarMP115;
      const grMP115Value = req.body.grMP115Value;
      const loteProceso = req.body.loteProceso;
  
      const nuevaTina = await pool.query(
          "UPDATE app_process SET horaadicionmp115 = $1 , cantidadmp115 = $2 WHERE lote = $3;",
        [horaAgregarMP115 , grMP115Value, loteProceso ]
      );
  
      res.json(nuevaTina.rows[0]);
      
    } catch (err) {
      console.error(err.message);
    }
    pool.end();
  });
  
  // Ingredientes 1-2
  router.post("/ingrediente12", async (req, res) => {
    const pool = new Pool (config)
    try {
      const horaAgregarCu = req.body.horaAgregarCu;
      const nombreCu1Value = req.body.nombreCu1Value;
      const nombreCu2Value = req.body.nombreCu2Value;
      const cantCu1Value = req.body.cantCu1Value;
      const cantCu2Value = req.body.cantCu2Value;
      const tempIncValue = req.body.tempIncValue;
      const loteProceso = req.body.loteProceso;
  
      const nuevaTina = await pool.query(
          "UPDATE app_process SET horaadicioncu = $1 , nombrecu1 = $2 , nombrecu2 = $3 , cantidadcu1 = $4 , cantidadcu2 = $5 , tempinc = $6 WHERE lote = $7;",
        [horaAgregarCu , nombreCu1Value , nombreCu2Value , cantCu1Value , cantCu2Value , tempIncValue , loteProceso]
      );
  
      res.json(nuevaTina.rows[0]);
      
    } catch (err) {
      console.error(err.message);
    }
    pool.end();
  });
  
  // Ingredientes 2-1
  router.post("/ingrediente21", async (req, res) => {
    const pool = new Pool (config)
    try {
      const horaAgregarMP036 = req.body.horaAgregarMP036;
      const aguaMP036Value = req.body.aguaMP036Value;
      const kgMP036Value = req.body.kgMP036Value;
      const loteProceso = req.body.loteProceso;
  
      const nuevaTina = await pool.query(
          "UPDATE app_process SET horaadicionmp036 = $1 , cantidadmp036 = $2 , cantidadaguamp036 = $3 WHERE lote = $4;",
        [horaAgregarMP036 , kgMP036Value , aguaMP036Value, loteProceso ]
      );
  
      res.json(nuevaTina.rows[0]);
      
    } catch (err) {
      console.error(err.message);
    }
    pool.end();
  });
  
  // Ingredientes 2-2
  router.post("/ingrediente22", async (req, res) => {
    const pool = new Pool (config)
    try {
      const horaAgregarMP520 = req.body.horaAgregarMP520;
      const aguaMP520Value = req.body.aguaMP520Value;
      const kgMP520Value = req.body.kgMP520Value;
      const loteProceso = req.body.loteProceso;
  
      const nuevaTina = await pool.query(
          "UPDATE app_process SET cantidadmp520 = $1 , cantidadaguamp520 = $2 , horaadicionmp520 = $3 WHERE lote = $4;",
        [kgMP520Value , aguaMP520Value , horaAgregarMP520 , loteProceso]
      );
  
      res.json(nuevaTina.rows[0]);
      
    } catch (err) {
      console.error(err.message);
    }
    pool.end();
  });

  module.exports = router