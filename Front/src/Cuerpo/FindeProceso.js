import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"
import {Modal , Button} from 'react-bootstrap'

export default class FindeProceso extends React.Component {
constructor(props){
    super(props);
  this.state = {
    show : true,
    datosProceso : ""
  }
}

// handleShow = () => {
//   this.setState ({
//   show : true
// })
// }

handleClose = () => {
  this.props.handleClose()
  }

  obtenerDatos = async () => {
    console.log(this.props.loteProceso);
    try {
      const response = await fetch("http://"+process.env.REACT_APP_PROXY+`:3001/obtenerdatos/datost/${this.props.loteProceso}`,{
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const jsonData = await response.json();
      console.log(jsonData);
      this.setDatos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  setDatos = (jsonD) => {
    this.setState ({
      datosProceso : jsonD,
    })
    console.log(this.state.datosProceso.lote);
  };

  componentDidMount = () => {
    this.obtenerDatos()
  }

    render() {
        return (
          <>
              <Modal show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Proceso</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>PROCESO FINALIZADO</h4>
                  <br/>
                  <h6>{this.props.operarioPrincipal} el Proceso {this.state.datosProceso.numerodetina}</h6>
                  <h6>con Lote {this.state.datosProceso.lote} ha Finalizado con Éxito</h6>
                  <hr/>
                  <p>Proceda con la limpieza</p>
                  <p>Deje todo preparado para el siguiente proceso</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
              </>
        );
}
};

