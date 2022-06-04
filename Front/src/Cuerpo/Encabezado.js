import React from "react"
import logo from "../logo_bw.jpg"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"

class Encabezado extends React.Component {
  render () {
  return (
    <header className="container-fluid">
        <div className="row no-gutters">
            <div className="col-3 mx-auto" id="encabezado1">
            <img src={logo} alt="PROLACSA" id="prolacsa" className="mx-auto"/>
            </div>
            <div className="col-9" id="encabezado2_3">
                <div className="row align-middle" id="contenedor2_3">
                    <div className="col-12 pt-md-3" id="encabezado2">
                    <h2>PROCEDIMIENTO DE PRODUCCIÓN</h2>
                    </div>
                    <div className="col-12 pt-md-3" id="encabezado3">
                    <h2>{this.props.proceso}</h2>
                    </div>

                </div>
            </div>
        </div>
    </header>
  )
}
};

export default Encabezado;