import React from 'react';
import { Link } from 'react-router-dom'; 
import './Styles/Home.css';

export default class Home extends React.Component {
    render(){
        return(
            <div className="home">
                <div id="titulo"> <span className="texto">Qué es lo que estas buscando?</span></div>
                <Link to="/Autos_0Km"  className="submenu uno"><span className="texto">Autos 0Km</span></Link>
                <Link to="/Autos_usados" className="submenu dos"><span className="texto">Autos usados</span></Link>
                <Link to="/Tasador" className="submenu tres"><span className="texto">Tasador</span></Link>

                <div className="mapa">
                    <span className="mapa-titulo">Donde nos puedes encontrar?</span>
                </div>
            </div>
        );
    }
}