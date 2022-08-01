import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CSS/SideBar.css';
import './CSS/Navbar.css';

// Components de React-Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';


const SideBar = (props) => {


    return (

        <div>
      <>
        <Navbar className="vh-25"  expand={false}>
          <Container fluid>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              className="text-white"
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="text-white">
                <Nav className="justify-content-end flex-grow-1 pe-3 text-black">

                    <NavLink className='Body_SideBar'  to="/Dashboard" > 
                       <div className="Buton_Sidebar">Inicio</div>
                       </NavLink>

                       <NavLink className='Body_SideBar'  to="/ShowUsers" > 
                       <div className="Buton_Sidebar">Usuarios</div>
                       </NavLink>

                       <NavLink className='Body_SideBar'  to="/ShowTests" > 
                       <div className="Buton_Sidebar">Test</div>
                       </NavLink>
                    
                       <NavLink className='Body_SideBar'  to="/ShowProspect" > 
                       <div className="Buton_Sidebar">Prospectos</div>
                       </NavLink>
                    
                       <NavLink className='Body_SideBar'  to="/ShowEvaluaciones" > 
                       <div className="Buton_Sidebar">Evaluaciones</div>
                       </NavLink>
                    
                       <NavLink className='Body_SideBar'  to="/ShowResultados" > 
                       <div className="Buton_Sidebar">Resultados</div>
                       </NavLink>
                    
                        <NavLink className='Body_SideBar'  to="/" > 
                        <div className="Buton_Sidebar">Cerrar Sesión</div>
                        </NavLink>
                </Nav>
              </Offcanvas.Body>
              
            </Navbar.Offcanvas>
            
          </Container>
        </Navbar>
      </>
        </div>
    

        )
}

SideBar.propTypes = {};

SideBar.defaultProps = {};

export default SideBar
;