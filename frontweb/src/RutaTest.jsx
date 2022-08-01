import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./CSS/Login.css";
import "./CSS/style.css"
import { Grid, Box, Icon} from "@material-ui/core";
import './CSS/InicioPros.css'
import './CSS/RutasInit.css'

const URI = 'http://localhost:5000/evaluaciones/validate'

const RutaTest = () => {
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);
  const [programa1, setPrograma1] = useState('')
  const [programa2, setPrograma2] = useState('')
  const [num_documento, setDocumento] = useState('')
  const [codigo_unico, setCodigo] = useState('')
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal)


  const HandleChange = (e) => {
  setDocumento({ ...num_documento, [e.target.num_documento]: e.target.value });
  setCodigo({ ...codigo_unico, [e.target.codigo_unico]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (num_documento !== "" && codigo_unico !== "") {
      const Prospecto = {
        num_documento,
        codigo_unico,
        programa1,
        programa2
      };

      setLoading(true);
      await axios
        .post("http://localhost:5000/evaluaciones/validate", Prospecto)
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);

          if(data.test.codigo_unico !== "Cerrado" && data.prospecto.num_documento !== "" && data.Yapresento.documento !==""){
            MySwal.fire({
                title: <strong>Test Habilitado</strong>,
                html: <i>¡Inicia tu test!</i>,
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
              });
                       }
          

        setTimeout(() => {
          setMensaje("");

          navigate("/Pregunta1a5T");
            localStorage.setItem("num_documento", Prospecto.num_documento);
            localStorage.setItem("codigo_unico", Prospecto.codigo_unico);
      }, 1500);
    })

        .catch((error) => {
          console.error(error);
          MySwal.fire({
            title: <strong>Test no habilitado</strong>,
            html: <i>Por favor valide sus datos, test o prospecto no encontrado</i>,
            icon: 'error',
            showConfirmButton: true,
            });
          setTimeout(() => {
            setMensaje("");
          }, 1500);
        });
      setLoading(false);
    }
  };


  return (
    <>
      <div>
      <Grid  container spacing={0} >

<Grid xs={10} md={10} lg={12} alignItems="center" className="Inicio_pros_contenedor">

<Grid xs={10} md={10} lg={12} alignItems="center" container  >
<Box
    bgcolor="primary.main"
    color="primary.contrastText"
    p={10}
    textAlign="center"
    className="Inicio_pros_barra"
  >

<img className="Inicio_pros_logo"></img> 
<div className="Inicio_pros_font"> Test Uao</div> 

</Box>

</Grid>

<Grid xs={10} md={10} lg={12} alignItems="center" className="Inicio_pros_body" Container>

<Grid xs={10} md={10} lg={12} alignItems="center" >

<Box
    bgcolor="primary.main"
    color="primary.contrastText"
    p={2}
    textAlign="center"
    className="Position_init" 
  >

<div  border="none" className="punto"></div>
<div  border="none" className="Linea"></div>
<div className="fuente_init">TEST DE INTELIGENCIAS MÚLTIPLES UAO</div>

</Box>

<Grid xs={10} md={10} lg={12} alignItems="center" className="Inicio_Form" 
  >

<form className="formulario" onSubmit={(e) => onSubmit(e)}>
<p className="espacio"></p> 

          <div >
                <p className="espacio"></p> 
            <div >
              <label htmlFor="num_documento"></label>
              <input
                onChange={ (e)=> setDocumento(e.target.value)}
                value={num_documento}
                name="num_documento"
                id="num_documento"
                type="text"
                placeholder="* Documento de identidad"
                autofocus required
                className= "input"
              />
            </div>
  
          </div>

          <p className="espacio"></p> 
          <div className='mb-3'>
        <label className='form-label'>* Programa de preferencia</label>
        <select id="programa1" name="programa1" class="select-css" tabindex="7"
                    value={programa1}
                    onChange={ (e)=> setPrograma1(e.target.value)} 
                    type="text"
                    autofocus required
                    className= "input"
                > 
                  <option autofocus value="Ninguno" selected>Ninguno</option>
                  <option autofocus value="Cine">Cine</option>
                  <option autofocus value="Comunicación social">Comunicación social</option> 
                  <option autofocus value="Arquitectura">Arquitectura</option>
                  <option autofocus value="Música">Música</option>    
                  <option autofocus value="Pisoclogía">Pisoclogía</option>  
                  <option autofocus value="Ingeniería informática">Ingeniería informática</option> 
                  <option autofocus value="Ingeniería industrial">Ingeniería industrial</option> 
                  <option autofocus value="Ingeniería mecatrónica">Ingeniería mecatrónica</option> 
                  <option autofocus value="Ingeniería multimedia">Ingeniería multimedia</option>
                  <option autofocus value="Mercadeo">Mercadeo</option>
                  <option autofocus value="Administración">Administración</option>
                  <option autofocus value="Economía">Economía</option>
                  <option autofocus value="Medicina">Medicina</option>
                                 
                </select>
                 </div> 
                 <p className="espacio"></p> 
          <div className='mb-3'>
        <label className='form-label'>* Otro programa de preferencia</label>
        <select id="programa2" name="programa2" class="select-css" tabindex="8"
                    value={programa2}
                    onChange={ (e)=> setPrograma2(e.target.value)} 
                    type="text"
                    autofocus required
                    className= "input"
                > 
                  <option autofocus value="Ninguno" selected>Ninguno</option>
                  <option autofocus value="Cine">Cine</option>
                  <option autofocus value="Comunicación social">Comunicación social</option> 
                  <option autofocus value="Arquitectura">Arquitectura</option>
                  <option autofocus value="Música">Música</option>    
                  <option autofocus value="Pisoclogía">Pisoclogía</option>  
                  <option autofocus value="Ingeniería informática">Ingeniería informática</option> 
                  <option autofocus value="Ingeniería industrial">Ingeniería industrial</option> 
                  <option autofocus value="Ingeniería mecatrónica">Ingeniería mecatrónica</option> 
                  <option autofocus value="Ingeniería multimedia">Ingeniería multimedia</option>
                  <option autofocus value="Mercadeo">Mercadeo</option>
                  <option autofocus value="Administración">Administración</option>
                  <option autofocus value="Economía">Economía</option>
                  <option autofocus value="Medicina">Medicina</option>
                                 
                </select>
                 </div> 

            <div >
                <label htmlFor="codigo_unico"></label>
                <input
                  onChange={ (e)=> setCodigo(e.target.value)}
                  value={codigo_unico}
                  name="codigo_unico"
                  id="codigo_unico"
                  type="text"
                  placeholder="* Código único del test"
                  autofocus required
                  class= "input"
                />
                {mensaje && <div>{mensaje}</div>}
              </div>


          <p className="espacio"></p> 
          <p className="espacio"></p> 

          <button type="submit" class="btn_go">
            <div className="font_iniciar_test" >  Iniciar test </div>  
          </button>
          <a href="/" className="font_volver" > Volver </a>
        </form>

</Grid>

</Grid>
</Grid>

</Grid>

</Grid>

      
      </div>

     
    </>
  );
};

export default RutaTest;