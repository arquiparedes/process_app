import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"

class Acondicionamiento extends React.Component {
    constructor(){
        super()
        this.state = {
            aflojarValue:0,
            tempInicialGranoValue:0,
            agitadoDelicadoValue:0,
            coccionAgitadoValue:0,
            tempFinalGranoValue:0,
            retencionGranoValue:0
          }
    }

      aflojarCuReg = (e) => {
        this.setState({
          aflojarValue: e.target.value
        })
      } 

      tempInicialGranoReg = (e) => {
        this.setState({
          tempInicialGranoValue: e.target.value
        })
      }

      agitadoDelicadoReg = (e) => {
        this.setState({
          agitadoDelicadoValue: e.target.value
        })
      }

      coccionAgitadoReg = (e) => {
        this.setState({
          coccionAgitadoValue: e.target.value
        })
      } 

      tempFinalGranoReg = (e) => {
        this.setState({
          tempFinalGranoValue: e.target.value
        })
      }

      retencionGranoReg = (e) => {
        this.setState({
          retencionGranoValue: e.target.value
        })
      }

      grabarBD = async (e) => {
        e.preventDefault();
        try {
          const body = {  
            aflojarValue : this.state.aflojarValue,
            tempInicialGranoValue : this.state.tempInicialGranoValue,
            agitadoDelicadoValue : this.state.agitadoDelicadoValue,
            coccionAgitadoValue : this.state.coccionAgitadoValue,
            tempFinalGranoValue : this.state.tempFinalGranoValue,
            retencionGranoValue : this.state.retencionGranoValue,
            loteProceso : this.props.loteProceso
          };
          await fetch("http://"+process.env.REACT_APP_PROXY+":3001/etapafinal/acondicionamiento", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          this.props.estadoSiguiente()
        } catch (err) {
          console.error(err.message);
          alert("Error de Conexión con el Servidor")
        }
      };

render() {
    return (
        <div className="row g-3 m-2">

            <div className="col-sm-12 mb-3">
                <h5>Etapa de Acondicionamiento</h5>
            </div>

            <div className="row col-sm-12">
            <div className="col-sm-6">
                    <form className="row g-3 m-2">
                                    
                        <div className="col-sm-12"><h6>Manejo</h6></div>

                        <div className="col-sm-12 my-1">
                            <label htmlFor="inputAflojarCuajada" className="form-label">Aflojar (min)</label>
                            <input type="text" onChange={this.aflojarCuReg} className="form-control" id="inputAflojarCuajada"/>
                        </div>
                        
                        <div className="col-sm-12 my-1">
                            <label htmlFor="inputTempInicialGrano" className="form-label">Temp Inicial (C)</label>
                            <input type="text" onChange={this.tempInicialGranoReg} className="form-control" id="inputTempInicialGrano"/>
                        </div>
                        
                        <div className="col-sm-12 my-1">
                            <label htmlFor="inputAgitadoDelicado" className="form-label">Agitado Muy Delicado (min)</label>
                            <input type="text" onChange={this.agitadoDelicadoReg}className="form-control" id="inputAgitadoDelicado"/>
                        </div>
                        
                    </form>
                </div>

                <div className="col-sm-6">
                    <form className="row g-3 m-2">
                                    
                        <div className="col-sm-12"><h6>Cocción</h6></div>

                        <div className="col-sm-12 my-1">
                            <label htmlFor="inputCoccionAgitado" className="form-label">Cocción con Agitado (min)</label>
                            <input type="text" onChange={this.coccionAgitadoReg} className="form-control" id="inputCoccionAgitado"/>
                        </div>
                        
                        <div className="col-sm-12 my-1">
                            <label htmlFor="inputTempFinalGrano" className="form-label">Temp Final (C)</label>
                            <input type="text" onChange={this.tempFinalGranoReg} className="form-control" id="inputTempFinalGrano"/>
                        </div>
                        
                        <div className="col-sm-12 my-1">
                            <label htmlFor="inputRetencionGrano" className="form-label">Retención (min)</label>
                            <input type="text" onChange={this.retencionGranoReg}className="form-control" id="inputRetencionGrano"/>
                        </div>
                    </form>
                </div>

                <div className="col-12 my-3">
                  <button type="submit" className="btn btn-primary" onClick={this.grabarBD}>Siguiente</button>
                </div>
            </div>
        </div> 
    )
}

};

export default Acondicionamiento;