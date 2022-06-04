const express = require ("express");
const router = express.Router();
const { Pool } = require ("pg");
const { config }= require("../Utils/datosBD")


router.get("/datost/:lote", async (req, res) => {
    const pool = new Pool (config)
    try {
      const {lote} = req.params;
  
      const datosTina = await pool.query(
        "SELECT * FROM app_process WHERE lote = $1;",
        [lote]
      );
  
      res.json(datosTina.rows[0]);
  
    console.log("Datos extraídos");
  
    } catch (err) {
      console.error(err.message);
    }
    pool.end();
  });


module.exports = router