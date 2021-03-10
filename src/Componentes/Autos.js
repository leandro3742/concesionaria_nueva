import React from 'react';
import '../Pages/Styles/Autos.css';

function Autos_solos(props){
    return(
    
        <div className="auto" >
            <img className="imagen" src={props.auto.fotos[0]} alt='' />
            <span className="precio">{props.auto.precio}</span>
            <div className="especificaciones">
                <div className="contenedor">
                    <span className="titulo-autos">Modelo</span>
                    <span className="especificacion-autos">{props.auto.modelo}</span>
                </div>
                <div className="contenedor">
                    <span className="titulo-autos">Año</span>
                    <span className="especificacion-autos">{props.auto.ano}</span>
                </div>
                <div className="contenedor">
                    <span className="titulo-autos">Estado</span>
                    <span className="especificacion-autos">{props.auto.estado}</span>
                </div>
            </div>

        </div>
    )
}
export default Autos_solos;