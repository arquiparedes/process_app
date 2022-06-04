import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"
import {Modal , Button , Table} from 'react-bootstrap'

export default class ObtenerDatos extends React.Component {
constructor(props){
    super(props);
  this.state = {
    show : false,
    datosProceso : ""
  }
}

handleShow = () => {
this.setState ({
  show : true
})
}

handleClose = () => {
  this.setState ({
    show : false
  })
  }

  obtenerDatos = async () => {
    try {
      const response = await fetch("http://"+process.env.REACT_APP_PROXY+`:3001/obtenerdatos/datost/${this.props.loteProceso}`,{
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const jsonData = await response.json();
      this.setDatos(jsonData);
      this.handleShow()
    } catch (err) {
      console.error(err.message);
    }
  };

  setDatos = (jsonD) => {
    this.setState ({
      datosProceso : jsonD,
    })
  };

    render() {
        return (
          <>
              <Button variant="primary" onClick={this.obtenerDatos}>
                Datos de Proceso
              </Button>
        
              <Modal show={this.state.show} onHide={this.handleClose} scrollable>
                <Modal.Header closeButton>
                  <Modal.Title>Resumen de Proceso</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h5>Datos Iniciales</h5>
                    <div className="container">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                        <Table bordered>
                          <tbody>
                          <tr>
                            <td>Lote:</td> <td className="negrita">{this.state.datosProceso.lote}</td>
                          </tr>
                          <tr>
                            <td>Producto:</td> <td className="negrita">{this.state.datosProceso.producto}</td>
                          </tr>
                          <tr>
                            <td>Equivalente:</td> <td className="negrita">{this.state.datosProceso.equivalente}</td>
                          </tr>
                          <tr>
                            <td>Serial:</td> <td className="negrita">{this.state.datosProceso.serial}</td>
                          </tr>
                          <tr>
                            <td>Proceso:</td> <td className="negrita">{this.state.datosProceso.numerodeproceso}</td>
                          </tr>
                          </tbody>
                        </Table>
                        </div>
                        <div className="col-1"></div>
                      </div>
                    </div>
                  <h5>Inicio de Llenado</h5>
                    <div className="container">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                        <Table bordered>
                          <tbody>
                          <tr>
                            <td>Inicio de Llenado:</td> <td className="negrita">{this.state.datosProceso.horainiciollenado}</td>
                          </tr>
                          <tr>
                            <td>Temperatura Inicial:</td> <td className="negrita">{this.state.datosProceso.templ}</td>
                          </tr>
                          <tr>
                            <td>Acidez Inicial:</td> <td className="negrita">{this.state.datosProceso.acidezinicial}</td>
                          </tr>
                          <tr>
                            <td>Inicio de Calentamiento:</td> <td className="negrita">{this.state.datosProceso.horainiciocalent}</td>
                          </tr>
                          </tbody>
                        </Table>
                        </div>
                        <div className="col-1"></div>
                      </div>
                    </div>
                  <h5>Adición de Ingredientes</h5>
                    <div className="container">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                        <Table bordered>
                          <tbody>
                          <tr>
                            <td>Cantidad:</td> <td className="negrita">{this.state.datosProceso.cantidadmp115}</td>
                          </tr>
                          <tr>
                            <td>Hora Adición:</td> <td className="negrita">{this.state.datosProceso.horaadicionmp115}</td>
                          </tr>
                          <tr>
                            <td>Nombre 1:</td> <td className="negrita">{this.state.datosProceso.nombrecu1}</td>
                          </tr>
                          <tr>
                            <td>Cantidad 1:</td> <td className="negrita">{this.state.datosProceso.cantidadcu1}</td>
                          </tr>
                          <tr>
                            <td>Nombre 2:</td> <td className="negrita">{this.state.datosProceso.nombrecu2}</td>
                          </tr>
                          <tr>
                            <td>Cantidad 2:</td> <td className="negrita">{this.state.datosProceso.cantidadcu2}</td>
                          </tr>
                          <tr>
                            <td>Hora de Adición:</td> <td className="negrita">{this.state.datosProceso.horaadicioncu}</td>
                          </tr>
                          <tr>
                            <td>Temperatura de Incubación:</td> <td className="negrita">{this.state.datosProceso.tempinc}</td>
                          </tr>
                          <tr>
                            <td>Cantidad de Ingrediente 1:</td> <td className="negrita">{this.state.datosProceso.cantidadmp036}</td>
                          </tr>
                          <tr>
                            <td>Agua para Ingrediente 1:</td> <td className="negrita">{this.state.datosProceso.cantidadaguamp036}</td>
                          </tr>
                          <tr>
                            <td>Hora Adición Ingrediente 1:</td> <td className="negrita">{this.state.datosProceso.horaadicionmp036}</td>
                          </tr>
                          <tr>
                            <td>Cantidad de Ingrediente 2:</td> <td className="negrita">{this.state.datosProceso.cantidadmp520}</td>
                          </tr>
                          <tr>
                            <td>Agua para Ingrediente 2:</td> <td className="negrita">{this.state.datosProceso.cantidadaguamp520}</td>
                          </tr>
                          <tr>
                            <td>Hora Adición Ingrediente 2:</td> <td className="negrita">{this.state.datosProceso.horaadicionmp520}</td>
                          </tr>
                          </tbody>
                        </Table>
                        </div>
                        <div className="col-1"></div>
                      </div>
                    </div>
                  <h5>Fin de Llenado</h5>
                  <div className="container">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                        <Table bordered>
                          <tbody>
                          <tr>
                            <td>Horal Final de Llenado:</td> <td className="negrita">{this.state.datosProceso.horafinalllenado}</td>
                          </tr>
                          <tr>
                            <td>Acidez Final:</td> <td className="negrita">{this.state.datosProceso.azfinal}</td>
                          </tr>
                          <tr>
                            <td>Ajuste de Temperatura:</td> <td className="negrita">{this.state.datosProceso.ajustetemp}</td>
                          </tr>
                          <tr>
                            <td>Hora Final de Ajuste de Temp.:</td> <td className="negrita">{this.state.datosProceso.horaajustetemp}</td>
                          </tr>
                          </tbody>
                        </Table>
                        </div>
                        <div className="col-1"></div>
                      </div>
                    </div>
                  <h5>Etapa de Cuajado</h5>
                  <div className="container">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                        <Table bordered>
                          <tbody>
                          <tr>
                            <td>Cantidad de Ingrediente 3 (ml):</td> <td className="negrita">{this.state.datosProceso.cantidadmp275}</td>
                          </tr>
                          <tr>
                            <td>Lote de Ingrediente 3:</td> <td className="negrita">{this.state.datosProceso.lotemp275}</td>
                          </tr>
                          <tr>
                            <td>Agua para Ingrediente 3:</td> <td className="negrita">{this.state.datosProceso.cantidadaguamp275}</td>
                          </tr>
                          <tr>
                            <td>Hora Adición Ingrediente 3:</td> <td className="negrita">{this.state.datosProceso.horaadicionmp275}</td>
                          </tr>
                          <tr>
                            <td>Primera Prueba de Corte:</td> <td className="negrita">{this.state.datosProceso.horapruebacorte1}</td>
                          </tr>
                          <tr>
                            <td>Prueba Final de Corte:</td> <td className="negrita">{this.state.datosProceso.horapruebacorte2}</td>
                          </tr>
                          <tr>
                            <td>Número de Pruebas de Corte Realiadas:</td> <td className="negrita">{this.state.datosProceso.cantidadpruebascorte}</td>
                          </tr>
                          <tr>
                            <td>Hora de Corte:</td> <td className="negrita">{this.state.datosProceso.horacorte}</td>
                          </tr>
                          <tr>
                            <td>Temp. Inicial:</td> <td className="negrita">{this.state.datosProceso.tempcuajadacorte}</td>
                          </tr>
                          </tbody>
                        </Table>
                        </div>
                        <div className="col-1"></div>
                      </div>
                    </div>
                  <h5>Acondicionamiento</h5>
                  <div className="container">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                        <Table bordered>
                          <tbody>
                          <tr>
                            <td>Temp. Inicial:</td> <td className="negrita">{this.state.datosProceso.tempinicialgranoacond}</td>
                          </tr>
                          <tr>
                            <td>Aflojado:</td> <td className="negrita">{this.state.datosProceso.aflojar}</td>
                          </tr>
                          <tr>
                            <td>Agitado Delicado:</td> <td className="negrita">{this.state.datosProceso.agitadodelicado}</td>
                          </tr>
                          <tr>
                            <td>Cocción con Agitado:</td> <td className="negrita">{this.state.datosProceso.tiempococcion}</td>
                          </tr>
                          <tr>
                            <td>Temp. Final:</td> <td className="negrita">{this.state.datosProceso.tempfinalcoccion}</td>
                          </tr>
                          <tr>
                            <td>Retención:</td> <td className="negrita">{this.state.datosProceso.tiemporetenciongrano}</td>
                          </tr>
                          </tbody>
                        </Table>
                        </div>
                        <div className="col-1"></div>
                      </div>
                    </div>
                    <h5>Descarga de Tina</h5>
                    <div className="container">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                        <Table bordered>
                          <tbody>
                          <tr>
                            <td>Inicio de Descarga:</td> <td className="negrita">{this.state.datosProceso.horainiciodescarga}</td>
                          </tr>
                          <tr>
                            <td>Fin de Descarga:</td> <td className="negrita">{this.state.datosProceso.horafinaldescarga}</td>
                          </tr>
                          </tbody>
                        </Table>
                        </div>
                        <div className="col-1"></div>
                      </div>
                    </div>
                    <h5>Responsables</h5>
                    <div className="container">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                        <Table bordered>
                          <tbody>
                          <tr>
                            <td>Operario Responsable:</td> <td className="negrita">{this.state.datosProceso.operarioresponsable}</td>
                          </tr>
                          <tr>
                            <td>Operario Secundario:</td> <td className="negrita">{this.state.datosProceso.segundooperario}</td>
                          </tr>
                          <tr>
                            <td>Ayudante:</td> <td className="negrita">{this.state.datosProceso.ayudante}</td>
                          </tr>
                          <tr>
                            <td>Líder de Grupo:</td> <td className="negrita">{this.state.datosProceso.liderdegrupo}</td>
                          </tr>
                          </tbody>
                        </Table>
                        </div>
                        <div className="col-1"></div>
                      </div>
                    </div>
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

