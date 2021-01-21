import React from 'react';
import './Styles/Auto_elegido.css';
import { Link } from 'react-router-dom';

import flecha_adelante from '../Imagenes/fleha-sig(1).png';
import flecha_atras from '../Imagenes/fleha-atras(1).png';

let imagen_grande;

function img_chica(props, i){
    let a = props.datos.fotos.length;
    switch (a) {
        case 3:
            return(
                <div className="container-imagenes">
                    <img className="imagen-chica" src={props.datos.fotos[0]}/>
                    <img className="imagen-chica" src={props.datos.fotos[1]}/>
                    <img className="imagen-chica" src={props.datos.fotos[2]}/>
                </div>
            );
        case 4:
            return(
                <div className="container-imagenes">
                    <img className="imagen-chica" src={props.datos.fotos[0]}/>
                    <img className="imagen-chica" src={props.datos.fotos[1]}/>
                    <img className="imagen-chica" src={props.datos.fotos[2]}/>
                    <img className="imagen-chica" src={props.datos.fotos[3]}/>
                </div>
            );
        case 5:
            return(
                <div className="container-imagenes">
                    <img className="imagen-chica" src={props.datos.fotos[0]}/>
                    <img className="imagen-chica" src={props.datos.fotos[1]}/> 
                    <img className="imagen-chica" src={props.datos.fotos[2]}/>
                    <img className="imagen-chica" src={props.datos.fotos[3]}/>
                    <img className="imagen-chica" src={props.datos.fotos[4]}/>
                </div>
            );
        case 6:
            return(
                <div className="container-imagenes">
                    <img className="imagen-chica" src={props.datos.fotos[0]}/>
                    <img className="imagen-chica" src={props.datos.fotos[1]}/>
                    <img className="imagen-chica" src={props.datos.fotos[2]}/>
                    <img className="imagen-chica" src={props.datos.fotos[3]}/>
                    <img className="imagen-chica" src={props.datos.fotos[4]}/>
                    <img className="imagen-chica" src={props.datos.fotos[4]}/>
                    <img className="imagen-chica" src={props.datos.fotos[5]}/>
                </div>
            );
        case 7:
            return(
                <div className="container-imagenes">
                    <img className="imagen-chica" src={props.datos.fotos[0]}/>
                    <img className="imagen-chica" src={props.datos.fotos[1]}/>
                    <img className="imagen-chica" src={props.datos.fotos[2]}/>
                    <img className="imagen-chica" src={props.datos.fotos[3]}/>
                    <img className="imagen-chica" src={props.datos.fotos[4]}/>
                    <img className="imagen-chica" src={props.datos.fotos[4]}/>
                    <img className="imagen-chica" src={props.datos.fotos[5]}/>
                    <img className="imagen-chica" src={props.datos.fotos[6]}/>
                </div>
            );
        case 8:
            return(
                <div className="container-imagenes">
                    <img className="imagen-chica" src={props.datos.fotos[0]}/>
                    <img className="imagen-chica" src={props.datos.fotos[1]}/>
                    <img className="imagen-chica" src={props.datos.fotos[2]}/>
                    <img className="imagen-chica" src={props.datos.fotos[3]}/>
                    <img className="imagen-chica" src={props.datos.fotos[4]}/>
                    <img className="imagen-chica" src={props.datos.fotos[4]}/>
                    <img className="imagen-chica" src={props.datos.fotos[5]}/>
                    <img className="imagen-chica" src={props.datos.fotos[6]}/>
                    <img className="imagen-chica" src={props.datos.fotos[7]}/>
                </div>
            );
        case 9:
            return(
                <div className="container-imagenes">
                    <img className="imagen-chica" src={props.datos.fotos[0]}/>
                    <img className="imagen-chica" src={props.datos.fotos[1]}/>
                    <img className="imagen-chica" src={props.datos.fotos[2]}/>
                    <img className="imagen-chica" src={props.datos.fotos[3]}/>
                    <img className="imagen-chica" src={props.datos.fotos[4]}/>
                    <img className="imagen-chica" src={props.datos.fotos[4]}/>
                    <img className="imagen-chica" src={props.datos.fotos[5]}/>
                    <img className="imagen-chica" src={props.datos.fotos[6]}/>
                    <img className="imagen-chica" src={props.datos.fotos[7]}/>
                    <img className="imagen-chica" src={props.datos.fotos[8]}/>
                </div>
            );
    }
}

function cambiar(props, i){
    imagen_grande = <img className="imagen-grande" src={props.datos.fotos[i]}/> 
}



export default class Auto_elegido_nuevos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          i: 0,
          
        };
    }
    anterior = () =>{
        if(this.state.i <=  0)
            this.setState({ i : this.props.datos.fotos.length-1});
        else
            this.setState({ i : this.state.i-1 });
    }

    siguiente = () =>{
        if(this.state.i+1 < this.props.datos.fotos.length)
            this.setState({ i : this.state.i+1 });
        else
            this.setState({ i : 0 });
    }
    render(){
        return(
            <div>
                <div className="container-grande">
                    <button className="boton-cambio-img atras" onClick={this.anterior} > <img className="img-flecha" src={flecha_atras} /> </button>
                    <img className="imagen-grande" src={this.props.datos.fotos[this.state.i]} alt=""/> 
                    <button className="boton-cambio-img adelante" onClick={this.siguiente} > <img className="img-flecha" src={flecha_adelante} /> </button>
                </div>
                {img_chica(this.props, this.state.i)}      
                
                <span className="precio">{this.props.datos.precio}</span>
                <div className="especificaciones">
                    <div className="contenedor">
                        <span className="titulo-autos">Modelo</span>
                        <span className="especificacion-autos">{this.props.datos.modelo}</span>
                    </div>
                    <div className="contenedor">
                        <span className="titulo-autos">Año</span>
                        <span className="especificacion-autos">{this.props.datos.ano}</span>
                    </div>
                    <div className="contenedor">
                        <span className="titulo-autos">Estado</span>
                        <span className="especificacion-autos">{this.props.datos.estado}</span>
                    </div>
                </div>  
                <div className="container-boton">
                    <Link to="Contactanos"><button className="boton">Contactanos</button></Link>
                </div> 
            </div>
        )
    }
}
