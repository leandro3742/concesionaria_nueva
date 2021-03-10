import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Autos.css';
import Autos_solos from '../Componentes/Autos';
import Auto_elegido from '../Componentes/Auto_elegido';

import argo1 from '../Imagenes/Autos/argo/argo1.JPG';
import argo2 from '../Imagenes/Autos/argo/argo2.JPG';
import argo3 from '../Imagenes/Autos/argo/argo3.JPG';

import toro1 from '../Imagenes/Autos/toro/toro1.JPG';
import toro2 from '../Imagenes/Autos/toro/toro2.PNG';
import toro3 from '../Imagenes/Autos/toro/toro3.PNG';
import toro4 from '../Imagenes/Autos/toro/toro4.PNG';
import toro5 from '../Imagenes/Autos/toro/toro5.PNG';

import uno1 from '../Imagenes/Autos/uno/uno1.JPG';
import uno2 from '../Imagenes/Autos/uno/uno2.JPG';
import uno3 from '../Imagenes/Autos/uno/uno3.JPG';
import uno4 from '../Imagenes/Autos/uno/uno4.JPG';


class AUTO{
    constructor(modelo, ano, estado, precio, fotos, puertas, combustible, transmision, motor, direccion, airbag){
        this.precio = precio;
        this.modelo = modelo;
        this.ano = ano;
        this.estado = estado;
        this.fotos = fotos;
        this.puertas = puertas;
        this.combustible = combustible;
        this.transmision = transmision;
        this.motor = motor;
        this.direccion = direccion;
        this.airbag = airbag;
 
    }
}

const fotos_argo = [argo1, argo2, argo3];
const ARGO = new AUTO('Fiat Argo', '2019', '0 Km', 'U$S 18.800',fotos_argo, '5', 'Nafta', 'Manual', '1.3', 'Asistida', 'Si');

const fotos_toro = [toro1, toro2, toro3, toro4, toro5];
const TORO = new AUTO('Fiat Toro', '2020', '0 Km', 'U$S 15.890', fotos_toro, '2', 'Nafta', 'Manual', 'Hidraulica', '1.8', 'Si');

const fotos_uno = [uno1, uno2, uno3, uno4];
const UNO = new AUTO('Fiat Uno', '2018', '0 Km', 'U$S 12.590', fotos_uno, '4', 'Nafta', 'Manual', 'Hidraulica', '1.3', 'Si');

const autos = [ARGO, TORO, UNO];

/***************** FIN DE INFO ******************************/

const AutosUsados = () => {    
    const [mostrar_lista, setMostrar_lista] = useState(true);
    const [auto_elegido, setAuto_elegido] = useState(<div></div>);

    function cambiar_lista(a){
        setMostrar_lista(!mostrar_lista);
        setAuto_elegido(a);
    }
    if (mostrar_lista === true){
        return(
            <div className="Autos0Km">
                <Autos_solos auto={autos[0]} />
                <div className="contenedor-boton" onClick={()=> cambiar_lista(autos[0])}> <button className="boton">Ver más</button> </div>
    
                <Autos_solos auto={autos[1]}/>
                <div className="contenedor-boton" onClick={()=> cambiar_lista(autos[1]) }> <button className="boton">Ver más</button> </div>
            
                <Autos_solos auto={autos[2]}/>
                <div className="contenedor-boton" onClick={()=> cambiar_lista(autos[2]) }> <button className="boton">Ver más</button> </div>
            </div>
        )
    }
    else{
        return(
            <div>
                <Link to="Autos_0Km"onClick={()=>setMostrar_lista(true)}><div className="boton-atras">Atras</div></Link>
                <Auto_elegido value={auto_elegido}/>
            </div>
        )
    }
}
export default AutosUsados;
