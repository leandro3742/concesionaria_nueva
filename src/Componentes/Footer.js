import React from 'react';
import './Styles/Footer.css';
import facebook from '../Imagenes/facebook.svg';
import instagram from '../Imagenes/instagram.png';
import twitter from '../Imagenes/twitter.svg';
export default class Footer extends React.Component {
    render(){
        return(
        <div className="Footer">
            <div className="titulo-redes">
               <span className="seguinos">Seguinos en nuestras redes sociales</span>
            </div>
            <div className="redes">
                <div className="facebook">
                    <img src={facebook} alt=""/>
                    <span className="nombre-facebook">LM designer</span>
                </div>
                <div className="twitter">
                    <img src={twitter} alt=""/>
                    <span className="nombre-twitter">LM designer</span>
                </div>
                <div className="instagram">
                    <img src={instagram} alt=""/>
                    <span className="nombre-instagram">Lm.designer</span>
                </div>
            </div>
            
            <div className="contactos">
                <div className="cotacto">
                    <span className="titulo-contacto">Contáctanos</span>
                </div>
                <div className="mail">
                    <span className="contacto-titulo">Mail:</span> <span className="contacto-complemento"> leandro.marrero@outlook.com</span>    
                </div>
                <div className="numero">
                    <span className="contacto-titulo">WhatsApp:</span> <span className="contacto-complemento"> 098361013</span>    
                </div>
                <div className="telefono">
                    <span className="contacto-titulo">Tel:</span> <span className="contacto-complemento"> 4330 3890</span>    
                </div>
            </div>
        </div>
        
        );
    }
}