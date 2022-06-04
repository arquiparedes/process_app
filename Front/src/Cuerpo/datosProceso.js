import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"
import Ingredientes1 from "../Ingredientes/ingredientes1"
import Ingredientes2 from "../Ingredientes/ingredientes2"
import FinLlenado from "../Proceso/finDeLlenado"
import TiempoJado from "../Jocu/tiempoJado"
import JoAdicion from "../Jocu/JoAdicion"
import RepetirPrueba from "../Jocu/repetirPrueba"
import CorteJada from "../Jocu/corteJada"
import Acondicionamiento from "../EtapaFinal/acondicionamiento"
import Descarga from "../EtapaFinal/descarga"
import InicioLlenado from "../Proceso/inicioDeLlenado"
import IniciarProceso from "../Cuerpo/IniciarProceso"
import Responsables from "../EtapaFinal/responsables"
import ObtenerDatos from "../Cuerpo/ObtenerDatos"

class datosProceso extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clickSiguiente:0,
    }

  }

  estadoSiguiente = () => {
    this.setState((prevState) => ({
      clickSiguiente: prevState.clickSiguiente + 1,
    }))
  }

  resultadoNoSatisfactorio = () => {
this.setState({
  clickSiguiente:6
})
  }

  resultadoSatisfactorio = () => {
    this.setState({
      clickSiguiente:7
    })
      }

  finalizarProceso = () => {
    this.setState({
      clickSiguiente:0
    })
    this.props.nuevoProceso()
  }

  render () {
    if (this.state.clickSiguiente === 0)
      return(
        <div>
        {this.props.procesoIniciado ? 
        <div>
          <InicioLlenado estadoSiguiente = {this.estadoSiguiente} loteProceso = {this.props.loteProceso}/>
          <div className="col-12 my-3">
              <ObtenerDatos loteProceso = {this.props.loteProceso}/>
          </div>
        </div> : <IniciarProceso/>}
        </div>
      );
    if (this.state.clickSiguiente === 1)
      return(
        <div>
          <Ingredientes1 loteProceso = {this.props.loteProceso}/>
          <div className="col-12 my-3">
              <button type="submit" className="btn btn-primary" onClick={this.estadoSiguiente}>Siguiente</button>
          </div>
          <div className="col-12 my-3">
              <ObtenerDatos loteProceso = {this.props.loteProceso}/>
          </div>
        </div>
      );
    if (this.state.clickSiguiente === 2)
      return(
        <div>
          <Ingredientes2 loteProceso = {this.props.loteProceso}/>
          <div className="col-12 my-3">
              <button type="submit" className="btn btn-primary" onClick={this.estadoSiguiente}>Siguiente</button>
          </div>
          <div className="col-12 my-3">
              <ObtenerDatos loteProceso = {this.props.loteProceso}/>
          </div>
        </div>
      );
    if (this.state.clickSiguiente === 3)
      return(
        <div>
          <FinLlenado estadoSiguiente = {this.estadoSiguiente} loteProceso = {this.props.loteProceso}/>
          <div className="col-12 my-3">
              <ObtenerDatos loteProceso = {this.props.loteProceso}/>
          </div>
        </div>
    );
    if (this.state.clickSiguiente === 4)
      return(
        <div>
          <JoAdicion loteProceso = {this.props.loteProceso}/>
          <div className="col-12 my-3">
              <button type="submit" className="btn btn-primary" onClick={this.estadoSiguiente}>Siguiente</button>
          </div>
          <div className="col-12 my-3">
              <ObtenerDatos loteProceso = {this.props.loteProceso}/>
          </div>
        </div>
    );
    if (this.state.clickSiguiente === 5)
      return(
        <div>
          <TiempoJado resultadoNoSatisfactorio = {this.resultadoNoSatisfactorio} resultadoSatisfactorio = {this.resultadoSatisfactorio} loteProceso = {this.props.loteProceso}/>
          <div className="col-12 my-3">
              <ObtenerDatos loteProceso = {this.props.loteProceso}/>
          </div>
        </div>
    );
    if (this.state.clickSiguiente === 6)
      return(
        <div>
          <RepetirPrueba resultadoNoSatisfactorio = {this.resultadoNoSatisfactorio} resultadoSatisfactorio = {this.resultadoSatisfactorio} loteProceso = {this.props.loteProceso}/>
          <div className="col-12 my-3">
              <ObtenerDatos loteProceso = {this.props.loteProceso}/>
          </div>
        </div>
    );
    if (this.state.clickSiguiente === 7)
      return(
        <div>
          <CorteJada loteProceso = {this.props.loteProceso}/>
          <div className="col-12 my-3">
              <button type="submit" className="btn btn-primary" onClick={this.estadoSiguiente}>Siguiente</button>
          </div>
          <div className="col-12 my-3">
              <ObtenerDatos loteProceso = {this.props.loteProceso}/>
          </div>
        </div>
    );
    if (this.state.clickSiguiente === 8)
      return(
        <div>
          <Acondicionamiento estadoSiguiente = {this.estadoSiguiente} loteProceso = {this.props.loteProceso}/>
          <div className="col-12 my-3">
              <ObtenerDatos loteProceso = {this.props.loteProceso}/>
          </div>
        </div>
    );
    if (this.state.clickSiguiente === 9)
      return(
        <div>
          <Descarga loteProceso = {this.props.loteProceso}/>
          <div className="col-12 my-3">
              <button type="submit" className="btn btn-primary" onClick={this.estadoSiguiente}>Siguiente</button>
          </div>
          <div className="col-12 my-3">
              <ObtenerDatos loteProceso = {this.props.loteProceso}/>
          </div>
        </div>
    );
    if (this.state.clickSiguiente === 10)
      return(
        <div>
          <Responsables finalizarProceso = {this.finalizarProceso} loteProceso = {this.props.loteProceso}/>
          <div className="col-12 my-3">
              <ObtenerDatos loteProceso = {this.props.loteProceso}/>
          </div>
        </div>
    );
    }
    };
  
  
  
    export default datosProceso;