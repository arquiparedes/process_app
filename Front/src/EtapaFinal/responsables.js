import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"
import FindeProceso from "../Cuerpo/FindeProceso"

export default class Responsables extends React.Component{
    constructor (props) {
        super (props);
        this.state = {
            operarioResponsableValue : "",
            ayudanteValue : "",
            operarioSecundarioValue : "",
            liderGrupoValue : "",
            show:false
        }

    }

    operarioResponsableReg = (e) => {
        this.setState({
            operarioResponsableValue: e.target.value
        })
      }

    ayudanteReg = (e) => {
        this.setState({
            ayudanteValue: e.target.value
        })
      }

    operarioSecundarioReg = (e) => {
        this.setState({
            operarioSecundarioValue: e.target.value
        })
      } 

    liderGrupoReg = (e) => {
        this.setState({
            liderGrupoValue: e.target.value
        })
      } 

      grabarBD = async (e) => {
        e.preventDefault();
        try {
          const body = {  
            operarioResponsableValue : this.state.operarioResponsableValue,
            ayudanteValue : this.state.ayudanteValue,
            operarioSecundarioValue : this.state.operarioSecundarioValue,
            liderGrupoValue : this.state.liderGrupoValue,
            loteProceso : this.props.loteProceso
          };
          await fetch("http://"+process.env.REACT_APP_PROXY+":3001/etapafinal/responsables", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          this.handleShow()
        //   this.props.finalizarProceso()
        } catch (err) {
          console.error(err.message);
          alert("Error de Conexión con el Servidor")
        }
      };

      handleShow = () => {
        this.setState ({
        show : true
      })
      }

      handleClose = () => {
        this.setState ({
          show : false
        })
        this.props.finalizarProceso()
        }

    render() {
        return (
            <div>
            <div className="row g-3 m-2">
    
                <div className="col-sm-12 mb-3">
                    <h5>Final de Proceso</h5>
                    <h6>Responsables de Proceso</h6>
                </div>
    
                <div className="row col-sm-12">
                <div className="col-sm-6">
                        <form className="row g-3 m-2">
    
                            <div className="col-sm-12 my-1">
                                <label htmlFor="inputOperarioResponsable" className="form-label">Operario Responsable</label>
                                <input type="text" value={this.state.operarioResponsableValue} onChange={this.operarioResponsableReg} className="form-control" id="inputOperarioResponsable"/>
                            </div>
                            
                            <div className="col-sm-12 my-1">
                                <label htmlFor="inputAyudante" className="form-label">Ayudante</label>
                                <input type="text" value={this.state.ayudanteValue} onChange={this.ayudanteReg} className="form-control" id="inputAyudante"/>
                            </div>
                            
                        </form>
                    </div>
    
                    <div className="col-sm-6">
                        <form className="row g-3 m-2">
    
                            <div className="col-sm-12 my-1">
                                <label htmlFor="inputOperarioSecundario" className="form-label">Operario Secundario</label>
                                <input type="text" value={this.state.operarioSecundarioValue} onChange={this.operarioSecundarioReg} className="form-control" id="inputOperarioSecundario"/>
                            </div>
                            
                            <div className="col-sm-12 my-1">
                                <label htmlFor="inputLiderGrupo" className="form-label">Líder de Grupo</label>
                                <input type="text" value={this.state.liderGrupoValue} onChange={this.liderGrupoReg} className="form-control" id="inputLiderGrupo"/>
                            </div>
                        </form>
                    </div>
    
                    <div className="col-12 my-3">
                      <button type="submit" className="btn btn-primary" onClick={this.grabarBD}>Finalizar Proceso</button>
                    </div>
                </div>
            </div> 
          
            <div>
            <FindeProceso show = {this.state.show} handleClose={this.handleClose} loteProceso = {this.props.loteProceso} operarioPrincipal={this.state.operarioResponsableValue}/>
            </div>
          
            </div>
        )
    }


};