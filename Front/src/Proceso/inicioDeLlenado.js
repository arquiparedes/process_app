import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"

class InicioLlenado extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          horaInicioCalentamiento:"",
          tempL1Value:0,
          azLValue:0,
          ocultarBoton:"",
          }
    }

    tempL1Reg = (e) => {
      this.setState({
        tempL1Value: e.target.value
      })
    }
  
    azLReg = (e) => {
      this.setState({
        azLValue: e.target.value
      })
    }
  
    inicioCalentamientoReg = () => {
      this.setState(() => {
        return {
          horaInicioCalentamiento:new Date().toLocaleTimeString(),
          ocultarBoton:"hidden",
        }
      })
    }

    grabarBD1 = async (e) => {
      e.preventDefault();
      try {
        const body = {  
          horaInicioCalentamiento : new Date().toLocaleTimeString(),
          loteProceso : this.props.loteProceso
        };
        await fetch("http://"+process.env.REACT_APP_PROXY+":3001/llenado/iniciollenadohora", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        this.inicioCalentamientoReg()
      } catch (err) {
        console.error(err.message);
        alert("Error de Conexión con el Servidor")
      }
    };

    grabarBD2 = async (e) => {
      e.preventDefault();
      try {
        const body = {
          tempL1Value : this.state.tempL1Value,
          azLValue : this.state.azLValue,
          loteProceso : this.props.loteProceso
        };
        await fetch("http://"+process.env.REACT_APP_PROXY+":3001/llenado/iniciollenado", {
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
      this.props.estadoSiguiente(this.state.datosInicioLlenado)
      // e.preventDefault();
    }

render() {
    return (
      <form className="row g-3 m-2">
        
      <div className="col-sm-12 mb-3">
        <h5>Etapa de Llenado</h5>
      </div>

      <div className="col-sm-6 my-1">
        <label htmlFor="inputTempLeche1" className="form-label">Temperatura de la Leche (C)</label>
        <input type="text" onChange={this.tempL1Reg} className="form-control" id="inputTempLeche1"/>
      </div>
      
      <div className="col-sm-6 my-1">
        <label htmlFor="inputAcidezLeche" className="form-label">Acidez Inicial de la Leche (D)</label>
        <input type="text" onChange={this.azLReg} className="form-control" id="inputAcidezLeche"/>
      </div>
      
      <div className="col-sm-3"></div>
      <div className="col-sm-6 my-1">
          <label htmlFor="inputInicioCalentamientoLeche" className="form-label">Hora de Inicio de Calentamiento</label>
          <p className="text-center m-0 position-relative">{this.state.horaInicioCalentamiento}</p>
          <button type="submit" onClick={this.grabarBD1} className={"btn btn-primary position-relative "+this.state.ocultarBoton} id="inputInicioCalentamientoLeche">Registrar</button>
      </div>
      <div className="col-sm-3"></div>
      <div className="col-12 my-3">
              <button type="submit" className="btn btn-primary" onClick={this.grabarBD2}>Siguiente</button>
      </div>
      </form>
    )
}

};

export default InicioLlenado;