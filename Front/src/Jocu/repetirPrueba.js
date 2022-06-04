import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"

class RepetirPrueba extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          contador:0,
          tiempoRepetirPrueba:5,
          avance:0,
          minutosRestantes:0,
          ocultarTiempo:"",
          mostrarPrueba:"hidden",
          cantidadPruebasCorte:1
          }
    }

    tick(){
      this.setState((prevState) => ({
        contador: prevState.contador + 1,
        avance: ((prevState.contador + 1)/prevState.tiempoRepetirPrueba)*100,
        minutosRestantes: (this.state.tiempoRepetirPrueba/60)-(this.state.contador/60)
      }))
      if (this.state.avance>=100){
        this.setState({
          ocultarTiempo:"d-none",
          mostrarPrueba:""
        })
        clearInterval(this.interval2)
      }
    }

    componentDidMount(){
      this.interval2 = setInterval(() => this.tick(),1000)
    }

    pruebaSatisfactoria = () => {
      this.setState({
        mostrarPrueba:"d-none"
      })
      this.props.resultadoSatisfactorio()
    }

    pruebaNoSatisfactoria = () => {
      this.setState(() => ({
        mostrarPrueba:"d-none",
        ocultarTiempo:"",
        contador:0,
        avance:0,
        minutosRestantes:0,
      }))
      console.log(this.state.pruebasintentadas);
      this.props.resultadoNoSatisfactorio()
      this.interval2 = setInterval(() => this.tick(),1000)
    }

    grabarBDPruebaSatisfactoria = async (e) => {
      e.preventDefault();
      this.setState((prevState) => ({
        cantidadPruebasCorte: prevState.cantidadPruebasCorte + 1
      }));
      try {
        const body = {  
          horaPrueba : new Date().toLocaleTimeString(),
          cantidadPruebasCorte : this.state.cantidadPruebasCorte,
          loteProceso : this.props.loteProceso
        };
        await fetch("http://"+process.env.REACT_APP_PROXY+":3001/275/pruebacorte2", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        this.pruebaSatisfactoria()
      } catch (err) {
        console.error(err.message);
        alert("Error de Conexión con el Servidor")
      }
    };

    grabarBDPruebaNoSatisfactoria = async (e) => {
      e.preventDefault();
      this.setState((prevState) => ({
        cantidadPruebasCorte: prevState.cantidadPruebasCorte + 1
      }))
      try {
        const body = {  
          horaPrueba : new Date().toLocaleTimeString(),
          cantidadPruebasCorte : this.state.cantidadPruebasCorte,
          loteProceso : this.props.loteProceso
        };
        await fetch("http://"+process.env.REACT_APP_PROXY+":3001/275/pruebacorte2", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        this.pruebaNoSatisfactoria()
      } catch (err) {
        console.error(err.message);
        alert("Error de Conexión con el Servidor")
      }
    };

render() {
    return (
      <div>

{/* Tiempo para Repetir Prueba */}
        <div className={'row g-3 m-0 '+this.state.ocultarTiempo}> 
          <div className="col-sm-12 mb-3">
                    <h5>Etapa de Solidifación</h5>
                    <p>Espere el Tiempo Establecido para Repetir la Prueba</p>
                    <p>Tiempo a esperar: {this.state.tiempoRepetirPrueba/60} min</p>
          </div>

        <div className="progress mx-4 px-0">
          <div className="progress-bar" role="progressbar"  
          aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
          style={{width:this.state.avance+'%'}}>{this.state.minutosRestantes.toFixed(1)} min</div>
        </div>

        </div>

        <div className={this.state.mostrarPrueba}>

          <div className="row g-3 m-2">

{/* Realizar prueba de corte */}
            <div className="col-sm-12 mb-3">
                <h5>Etapa de Solidifación</h5>
                <h6 className="my-2">Realice Nuevamente Prueba de Corte</h6>
                <h6 className="my-2">Fue la Prueba de Corte Satisfactoria?</h6>
            </div>

            <div className="row col-sm-12">

                <div className="col-sm-6">
                    <form className="row g-3 m-2">
                      
                        <div className="col-12 my-3">
                            <button type="submit" onClick={this.grabarBDPruebaSatisfactoria} className="btn btn-success">Satisfactoria</button>
                        </div>
                    </form>
                </div>

                <div className="col-sm-6">
                    <form className="row g-3 m-2">

                      <div className="col-12 my-3">
                          <button type="submit" onClick={this.grabarBDPruebaNoSatisfactoria} className="btn btn-danger">No Satisfactoria</button>
                      </div>
                    </form>
                </div>
            </div>
          </div>
        </div>

      </div>
    )
}

};
export default RepetirPrueba;