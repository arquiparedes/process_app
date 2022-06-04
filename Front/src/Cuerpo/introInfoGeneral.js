import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"

class InfoGeneral extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datosRegistrados:false,
      horaDeInicio:"",
      loteValue:"",
      productoValue:"",
      equivalenteValue:0,
      serialValue:""
    }

  }
  
  cambiarEstado = () => {
    this.setState({
      datosRegistrados:true,
      horaDeInicio : new Date().toLocaleTimeString(),
      loteValue:"",
      productoValue:"",
      equivalenteValue:"",
      serialValue:""
    })
    alert("El " + this.props.numeroProceso + " ha sido iniciado!");
  }

  loteReg = (e) => {
    this.setState({
      loteValue: e.target.value,
    })
  }

  productoReg = (e) => {
    this.setState({
      productoValue: e.target.value
    })
  }

  equivalenteReg = (e) => {
    this.setState({
      equivalenteValue: e.target.value
    })
  }

  serialReg = (e) => {
    this.setState({
      serialValue: e.target.value
    })
  };

  grabarBD = async (e) => {
    e.preventDefault();
    try {
      const body = {  
        loteValue : this.state.loteValue,
        productoValue : this.state.productoValue,
        equivalenteValue : this.state.equivalenteValue,
        serialValue : this.state.serialValue,
        horaDeInicio : new Date().toLocaleTimeString(),
        numeroDeProceso : this.props.numeroProceso
      };
      await fetch("http://"+process.env.REACT_APP_PROXY+":3001/datosiniciales/datosiniciales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      this.obtenerDatos()
      this.props.datosRegistrados(true,this.state.loteValue)
    } catch (err) {
      console.error(err.message);
      alert("No se pudo conectar con el servidor")
    }
  };

  obtenerDatos = async () => {
    try {
      const response = await fetch("http://"+process.env.REACT_APP_PROXY+`:3001/obtenerdatos/datost/${this.state.loteValue}`,{
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const jsonData = await response.json();
      this.setDatos(jsonData);
      this.cambiarEstado()
    } catch (err) {
      console.error(err.message);
    }
  };

  setDatos = (jsonD) => {
    this.setState ({
      datosProceso : jsonD,
    })
  };

    render () {
      if (this.state.datosRegistrados && this.props.procesoNuevo)
        return(
          <div className="row">
            <div className="col-6 my-4"> Lote: {this.state.datosProceso.lote} </div>
            <div className="col-6 my-4"> Producto: {this.state.datosProceso.producto} </div>
            <div className="col-6 my-4"> Equivalente (L): {this.state.datosProceso.equivalente} </div>
            <div className="col-6 my-4"> Número Serial: {this.state.datosProceso.serial} </div>
            <div className="col-12 my-4"> Hora de Inicio: {this.state.datosProceso.horainiciollenado}</div>
          </div>
        );

    return (
        <form className="row g-3 m-2">
        <div className="col-sm-6 my-1">
          <label htmlFor="inputLote" className="form-label">Lote</label>
          <input type="text" value={this.state.loteValue} onChange={this.loteReg} className="form-control" id="inputLote"/>
        </div>
        <div className="col-sm-6 my-1">
          <label htmlFor="inputProducto" className="form-label">Producto</label>
          <select className="form-control" id="inputProducto" value= {this.state.productoValue} onChange= {this.productoReg}>
          <option value="1">Selecciones Producto</option>
          <option value="Mozzarella">Producto 1</option>
          <option value="Fresco">Producto 2</option>
          <option value="Doble Crema">Producto 3</option>
          <option value="Cheddar Blanco">Producto 4</option>
          </select>
        </div>
        <div className="col-sm-6 my-1">
            <label htmlFor="inputEquivalente" className="form-label">Equivalente (L)</label>
            <input type="text" onChange={this.equivalenteReg}className="form-control" id="inputEquivalente"/>
          </div>
          <div className="col-sm-6 my-1">
            <label htmlFor="inputSerial" className="form-label">Número Serial</label>
            <input type="text" value={this.state.serialValue} onChange={this.serialReg}className="form-control" id="inputSerial"/>
          </div>
        <div className="col-12 my-3">
            <button type="submit" className="btn btn-primary" onClick={this.grabarBD}>Iniciar Proceso</button>
          </div>
        </form>
    )
  }
  };

  export default InfoGeneral;

