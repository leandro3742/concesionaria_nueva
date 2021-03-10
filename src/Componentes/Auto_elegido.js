import React, { useState } from 'react';
import './Styles/Auto_elegido.css';
import { Link } from 'react-router-dom';

import flecha_adelante from '../Imagenes/fleha-sig(1).png';
import flecha_atras from '../Imagenes/fleha-atras(1).png';

const Auto_elegido = (props) =>{
    const datos = props.value;
    const fotos = datos.fotos;

    const[foto, setFoto] = useState(fotos[0]);
    const[i, setI] = useState(0);    
    
    function siguiente(iterador){
        if(iterador < fotos.length-1){
            setI(i + 1);
            setFoto(fotos[i]);
        }
        else
            setI(0);
            setFoto(fotos[i]);
    }

    function anterior(iterador){
        if(iterador === 0){
            setI(fotos.length-1);
            setFoto(fotos[i]);
        }
        else
            setI(i-1);
            setFoto(fotos[i]);
    }

    function cambiar_img(foto_elegida){
        setFoto(foto_elegida);
    }

    return(
    <div>
        <div className="container-grande">
            <button className="boton-cambio-img atras" onClick={()=> anterior(i)} > <img className="img-flecha" src={flecha_atras} alt=""/> </button>
            <img className="imagen-grande" src={foto} alt=""/> 
            <button className="boton-cambio-img adelante" onClick={()=> siguiente(i)} > <img className="img-flecha" src={flecha_adelante} alt="" /> </button>
        </div>

        <div className="container-imagenes">
        {fotos.map(fotos =>
            <img onClick={()=>cambiar_img(fotos)}className="imagen-chica" src={fotos} alt=""/>       
        )}
        </div>  
        <span className="precio">{datos.precio}</span>
        <div className="especificaciones">
                <div className="contenedor">
                    <span className="titulo-autos">Modelo</span>
                    <span className="especificacion-autos">{datos.modelo}</span>
                </div>
                <div className="contenedor">
                    <span className="titulo-autos">Año</span>
                    <span className="especificacion-autos">{datos.ano}</span>
                </div>
                <div className="contenedor">
                    <span className="titulo-autos">Estado</span>
                    <span className="especificacion-autos">{datos.estado}</span>
                </div>
                
                <div className="contenedor">
                    <span className="titulo-autos">Tipo de combustible</span>
                    <span className="especificacion-autos">{datos.combustible}</span>
                </div>
                <div className="contenedor">
                    <span className="titulo-autos">Puertas</span>
                    <span className="especificacion-autos">{datos.puertas}</span>
                </div>
                <div className="contenedor">
                    <span className="titulo-autos">Transmision</span>
                    <span className="especificacion-autos">{datos.transmision}</span>
                </div>
                <div className="contenedor">
                    <span className="titulo-autos">Motor</span>
                    <span className="especificacion-autos">{datos.motor}</span>
                </div>
                <div className="contenedor">
                    <span className="titulo-autos">Direccion</span>
                    <span className="especificacion-autos">{datos.direccion}</span>
                </div>
                <div className="contenedor">
                    <span className="titulo-autos">Airbag</span>
                    <span className="especificacion-autos">{datos.airbag}</span>
                </div>
        </div>
        <div className="container-boton">
            <Link to="Contactanos"><button className="boton">Contactanos</button></Link>
        </div> 
    </div>
    )
}
export default Auto_elegido;
