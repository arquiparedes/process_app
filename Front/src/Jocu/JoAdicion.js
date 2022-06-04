import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"

class JoAdicion extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            horaAgregarMP275:"",
            aguaMP275Value:0,
            mlMP275Value:0,
            loteMP275Value:"",
          }
    }

    mlMP275Reg = (e) => {
        this.setState({
          mlMP275Value: e.target.value
        })
      }

    aguaMP275Reg = (e) => {
        this.setState({
          aguaMP275Value: e.target.value
        })
      }

      loteMP275Reg = (e) => {
        this.setState({
          loteMP275Value: e.target.value
        })
      }

      agregarMP275Reg = () => {
        this.setState({
          horaAgregarMP275:new Date().toLocaleTimeString(),
          ocultarBotonMP275:"hidden",
        })
      }

      grabarBD = async (e) => {
        e.preventDefault();
        try {
          const body = {  
            horaAgregarMP275 : new Date().toLocaleTimeString(),
            aguaMP275Value : this.state.aguaMP275Value,
            mlMP275Value : this.state.mlMP275Value,
            loteMP275Value : this.state.loteMP275Value,
            loteProceso : this.props.loteProceso
          };
          await fetch("http://"+process.env.REACT_APP_PROXY+":3001/275/adicion", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          this.agregarMP275Reg()
        } catch (err) {
          console.error(err.message);
          alert("Error de Conexión con el Servidor")
        }
      };

render() {
    return (
        <div className="row g-3 m-2">

            <div className="col-sm-12 mb-3">
                <h5>Etapa de Solidificación</h5>
            </div>

            <div className="col-sm-12"><h6>Adición de Ingrediente 3</h6></div>

            <div className="row col-sm-12">
                <div className="col-sm-6">
                    <form className="row g-3 m-2">
                                    
                        <div className="col-sm-12 my-1">
                            <label htmlFor="inputmlMP275" className="form-label">Cantidad (ml)</label>
                            <input type="text" onChange={this.mlMP275Reg} className="form-control" id="inputmlMP275"/>
                        </div>

                        <div className="col-sm-12 my-1">
                            <label htmlFor="inpuAguaMP275" className="form-label">Cantidad de Agua (Lts)</label>
                            <input type="text" onChange={this.aguaMP275Reg} className="form-control" id="inputAguaMP275"/>
                        </div>
                        
                    </form>
                </div>

                <div className="col-sm-6">
                    <form className="row g-3 m-2">

                      <div className="col-sm-12 my-1">
                          <label htmlFor="inputLoteMP275" className="form-label">Lote Ingrediente 3</label>
                          <input type="text" value={this.state.loteMP275Value} onChange={this.loteMP275Reg} className="form-control" id="inputLoteMP275"/>
                      </div>

                      <div className="col-12 my-3">
                          <p>Hora de Adición</p>
                          <p className="text-center m-0 position-relative">{this.state.horaAgregarMP275}</p>
                          <button type="submit" onClick={this.grabarBD} className={"btn btn-primary "+this.state.ocultarBotonMP275}>Agregar Ingrediente 3</button>
                      </div>
                    </form>
                </div>
            </div>
        </div> 
    )
}

};

export default JoAdicion;