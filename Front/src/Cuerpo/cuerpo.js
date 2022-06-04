import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../estilos.css"
import DatosProceso from './datosProceso'
import InfoGeneral from './introInfoGeneral'
require('dotenv').config()


class Cuerpo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            registro1:false,
            registro2:false,
            registro3:false,
            registro4:false,
            lote1:"",
            lote2:"",
            lote3:"",
            lote4:"",
            procesoNuevo1:true,
            procesoNuevo2:true,
            procesoNuevo3:true,
            procesoNuevo4:true
        }
    }

registrado1 = (registrado1,loteReg1) => {
    this.setState({
        registro1:registrado1,
        lote1:loteReg1,
        procesoNuevo1:true
    })
}

registrado2 = (registrado2,loteReg2) => {
    this.setState({
        registro2:registrado2,
        lote2:loteReg2,
        procesoNuevo2:true
    })
}

registrado3 = (registrado3,loteReg3) => {
    this.setState({
        registro3:registrado3,
        lote3:loteReg3,
        procesoNuevo3:true
    })
}

registrado4 = (registrado4,loteReg4) => {
    this.setState({
        registro4:registrado4,
        lote4:loteReg4,
        procesoNuevo4:true
    })
}

nuevoProceso1 = () => {
    this.setState({
    registro1:false,
    procesoNuevo1:false
})
}

nuevoProceso2 = () => {
    this.setState({
    registro2:false,
    procesoNuevo2:false
})
}

nuevoProceso3 = () => {
    this.setState({
    registro3:false,
    procesoNuevo3:false
})
}

nuevoProceso4 = () => {
    this.setState({
    registro4:false,
    procesoNuevo4:false
})
}

render () {
    console.log(process.env.REACT_APP_PROXY);
return(
    <div>
    <section>
    <div className="pt-4" id="infogeneral">
    <h4>Es muy importante que la información aquí resgistrada sea veraz y confiable</h4>
    </div>
    </section>
    <section className="">
    <div id="contenedortinas" className="row m-0">
        <div id="tina1" className="col-lg-6 border border-dark rounded-3 mb-2">
            <h3>Proceso #1</h3>
            <div className="infotina border border-dark rounded-3 mb-2" style={{height : "280px"}}>
                <h5 className="my-2">Información General del Proceso</h5>
                <InfoGeneral numeroProceso='Proceso #1' datosRegistrados = {this.registrado1} procesoNuevo={this.state.procesoNuevo1}/>
            </div>
            <div className="datostina border border-dark rounded-3 mb-2" style={{height : "600px"}}>
                <h6 className="my-1">Datos del Proceso</h6>
                <DatosProceso procesoIniciado = {this.state.registro1} loteProceso = {this.state.lote1} nuevoProceso = {this.nuevoProceso1}/>
            </div>
        </div>

        <div id="tina2" className="col-lg-6 border border-dark rounded-3 mb-2">
            <h3>Proceso #2</h3>
            <div className="infotina border border-dark rounded-3 mb-2" style={{height : "280px"}}>
                <h5 className="my-2">Información General del Proceso</h5>
                <InfoGeneral numeroProceso='Proceso #2' datosRegistrados = {this.registrado2} procesoNuevo={this.state.procesoNuevo2}/>
            </div>
            <div className="datostina border border-dark rounded-3 mb-2" style={{height : "600px"}}>
                <h6 className="my-1">Datos del Proceso</h6>
                <DatosProceso procesoIniciado = {this.state.registro2} loteProceso = {this.state.lote2} nuevoProceso = {this.nuevoProceso2}/>
            </div>
        </div>

        <div id="tina3" className="col-lg-6 border border-dark rounded-3 mb-2">
            <h3>Proceso #3</h3>
            <div className="infotina border border-dark rounded-3 mb-2" style={{height : "280px"}}>
                <h5 className="my-2">Información General del Proceso</h5>
                <InfoGeneral numeroProceso='Proceso #3' datosRegistrados = {this.registrado3} procesoNuevo={this.state.procesoNuevo3}/>
            </div>
            <div className="datostina border border-dark rounded-3 mb-2" style={{height : "600px"}}>
                <h6 className="my-1">Datos del Proceso</h6>
                <DatosProceso procesoIniciado = {this.state.registro3} loteProceso = {this.state.lote3} nuevoProceso = {this.nuevoProceso3}/>
            </div>
        </div>
        
        <div id="tina4" className="col-lg-6 border border-dark rounded-3 mb-2">
            <h3>Proceso #4</h3>
            <div className="infotina border border-dark rounded-3 mb-2" style={{height : "280px"}}>
                <h5 className="my-2">Información General del Proceso</h5>
                <InfoGeneral numeroProceso='Proceso #4' datosRegistrados = {this.registrado4} procesoNuevo={this.state.procesoNuevo4}/>
            </div>
            <div className="datostina border border-dark rounded-3 mb-2" style={{height : "600px"}}>
                <h6 className="my-1">Datos del Proceso</h6>
                <DatosProceso procesoIniciado = {this.state.registro4} loteProceso = {this.state.lote4} nuevoProceso = {this.nuevoProceso4}/>
            </div>
        </div>
    </div>
    </section>
    </div>
);
}
};

export default Cuerpo;