import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../Imagenes/logo.png';

const Nav = styled.nav`
  margin: 0; 
  width: 100%;
  height: 105px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 0;
    margin-top: 0;
    width: 150px;
    height: 112.5px;
  }
  @media only screen and (min-width: 781px){
    height: 135px;
    .logo{
      width: 200px;
      height: 150px;
    }
  }
`

const Navbar = () => {
  return (
    <Nav>  
      <Link to="/"><img src={logo} alt="" className="logo"/></Link>
      <Burger />
    </Nav>
  )
}

export default Navbar; 