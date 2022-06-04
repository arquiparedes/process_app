import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"

class FinLlenado extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            horaLlenado:"",
            horaFinalAjusteTemp:"",
            tempFinalLlenadoValue:0,
            ocultarBotonHoraLlenado:"",
            ocultarBotonhoraFinalAjusteTemp:"",
            azFinalValue:0
          }
    }

    tempFinalLlenadoReg = (e) => {
        this.setState({
          tempFinalLlenadoValue: e.target.value
        })
      }

      azFinalReg = (e) => {
        this.setState({
          azFinalValue: e.target.value
        })
      }

      horaLlenadoReg = () => {
        this.setState({
          horaLlenado:new Date().toLocaleTimeString(),
          ocultarBotonHoraLlenado:"hidden"
        })
      }

      horaFinalAjusteTempReg = () => {
        this.setState({
          horaFinalAjusteTemp:new Date().toLocaleTimeString(),
          ocultarBotonhoraFinalAjusteTemp:"hidden"
        })
      }

      grabarBD1 = async (e) => {
        e.preventDefault();
        try {
          const body = {  
            horaLlenado: new Date().toLocaleTimeString(),
            loteProceso : this.props.loteProceso
          };
          await fetch("http://"+process.env.REACT_APP_PROXY+":3001/llenado/finalllenado", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          this.horaLlenadoReg()
        } catch (err) {
          console.error(err.message);
        }
      };

      grabarBD2 = async (e) => {
        e.preventDefault();
        try {
          const body = {  
            horaFinalAjusteTemp: new Date().toLocaleTimeString(),
            loteProceso : this.props.loteProceso
          };
          await fetch("http://"+process.env.REACT_APP_PROXY+":3001/llenado/horaajustefinal", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          this.horaFinalAjusteTempReg()
        } catch (err) {
          console.error(err.message);
          alert("Error de Conexión con el Servidor")
        }
      };

      grabarBD3 = async (e) => {
        e.preventDefault();
        try {
          const body = {  
            tempFinalLlenadoValue:this.state.tempFinalLlenadoValue,
            azFinalValue:this.state.azFinalValue,
            loteProceso : this.props.loteProceso
          };
          await fetch("http://"+process.env.REACT_APP_PROXY+":3001/llenado/datosfinalllenado", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          this.estadoSiguiente()
        } catch (err) {
          console.error(err.message);
          alert("Error de Conexión con el Servidor")
        }
      };

      estadoSiguiente = () => {
        this.props.estadoSiguiente()
        // e.preventDefault();
      }

render() {
    return (
        <div className="row g-3 m-2">

            <div className="col-sm-12 mb-3">
                <h5>Etapa de Llenado</h5>
            </div>

            <div className="row col-sm-12">
                <div className="col-sm-6">
                    <form className="row g-3 m-2">
                                    
                        <div className="col-sm-12"><h6>Hora Final de Llenado</h6></div>
                        
                        <div className="col-12 my-3">
                            <p>Hora de Llenado</p>
                            <p className="text-center m-0 position-relative">{this.state.horaLlenado}</p>
                            <button type="submit" onClick={this.grabarBD1} className={"btn btn-primary "+this.state.ocultarBotonHoraLlenado}>Fin de Llenado</button>
                        </div>
                        <div className="col-sm-12 my-1">
                          <label htmlFor="inputAcidezFinal" className="form-label">Acidez Final</label>
                          <input type="text" onChange={this.azFinalReg} className="form-control" id="inputAcidezFinal"/>
                      </div>
                    </form>
                </div>

                <div className="col-sm-6">
                    <form className="row g-3 m-2">
                                    
                      <div className="col-sm-12"><h6>Ajuste de Temperatura</h6></div>

                      <div className="col-sm-12 my-1">
                          <label htmlFor="inputTempFinLlenado" className="form-label">Temperatura Final</label>
                          <input type="text" onChange={this.tempFinalLlenadoReg} className="form-control" id="inputTempFinLlenado"/>
                      </div>

                      <div className="col-12 my-3">
                          <p>Hora Final de Ajuste</p>
                          <p className="text-center m-0 position-relative">{this.state.horaFinalAjusteTemp}</p>
                          <button type="submit" onClick={this.grabarBD2} className={"btn btn-primary "+this.state.ocultarBotonhoraFinalAjusteTemp}>Registrar</button>
                      </div>
                    </form>
                </div>
                <div className="col-12 my-3">
                  <button type="submit" className="btn btn-primary" onClick={this.grabarBD3}>Siguiente</button>
                </div>
            </div>
        </div> 
    )
}

};

export default FinLlenado;