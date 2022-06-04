import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"

class Ingredientes1 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            horaAgregarCu:"",
            horaAgregarMP115:"",
            grMP115Value:0,
            nombreCu1Value:"",
            nombreCu2Value:"",
            cantCu1Value:0,
            cantCu2Value:0,
            tempIncValue:0,
            ocultarBotonMP115:"",
            ocultarBotonCu:""
          }
    }

    grMP115Reg = (e) => {
        this.setState({
          grMP115Value: e.target.value
        })
      }

    nombreCu1Reg = (e) => {
        this.setState({
          nombreCu1Value: e.target.value
        })
      } 

      nombreCu2Reg = (e) => {
        this.setState({
          nombreCu2Value: e.target.value
        })
      } 

      cantCu1Reg = (e) => {
        this.setState({
          cantCu1Value: e.target.value
        })
      }

      cantCu2Reg = (e) => {
        this.setState({
          cantCu2Value: e.target.value
        })
      }

      tempIncReg = (e) => {
        this.setState({
          tempIncValue: e.target.value
        })
      }

      agregarCuReg = () => {
        this.setState({
          horaAgregarCu:new Date().toLocaleTimeString(),
          ocultarBotonCu:"hidden"
        })
      }

      agregarMP115Reg = () => {
        this.setState({
          horaAgregarMP115:new Date().toLocaleTimeString(),
          ocultarBotonMP115:"hidden"
        })
      }

      grabarBD1 = async (e) => {
        e.preventDefault();
        try {
          const body = {  
            horaAgregarMP115: new Date().toLocaleTimeString(),
            grMP115Value:this.state.grMP115Value,
            loteProceso : this.props.loteProceso
          };
          await fetch("http://"+process.env.REACT_APP_PROXY+":3001/ingredientes/ingrediente11", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          this.agregarMP115Reg()
        } catch (err) {
          console.error(err.message);
          alert("Error de Conexión con el Servidor")
        }
      };

      grabarBD2 = async (e) => {
        e.preventDefault();
        try {
          const body = {  
            horaAgregarCu: new Date().toLocaleTimeString(),
            nombreCu1Value:this.state.nombreCu1Value,
            nombreCu2Value:this.state.nombreCu2Value,
            cantCu1Value:this.state.cantCu1Value,
            cantCu2Value:this.state.cantCu2Value,
            tempIncValue:this.state.tempIncValue,
            loteProceso : this.props.loteProceso
          };
          await fetch("http://"+process.env.REACT_APP_PROXY+":3001/ingredientes/ingrediente12", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          this.agregarCuReg()
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
                                    
                        <div className="col-sm-12"><h6>Adición de Ingrediente</h6></div>

                        <div className="col-sm-12 my-1">
                            <label htmlFor="inputGrMP115" className="form-label">Cantidad (gr)</label>
                            <input type="text" onChange={this.grMP115Reg} className="form-control" id="inputGrMP115"/>
                        </div>
                        
                        <div className="col-12 my-3">
                            <p>Hora de Adición</p>
                            <p className="text-center m-0 position-relative">{this.state.horaAgregarMP115}</p>
                            <button type="submit" onClick={this.grabarBD1} className={"btn btn-primary "+this.state.ocultarBotonMP115}>Agregar Ingrediente</button>
                        </div>
                    </form>
                </div>

                <div className="col-sm-6">
                    <form className="row g-3 m-2">
                                    
                        <div className="col-sm-12"><h6>Adición de Ingrediente</h6></div>

                        <div className="col-sm-6 my-1">
                            <label htmlFor="inputNombreCultivo" className="form-label">Nombre 1</label>
                            <input type="text" value={this.state.nombreCu1Value} onChange={this.nombreCu1Reg} className="form-control" id="inputNombreCultivo"/>
                        </div>

                        <div className="col-sm-6 my-1">
                            <label htmlFor="inputNombreCultivo" className="form-label">Nombre 2</label>
                            <input type="text" value={this.state.nombreCu2Value} onChange={this.nombreCu2Reg} className="form-control" id="inputNombreCultivo"/>
                        </div>
                        
                        <div className="col-sm-6 my-1">
                            <label htmlFor="inputCantidadCultivo" className="form-label">Cantidad 1 (U)</label>
                            <input type="text" onChange={this.cantCu1Reg} className="form-control" id="inputCantidadCultivo"/>
                        </div>

                        <div className="col-sm-6 my-1">
                            <label htmlFor="inputCantidadCultivo" className="form-label">Cantidad 2 (U)</label>
                            <input type="text" onChange={this.cantCu2Reg} className="form-control" id="inputCantidadCultivo"/>
                        </div>
                        
                        <div className="col-sm-12 my-1">
                            <label htmlFor="inputTempIncubacion" className="form-label">Temperatura (C)</label>
                            <input type="text" onChange={this.tempIncReg}className="form-control" id="inputTempIncubacion"/>
                        </div>
                        
                        <div className="col-12 my-3">
                            <p>Hora de Adición</p>
                            <p className="text-center m-0 position-relative">{this.state.horaAgregarCu}</p>
                            <button type="submit" onClick={this.grabarBD2} className={"btn btn-primary "+this.state.ocultarBotonCu}>Agregar</button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div> 
    )
}

};

export default Ingredientes1;