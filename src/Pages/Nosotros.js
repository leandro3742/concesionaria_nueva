import React from 'react';
import './Styles/Nosotros.css';

export default class Nosotros extends React.Component {
    render(){
        return(
            <div className="Nosotros">
                <span className="texto-nosotros">
                    Cuenta con una destacada trayectoria de más de 35 años de experiencia como concesionario oficial de la marca.
                    Nuestro amplio showroom se encuentra ubicado en la esquina de Paraguay y Colombia. Allí encontrará toda la línea
                    de vehículos Fiat 0km a su disposición.<br /><br />
                    Nuestro calificado equipo le brindará una excelente atención tanto en
                    materia de ventas como de postventa. Para su mayor comodidad y satisfacción contamos con un completo servicio
                    oficial en el cual realizar el correcto mantenimiento de su Fiat.
                </span>
            </div>
        );
    }
}