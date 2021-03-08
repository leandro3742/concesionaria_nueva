import React from 'react';

import "./Styles/Layout.css";
import logo_wpp from '../Imagenes/logo-wpp.png';
import NavBar from './Menu/Navbar';
import Footer from './Footer';

function Layout(props) {

  return (
    <div className="layout">
      <NavBar />
      {props.children}
      <a href="https://api.whatsapp.com/send?phone=59898361013" className="wpp">
        <img className="logo_wpp" src={logo_wpp} style={{position: 'fixed', top: '82%', right: 0}} /> {/* Hace que aparezca el logo de wpp de forma fija*/}
      </a>
      <Footer />
    </div>
  );
}

export default Layout;