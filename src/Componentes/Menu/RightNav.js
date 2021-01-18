import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Ul = styled.ul`
  z-index: 2;
  list-style: none;
  font-family: 'PT Serif', serif;
  display: flex;
  flex-flow: row nowrap;
  .link {
    padding: 18px 10px;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    opacity: 85%;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 85px;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    .link {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
      <Ul open={open}>
        <Link to="/" className="link">Inicio</Link>
        <Link to="/Nosotros" className="link">Nosotros</Link>
        <Link to="/Autos_0Km" className="link">Autos 0Km </Link>
        <Link to="/Autos_usados" className="link">Autos Usados</Link>
        <Link to="/Contactanos" className="link">Contactanos</Link>
      </Ul>
  )
}

export default RightNav