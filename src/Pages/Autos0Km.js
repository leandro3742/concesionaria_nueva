import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Autos.css';
import Autos_solos from '../Componentes/Autos';
import Auto_elegido_nuevos from '../Componentes/Auto_elegido_nuevos';

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
    constructor(modelo, ano, estado, precio, fotos){
        this.precio = precio;
        this.modelo = modelo;
        this.ano = ano;
        this.estado = estado;
        this.fotos = fotos;
    }
}

export const fotos_argo = [argo1, argo2, argo3];
const ARGO = new AUTO('Fiat Argo', '2019', '0 Km', 'U$S 18.800', fotos_argo);

export const fotos_toro = [toro1, toro2, toro3, toro4, toro5];
const TORO = new AUTO('Fiat Toro', '2020', '0 Km', 'U$S 15.890', fotos_toro);

export const fotos_uno = [uno1, uno2, uno3, uno4];
const UNO = new AUTO('Fiat Uno', '2018', '0 Km', 'U$S 12.590', fotos_uno);

const autos = [ARGO, TORO, UNO];

/***************** FIN DE INFO ******************************/

let auxiliar; //Aca guardo Lista de autos tal cual empieza asi cuando quiero regresar a la pagina anterior pueda hacerlo
let Lista_de_autos = //Contiene la lista completa de todos los autos usados
            <div className="Autos0Km">
                
                <div className="">
                    <Autos_solos auto={autos[0]} />
                    <div className="contenedor-boton" onClick={()=> ir(0) }>
                        <Link to="Autos_0Km"><button className="boton">Ver más</button></Link>
                    </div>
                </div>

                <div className="">
                    <Autos_solos auto={autos[1]}/>
                    <div className="contenedor-boton" onClick={()=> ir(1) }>
                        <Link to="Autos_0Km"><button className="boton">Ver más</button></Link>
                    </div>
                </div>
                
                <div className="">
                    <Autos_solos auto={autos[2]}/>
                    <div className="contenedor-boton" onClick={()=> ir(2) }>
                        <Link to="Autos_0Km"><button className="boton">Ver más</button></Link>
                    </div>
                </div>

                <div className="">
                    <Autos_solos auto={autos[0]} />
                    <div className="contenedor-boton" onClick={()=> ir(0) }>
                        <Link to="Autos_0Km"><button className="boton">Ver más</button></Link>
                    </div>
                </div>

                <div className="">
                    <Autos_solos auto={autos[1]}/>
                    <div className="contenedor-boton" onClick={()=> ir(1) }>
                        <Link to="Autos_0Km"><button className="boton">Ver más</button></Link>
                    </div>
                </div>
                
                <div className="">
                    <Autos_solos auto={autos[2]}/>
                    <div className="contenedor-boton" onClick={()=> ir(2) }>
                        <Link to="Autos_0Km"><button className="boton">Ver más</button></Link>
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
        <Link to="Autos_0Km"onClick={()=>cambiar()}><div className="boton-atras">Atras</div></Link>
        <Auto_elegido_nuevos datos={autos[info]}/>
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
