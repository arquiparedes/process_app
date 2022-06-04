import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"

class Ingredientes2 extends React.Component {
    constructor(){
        super()
        this.state = {
            horaAgregarMP036:"",
            aguaMP036Value:0,
            horaAgregarMP520:"",
            aguaMP520Value:0,
            kgMP036Value:0,
            kgMP520Value:0,
            ocultarBotonMP036:"",
            ocultarBotonMP520:""
          }
    }

    kgMP036Reg = (e) => {
        this.setState({
          kgMP036Value: e.target.value
        })
      }

    aguaMP036Reg = (e) => {
        this.setState({
          aguaMP036Value: e.target.value
        })
      } 

      kgMP520Reg = (e) => {
        this.setState({
          kgMP520Value: e.target.value
        })
      }

      aguaMP520Reg = (e) => {
        this.setState({
          aguaMP520Value: e.target.value
        })
      }

      agregarMP036Reg = () => {
        this.setState({
          horaAgregarMP036:new Date().toLocaleTimeString(),
          ocultarBotonMP036:"hidden"
        })
      }

      agregarMP520Reg = () => {
        this.setState({
          horaAgregarMP520:new Date().toLocaleTimeString(),
          ocultarBotonMP520:"hidden"
        })
      }

      grabarBD1 = async (e) => {
        e.preventDefault();
        try {
          const body = {  
            horaAgregarMP036: new Date().toLocaleTimeString(),
            aguaMP036Value:this.state.aguaMP036Value,
            kgMP036Value:this.state.kgMP036Value,
            loteProceso : this.props.loteProceso
          };
          await fetch("http://"+process.env.REACT_APP_PROXY+":3001/ingredientes/ingrediente21", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          this.agregarMP036Reg()
        } catch (err) {
          console.error(err.message);
          alert("Error de Conexión con el Servidor")
        }
      };

      grabarBD2 = async (e) => {
        e.preventDefault();
        try {
          const body = {  
            horaAgregarMP520: new Date().toLocaleTimeString(),
            aguaMP520Value:this.state.aguaMP520Value,
            kgMP520Value:this.state.kgMP520Value,
            loteProceso : this.props.loteProceso
          };
          await fetch("http://"+process.env.REACT_APP_PROXY+":3001/ingredientes/ingrediente22", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          this.agregarMP520Reg()
        } catch (err) {
          console.error(err.message);
          alert("Error de Conexión con el Servidor")
        }
      };

render() {
    return (
        <div className="row g-3 m-2">

            <div className="col-sm-12 mb-3">
                <h5>Etapa de Llenado</h5>
            </div>

            <div className="row col-sm-12">
                <div className="col-sm-6">
                    <form className="row g-3 m-2">
                                    
                        <div className="col-sm-12"><h6>Adición de Ingrediente 2</h6></div>

                        <div className="col-sm-12 my-1">
                            <label htmlFor="inputKgMP036" className="form-label">Cantidad (Kg)</label>
                            <input type="text" onChange={this.kgMP036Reg} className="form-control" id="inputKgMP036"/>
                        </div>

                        <div className="col-sm-12 my-1">
                            <label htmlFor="inpuAguaMP036" className="form-label">Cantidad de Agua (Lts)</label>
                            <input type="text" onChange={this.aguaMP036Reg} className="form-control" id="inputAguaMP036"/>
                        </div>
                        
                        <div className="col-12 my-3">
                            <p>Hora de Adición</p>
                            <p className="text-center m-0 position-relative">{this.state.horaAgregarMP036}</p>
                            <button type="submit" onClick={this.grabarBD1} className={"btn btn-primary "+this.state.ocultarBotonMP036}>Agregar Ingrediente 2</button>
                        </div>
                    </form>
                </div>

                <div className="col-sm-6">
                    <form className="row g-3 m-2">
                                    
                      <div className="col-sm-12"><h6>Adición de Ingrediente 3</h6></div>

                      <div className="col-sm-12 my-1">
                          <label htmlFor="inputKgMP520" className="form-label">Cantidad (Kg)</label>
                          <input type="text" onChange={this.kgMP520Reg} className="form-control" id="inputKgMP036"/>
                      </div>

                      <div className="col-sm-12 my-1">
                          <label htmlFor="inpuAguaMP520" className="form-label">Cantidad de Agua (Lts)</label>
                          <input type="text" onChange={this.aguaMP520Reg} className="form-control" id="inputAguaMP036"/>
                      </div>

                      <div className="col-12 my-3">
                          <p>Hora de Adición</p>
                          <p className="text-center m-0 position-relative">{this.state.horaAgregarMP520}</p>
                          <button type="submit" onClick={this.grabarBD2} className={"btn btn-primary "+this.state.ocultarBotonMP520}>Agregar Ingrediente 3</button>
                      </div>
                    </form>
                </div>
            </div>
        </div> 
    )
}

};

export default Ingredientes2;