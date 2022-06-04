import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"

class Descarga extends React.Component {
    constructor(){
        super()
        this.state = {
            inicioDescarga:"",
            horaFinDescarga:"",
            ocultarBotonInicioDescarga:"",
            ocultarBotonFinDescarga:""
          }
    }

      finDescargaReg = () => {
        this.setState({
          horaFinDescarga:new Date().toLocaleTimeString(),
          ocultarBotonFinDescarga:"hidden"
        })
      }

      inicioDescargaReg = () => {
        this.setState({
          inicioDescarga:new Date().toLocaleTimeString(),
          ocultarBotonInicioDescarga:"hidden"
        })
      }

      grabarBD1 = async (e) => {
        e.preventDefault();
        try {
          const body = {  
            inicioDescarga : new Date().toLocaleTimeString(),
            loteProceso : this.props.loteProceso
          };
          await fetch("http://"+process.env.REACT_APP_PROXY+":3001/etapafinal/iniciodescarga", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          this.inicioDescargaReg()
        } catch (err) {
          console.error(err.message);
          alert("Error de Conexión con el Servidor")
        }
      };

      grabarBD2 = async (e) => {
        e.preventDefault();
        try {
          const body = {  
            horaFinDescarga : new Date().toLocaleTimeString(),
            loteProceso : this.props.loteProceso
          };
          await fetch("http://"+process.env.REACT_APP_PROXY+":3001/etapafinal/findescarga", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          this.finDescargaReg()
        } catch (err) {
          console.error(err.message);
          alert("Error de Conexión con el Servidor")
        }
      };

render() {
    return (
        <div className="row g-3 m-2">

            <div className="col-sm-12 mb-3">
                <h5>Etapa de Descarga</h5>
            </div>

            <div className="row col-sm-12">
                <div className="col-sm-6">
                    <form className="row g-3 m-2">
                            
                        <div className="col-12 my-3">
                            <p className="text-center m-0 position-relative">{this.state.inicioDescarga}</p>
                            <button type="submit" onClick={this.grabarBD1} className={"btn btn-primary "+this.state.ocultarBotonInicioDescarga}>Inicio de Descarga</button>
                        </div>
                    </form>
                </div>

                <div className="col-sm-6">
                    <form className="row g-3 m-2">
                              
                        <div className="col-12 my-3">
                            <p className="text-center m-0 position-relative">{this.state.horaFinDescarga}</p>
                            <button type="submit" onClick={this.grabarBD2} className={"btn btn-primary "+this.state.ocultarBotonFinDescarga}>Fin de Descarga</button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div> 
    )
}

};

export default Descarga;