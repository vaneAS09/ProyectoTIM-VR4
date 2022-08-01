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


const RutaRecuperar = () => {
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);
  const [documento, setDocumento] = useState('')
  const [codigo_unico, setCodigo] = useState('')
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal)


  const HandleChange = (e) => {
  setDocumento({ ...documento, [e.target.num_documento]: e.target.value });
  setCodigo({ ...codigo_unico, [e.target.codigo_unico]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (documento !== "" && codigo_unico !== "") {
      const Prospecto = {
        documento,
        codigo_unico,
      };

      setLoading(true);
      await axios
        .post("http://localhost:5000/evaluaciones/validateR", Prospecto)
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);

          if(data.evaluacion.estado ==="abierto"){
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

          navigate("/Pregunta1a5R");
            localStorage.setItem("num_documento", Prospecto.documento);
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
                <p className="espacio"></p> 
                <p className="espacio"></p> 
            <div >
              <label htmlFor="num_documento"></label>
              <input
                onChange={ (e)=> setDocumento(e.target.value)}
                value={documento}
                name="documento"
                id="documento"
                type="text"
                placeholder="* Documento de identidad"
                autofocus required
                className= "input"
              />
            </div>
  
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
          <a href="/" className="font_volver3" > Volver </a>
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

export default RutaRecuperar;