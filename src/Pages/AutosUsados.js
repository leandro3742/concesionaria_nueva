import React from 'react';
import './Styles/Autos.css';

import { Link } from 'react-router-dom';

import Autos_solos from '../Componentes/Autos';
import Auto_elegido_usados from '../Componentes/Auto_elegido_usados';

import uno1 from '../Imagenes/Autos/usados/uno/uno1.JPG';
import uno2 from '../Imagenes/Autos/usados/uno/uno2.JPG';
import uno3 from '../Imagenes/Autos/usados/uno/uno3.JPG';
import uno4 from '../Imagenes/Autos/usados/uno/uno4.JPG';

import palio1 from '../Imagenes/Autos/usados/palio/palio1.JPG';
import palio2 from '../Imagenes/Autos/usados/palio/palio2.JPG';
import palio3 from '../Imagenes/Autos/usados/palio/palio3.JPG';
import palio4 from '../Imagenes/Autos/usados/palio/palio4.JPG';

class AUTO{
    constructor(modelo, ano, estado, precio, fotos){
        this.precio = precio;
        this.modelo = modelo;
        this.ano = ano;
        this.estado = estado;
        this.fotos = fotos;
    }   
}
export const fotos_uno = [uno1, uno2, uno3, uno4];
const UNO = new AUTO('Fiat Uno', '1985', '1500 Km', 'U$S 5.850', fotos_uno );

export const fotos_palio = [palio1, palio2, palio3, palio4];
const PALIO = new AUTO('Fiat Palio', '2010', '305960 Km', 'U$S 6.750', fotos_palio);

export const autos = [UNO, PALIO];

/****************** FIN DE LA INFO ****************************/

let auxiliar; //Aca guardo Lista de autos tal cual empieza asi cuando quiero regresar a la pagina anterior pueda hacerlo
let Lista_de_autos = //Contiene la lista completa de todos los autos usados
            <div className="Autos0Km">

                <div className="">
                    <Autos_solos auto={autos[0]} />
                    <div className="contenedor-boton" onClick={()=> ir(0) }>
                        <Link to="Autos_usados"><button className="boton">Ver más</button></Link>
                    </div>
                </div>
                
                <div className="">
                    <Autos_solos auto={autos[1]} />
                    <div className="contenedor-boton" onClick={()=> ir(1) }>
                        <Link to="Autos_usados"><button className="boton">Ver más</button></Link>
                    </div>
                </div>

                <div className="">
                    <Autos_solos auto={autos[1]} />
                    <div className="contenedor-boton" onClick={()=> ir(1) }>
                        <Link to="Autos_usados"><button className="boton">Ver más</button></Link>
                    </div>
                </div>

            </div>


function cambiar(){ //Sirve para volver a mostraar toda la lista de autos 
    Lista_de_autos = auxiliar;
}

function ir(info){
    auxiliar = Lista_de_autos;  //Respaldo la lista de autos para poder volver 
    Lista_de_autos = 

    <div>
        <Link to="Autos_usados"onClick={()=>cambiar()}><div className="boton-atras">Atras</div></Link>
        <Auto_elegido_usados datos={autos[info]}/>
    </div>
    
}

export default class AutosUsados extends React.Component {
    
    render(){
        return(
            <div>
                {Lista_de_autos}
            </div>
        );
    }
}
