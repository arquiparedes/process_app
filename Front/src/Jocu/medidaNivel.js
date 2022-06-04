import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"

export default class MedidaNivel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            medidaValue : 0,
            ocultarBoton : ""
        }
    }

    medidaReg = (e) => {
        this.setState({
            medidaValue : e.target.value
          })
    }

    grabarBD = async (e) => {
        e.preventDefault();
        console.log("entro"+this.props.loteProceso)
        try {
          const body = {
            medida : this.state.medidaValue,
            loteProceso : this.props.loteProceso
          };
          await fetch("http://"+process.env.REACT_APP_PROXY+":3001/275/medida", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          this.setState({
            ocultarBoton:"d-none"
          })
        } catch (err) {
          console.error(err.message);
        }
      };

    render(){
        return(
            <>
            <form className="row g-3 m-2">
                                    
                <div className="col-sm-12"><h6>Medida Final</h6></div>
              
                    <div className="col-sm-12 my-1">
                        <label htmlFor="inputmedidafinal" className="form-label">Medida en Pulg</label>
                        <input type="text" onChange={this.medidaReg} className="form-control" id="inputmedidafinal"/>
                    </div>
              
                    <div className="col-12 my-3">
                        <button type="submit" onClick={this.grabarBD} className={"btn btn-primary "+this.state.ocultarBoton}>Registrar</button>
                    </div>
            </form>
            </>
        )
    }
};