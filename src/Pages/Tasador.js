import React from 'react';
import wpp_logo from '../Imagenes/whatsapp.svg';
import mail from '../Imagenes/mail.svg';
import './Styles/Tasador.css';

export default class Tasador extends React.Component {
    render(){
        return(
            <div className="Tasador">
                <span className="titulo-tasador" >Envianos tus fotos por aqui: </span>
                <a className="link-wpp" href="https://api.whatsapp.com/send?phone=+59898361013">
                    <img src={wpp_logo} />
                    <span>098361013</span>
                </a> 
                <div className="mail">
                    <img src={mail}/>
                    <span>leandro.marrero@outlook.com</span>
                </div>
            </div>
        );
    }
}
