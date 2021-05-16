import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Styles/Contactanos.css';
import swal from 'sweetalert';

export default function Contactanos() {

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
      <form className="formulario" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        
        <h3 style={{ fontSize: "21px" }} >1. Ingrese sus datos</h3>
        <div>  
          <label className="etiquetas primera">Nombre</label>
          <input className="form-control" type="text" placeholder="Nombre" name="nombre_cliente" readonly></input>
        </div>
        
        <div className="mt-3">
          <label className="etiquetas primera">Apellido</label>
          <input className="form-control" type="text" placeholder="Apellido" name="apellido_cliente" readonly></input>
        </div>

        <div className="mt-3"> 
          <label className="etiquetas">Numero de contacto</label>
          <input className="form-control" type="text" placeholder="09. ... ..." name="numero_cliente" readonly></input>
        </div>
        
        <h3 style={{ fontSize: "21px" }} className="mt-4">2. Elija una de las opciones</h3>
        <div className="d-flex justify-content-center">
          <h4 style={{ fontSize: "15px" }} className={comprar} onClick={()=> elegir("comprar")}>Quiero comprar</h4>
          <h4 style={{ fontSize: "15px" }} className={vender} onClick={()=> elegir("vender")}>Quiero vender</h4>
        </div>
        
        <h3 style={{ fontSize: "21px" }} className="mt-4">3. Si desea ingrese una pregunta </h3>
        <div className="container-form descripcion">
          <textarea className="form-control" type="text" name="mensaje"/>
        </div>
        
        <input className="submit" type="submit" value="Enviar consulta" />
      </form>
  );
}