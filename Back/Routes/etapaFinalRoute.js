const express = require ("express");
const router = express.Router();
const { Pool } = require ("pg");
const { config }= require("../Utils/datosBD")


// Acondicionamiento
router.post("/acondicionamiento", async (req, res) => {
    const pool = new Pool (config)
    try {
      const aflojarValue = req.body.aflojarValue;
      const tempInicialGranoValue = req.body.tempInicialGranoValue;
      const agitadoDelicadoValue = req.body.agitadoDelicadoValue;
      const coccionAgitadoValue = req.body.coccionAgitadoValue;
      const tempFinalGranoValue = req.body.tempFinalGranoValue;
      const retencionGranoValue = req.body.retencionGranoValue;
      const loteProceso = req.body.loteProceso;
  
      const nuevaTina = await pool.query(
          "UPDATE app_process SET aflojar = $1 , tempinicialgranoacond = $2, agitadodelicado = $3 , tiempococcion = $4 , tempfinalcoccion = $5 , tiemporetenciongrano = $6 WHERE lote = $7;",
        [aflojarValue , tempInicialGranoValue , agitadoDelicadoValue , coccionAgitadoValue , tempFinalGranoValue , retencionGranoValue , loteProceso]
      );
  
      res.json(nuevaTina.rows[0]);
      
    } catch (err) {
      console.error(err.message);
    }
    pool.end();
  });
  
// Inicio Descarga
router.post("/iniciodescarga", async (req, res) => {
    const pool = new Pool (config)
    try {
        const inicioDescarga = req.body.inicioDescarga;
        const loteProceso = req.body.loteProceso;

        const nuevaTina = await pool.query(
            "UPDATE app_process SET horainiciodescarga = $1 WHERE lote = $2;",
        [inicioDescarga , loteProceso]
        );

        res.json(nuevaTina.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
    pool.end();
});
  
  // Fin Descarga
  router.post("/findescarga", async (req, res) => {
    const pool = new Pool (config)
    try {
        const horaFinDescarga = req.body.horaFinDescarga;
        const loteProceso = req.body.loteProceso;

        const nuevaTina = await pool.query(
            "UPDATE app_process SET horafinaldescarga = $1 WHERE lote = $2;",
        [horaFinDescarga , loteProceso]
        );

        res.json(nuevaTina.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
    pool.end();
});

  // Responsables
  router.post("/responsables", async (req, res) => {
    const pool = new Pool (config)
    try {
      const operarioResponsableValue = req.body.operarioResponsableValue;
      const ayudanteValue = req.body.ayudanteValue;
      const operarioSecundarioValue = req.body.operarioSecundarioValue;
      const liderGrupoValue = req.body.liderGrupoValue;
      const loteProceso = req.body.loteProceso;
  
      const nuevaTina = await pool.query(
          "UPDATE app_process SET operarioresponsable = $1 , segundooperario = $2 , ayudante = $3 , liderdegrupo = $4 WHERE lote = $5;",
        [operarioResponsableValue , ayudanteValue , operarioSecundarioValue , liderGrupoValue , loteProceso]
      );
  
      res.json(nuevaTina.rows[0]);
      
    } catch (err) {
      console.error(err.message);
    }
    pool.end();
  });


module.exports = router