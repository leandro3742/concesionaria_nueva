import React from 'react';
import emailjs from 'emailjs-com';
import './Styles/Contactanos.css';
import swal from 'sweetalert';
import { useState } from 'react/cjs/react.development';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_3hvrpn7', 'template_8fdxbhh', e.target, 'user_aVcs1Bw08xidonpvb7rrl')
      .then((result) => {
        swal({
            title : "El mensaje fue enviado con exito" ,
            buttons: "Cerrar",
            icon : "success"
        }) 
      }, (error) => {
        swal({
            title : "Ops..." ,
            text : "Algo salio mal, intentalalo de nuevo" ,
            buttons: "Cerrar",
            icon : "error"
        }) 
          console.log(error.text);
      });
  }

  // let comprar = "no_elegido";
  // let vender = "no_elegido";
  const [comprar, setComprar] = useState("no_elegido");
  const [vender, setVender] = useState("no_elegido");
  
  function elegir(elegido){
    if (elegido === "comprar"){
      setComprar("elegido");
      setVender("no_elegido");
    }
    else if(elegido === "vender"){
      setComprar("no_elegido");
      setVender("elegido");
    }

  }
  return (
    // <div>
      <form className="formulario" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <h3 className="pasos_a_seguir">1. Ingrese sus datos</h3>
        <div className="container-form nombre">
          <label className="etiquetas primera">Nombre</label>
          <input className="input" type="text" name="nombre_cliente" />
        </div>
        
        <div className="container-form nombre">
          <label className="etiquetas primera">Apellido</label>
          <input className="input" type="text" name="nombre_cliente" />
        </div>

        <div className="container-form numero">
          <label className="etiquetas">Numero de contacto</label>
          <input className="input" type="number" name="numero_cliente" />
        </div>
        
        <h3 className="pasos_a_seguir">2. Elija una de las opciones</h3>
        <div className="elegir_si_vender_o_comprar">
          <h4 className={comprar} onClick={()=> elegir("comprar")}>Quiero comprar</h4>
          <h4 className={vender} onClick={()=> elegir("vender")}>Quiero vender</h4>
        </div>
        
        <h3 className="pasos_a_seguir">3. Si desea ingrese una pregunta </h3>
        <div className="container-form descripcion">
          <textarea className="descripcion" type="text" name="mensaje"  />
        </div>
        
        <input className="submit" type="submit" value="Enviar consulta" />
      </form>
    // </div>
  );
}