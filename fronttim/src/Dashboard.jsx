import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import './CSS/Home.css';
import './CSS/Navbar.css'
import './CSS/style.css'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {usePopupState, bindTrigger,bindMenu,} from 'material-ui-popup-state/hooks'
import SideBar from "./SideBar";


const Dashboard = () => {

  const popupState = usePopupState({ variant: 'popover' })

  const navigate = useNavigate()

    const [nombre, setname] = useState();
  
  //Información del inicio de sesión

    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
  
    useEffect(() => {
      if (token) {
        axios
          .get("http://localhost:5000/users/login", {
            headers: {
              token: token,
            },
           
          })
          .then(({ data }) => setname(data.name))
          .catch((error) => console.error(error));
         
      }

    }, [token]);

    //Cerrar sesión

    const Logout = async (e) => {

        axios
          .get("http://localhost:5000/users/logoutUser", {
            headers: {
              token: token,
            }})
      localStorage.removeItem("token");
      localStorage.clear();
       navigate('/')
      }

      const config = async (e) => {
       navigate('/editC')
      }
     

    return(
       <>    
       <div className="Home-body">
   
        <div class="Home-header">
      <div>
        <SideBar/>
      </div>
        <div class="uao-logo"></div>
        <div class="Home-titleFont">PORTAL DE MERCADEO</div> 

      <div>
      <Button variant="contained" class="Home_conf" {...bindTrigger(popupState)}>
      <i class="fa fa-gear" for="btn-menu"></i>
      </Button>
      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={config} ><i class="fa fa-gear"></i>Editar usuario</MenuItem>
        <MenuItem onClick={Logout}> <i class="fa fa-sign-out"></i> Cerrar sesión</MenuItem>
      </Menu>
       </div>
        <div className= "Home_nombre" value={nombre}>Hola {name} !</div>
        </div>

        
       <Navbar>
        <Container>
            <Navbar.Brand as={Link} to="/" ></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              
            <Nav className="Home-dashboard">

          <div class="Home-dashboardFont">
            Dashboard
          </div>

          <div class="Home-user">
            <div class="Home-userImage"></div>
            <div class="Home-userFont">
            <Nav.Link as={Link} to="/ShowUsers" class="Home-userFont">Usuarios</Nav.Link>
            </div>
          </div>

          <div class="Home-colegio">
              <div class="Home-testImage"></div>
              <div class="Home-colegioFont">
              <Nav.Link as={Link} to="/ShowTests">Test</Nav.Link>
              </div>
          </div>

          <div class="Home-programa">
              <div class="Home-prospectosImage">
              </div>
              <div class="Home-programaFont">
              <Nav.Link as={Link} to="/ShowProspect">Prospectos</Nav.Link>
              </div>
           </div>

          <div class="Home-preguntas">
              <div class="Home-PreguntasImage">
              </div>
              <div class="Home-preguntasFont">
              <Nav.Link as={Link} to="/ShowEvaluaciones">Evaluaciones</Nav.Link>
              </div>
          </div>

          <div class="Home-test">
              <div class="Home-colegioImage">
              </div>
              <div class="Home-testFont">
              <Nav.Link as={Link} to="/ShowResultados">Resultados</Nav.Link>
              </div>
           </div>
   
                
                                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
</div>
       </> 

       
    )
}
export default Dashboard