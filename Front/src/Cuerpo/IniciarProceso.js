import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"

class IniciarProceso extends React.Component{
    render () {
        return(
            <div>
                <h3>PROCESO NO INICIADO</h3>
                <br/>
                <h4>Introduzca Información General del Proceso</h4>
                <br/>
                <h4>Haga Click en Iniciar Proceso</h4>
            </div>
        );
    }
};

export default IniciarProceso