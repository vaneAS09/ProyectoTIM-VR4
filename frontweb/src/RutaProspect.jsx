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

const URI = 'http://localhost:5000/evaluaciones'

const RutaProspect = () => {
  const [mensaje, setMensaje] = useState()
  const [loading, setLoading] = useState(false)
  const [programa1, setPrograma1] = useState('')
  const [programa2, setPrograma2] = useState('')
  const [num_documento, setDocumento] = useState('')
  const [codigo_unico, setCodigo] = useState('')
  const [tipo_documento, setTipoDoc] = useState('')
  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [grado, setGrado] = useState('')
  const [Ciudad_residencia, setCiudad] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [datos_auth, SetDatos_auth] = useState('No')
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal)


  const HandleChange = (e) => {
  setDocumento({ ...num_documento, [e.target.num_documento]: e.target.value });
  setCodigo({ ...codigo_unico, [e.target.codigo_unico]: e.target.value });
  }

  const Guardar = async (e) => {
    e.preventDefault()

    if (num_documento !== "" && codigo_unico !== "") {
        const Prospecto = {
          num_documento,
          codigo_unico,
        };

    await axios.post(URI, {
        tipo_documento:tipo_documento,
        num_documento:num_documento,
        nombres:nombres,
        apellidos:apellidos,
        grado:grado,
        Ciudad_residencia:Ciudad_residencia,
        email:email,
        telefono:telefono,
        datos_auth:datos_auth,
        programa1:programa1,
        programa2:programa2,
        codigo_unico:codigo_unico

    })
    .then((res) => {
      const { data } = res;
      setMensaje(data.mensaje);

      if(data.test.codigo_unico !== "Cerrado" && data.prospecto.num_documento !== ""){
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

      navigate("/Pregunta1a5P");
        localStorage.setItem("num_documento", Prospecto.num_documento);
        localStorage.setItem("codigo_unico", Prospecto.codigo_unico);
  }, 1500);
})

    .catch((error) => {
      console.error(error);
      MySwal.fire({
        title: <strong>Test no habilitado</strong>,
        html: <i>Por favor valide sus datos, el prospecto ya existe o el test ha sido cerrado</i>,
        icon: 'error',
        showConfirmButton: true,
        });
      setTimeout(() => {
        setMensaje("");
      }, 1500);
    });
  setLoading(false);
}

} 

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

<form className="formulario" onSubmit={Guardar}>
<p className="espacio"></p> 

          <div >
              
            <div >
              <label className='form-label'>* Tipo de documento</label>
                <select id="tipo_documento" name="tipo_documento" class="select-css" tabindex="1"
                    value={tipo_documento}
                    onChange={ (e)=> setTipoDoc(e.target.value)} 
                    type="text"
                    autofocus required
                    className= "input"
                > 
                  <option value="Ninguno" selected>Ninguno</option>
                  <option value="Cédula">Cédula</option>
                  <option value="Tarjeta de identidad">Tarjeta de identidad</option>     
                                 
                </select>
            </div>
  
          </div>

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
                tabindex="2"
              />
            </div>
            <p></p> 

            <div className='mb-3'>
                    <input
                        value={nombres}
                        onChange={ (e)=> setNombres(e.target.value)} 
                        name="nombres"
                        id="nombres"
                        type="text"
                        placeholder="* Nombres"
                        autofocus required
                        className= "input"
                        tabindex="3"
                    />                 
                 </div>  

          <div className='mb-3'>
                    <input
                        value={apellidos}
                        onChange={ (e)=> setApellidos(e.target.value)} 
                        type="text"
                        placeholder="* Apellidos"
                        autofocus required
                        className= "input"
                        tabindex="4"
                    />                 
                 </div>  

        <div className='mb-3'>
        <label className='form-label'>* Grado</label>
        <select id="grado" name="grado" class="select-css" tabindex="5"
                    value={grado}
                    onChange={ (e)=> setGrado(e.target.value)} 
                    type="text"
                    autofocus required
                    className= "input"
                    
                > 
                  <option autofocus value="Ninguno" selected>Ninguno</option>
                  <option autofocus value="Noveno">Noveno</option>
                  <option autofocus value="Decimo">Decimo</option> 
                  <option autofocus value="Once">Once</option>     
                                 
                </select>
                 </div> 

                 <div className='mb-3'>
                    <input
                        value={Ciudad_residencia}
                        onChange={ (e)=> setCiudad(e.target.value)} 
                        type="text"
                        placeholder="* Ciudad de residencia"
                        autofocus required
                        className= "input"
                        tabindex="6"
                    />                 
                 </div> 

        <div className='mb-3'>
                    <input
                        value={email}
                        onChange={ (e)=> setEmail(e.target.value)} 
                        type="email"
                        placeholder="* Email"
                        autofocus required
                        className= "input"
                        tabindex="7"
                    />                 
                 </div> 

       <div className='mb-3'>
                    <input
                        value={telefono}
                        onChange={ (e)=> setTelefono(e.target.value)} 
                        type="numero"
                        placeholder="* Teléfono"
                        autofocus required
                        className= "input"
                        minlength="4" maxlength="255" tabindex="8"
                    />                 
        </div> 

        <div className='mb-3'>
                     
                     <label for="prospectos">* ¿Autoriza datos personales?    </label>
                     <div>   </div>
                     <input 
                     value={datos_auth}
                     onChange={ (e)=> SetDatos_auth("Si")} 
                     tabindex="9"
                     type="checkbox" > 
                     </input>        
                 </div> 

          <div >
          <div className='mb-3'>
        <label className='form-label'>* Programa de preferencia</label>
        <select id="programa1" name="programa1" class="select-css" tabindex="10"
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
          </div>

          <div className='mb-3'>
        <label className='form-label'>* Otro programa de preferencia</label>
        <select id="programa2" name="programa2" class="select-css" tabindex="11"
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
                  tabindex="12"
                />
                {mensaje && <div>{mensaje}</div>}
              </div>

          <button type="submit" class="btn_go">
            <div className="font_iniciar_test" >  Iniciar test </div>  
          </button>
          <a href="/" className="font_volver2" > Volver </a>
        
         
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

export default RutaProspect;