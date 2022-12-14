import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import './CSS/Home.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";

const Dashboard = () => {

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
     

    return(
       <>    
       <div className="Home-body">
   
        <div class="Home-header">
        <div class="btn-menu">
        <label for="btn-menu">☰</label>
        </div>
        <img class="uao-logo"></img>
        <div class="Home-titleFont">PORTAL DE MERCADEO</div>  
        <a class="Home_logout" onClick={Logout}>Cerrar sesión</a>
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