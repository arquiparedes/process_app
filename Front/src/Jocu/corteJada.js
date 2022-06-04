import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"

class CorteJada extends React.Component {
    constructor(){
        super()
        this.state = {
            horaCorte:"",
            ocultarBotonCorte:"",
            tempInicial:0
          }
    }

      tempInicialReg = (e) => {
        this.setState({
          tempInicial: e.target.value
        })
      }

      horaCorteReg = () => {
        this.setState({
          horaCorte:new Date().toLocaleTimeString(),
          ocultarBotonCorte:"hidden"
        })
      }

      grabarBD = async (e) => {
        e.preventDefault();
        try {
          const body = {  
            horaCorte : new Date().toLocaleTimeString(),
            tempInicial : this.state.tempInicial,
            loteProceso : this.props.loteProceso
          };
          await fetch("http://"+process.env.REACT_APP_PROXY+":3001/275/corte", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          this.horaCorteReg()
        } catch (err) {
          console.error(err.message);
          alert("Error de Conexión con el Servidor")
        }
      };

render() {
    return (
        <div className="row g-3 m-2">

            <div className="col-sm-12 mb-3">
                <h5>Etapa de Corte</h5>
            </div>

            <div className="col-sm-12"><h6>Realice Corte</h6></div>

            <div className="row col-sm-12 mx-0">
            <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <form className="row g-3 m-2">

                      <div className="col-sm-12 my-1">
                          <label htmlFor="inputTempInicial" className="form-label">Temperatura Inicial</label>
                          <input type="text" onChange={this.tempInicialReg} className="form-control" id="inputTempInicial"/>
                      </div>

                      <div className="col-12 my-3">
                          <p>Hora de Corte</p>
                          <p className="text-center m-0 position-relative">{this.state.horaCorte}</p>
                          <button type="submit" onClick={this.grabarBD} className={"btn btn-primary "+this.state.ocultarBotonCorte}>Corte Realizado</button>
                      </div>
                    </form>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </div> 
    )
}

};

export default CorteJada;