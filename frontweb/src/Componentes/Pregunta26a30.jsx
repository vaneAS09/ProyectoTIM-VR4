import axios from "axios";
import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";
import "../CSS/style.css"
import { Grid, Box, Icon, Button} from "@material-ui/core";
import '../CSS/InicioPros.css'
import '../CSS/RutasInit.css'
import '../CSS/Preguntas.css'

const URI = 'http://localhost:5000/evaluaciones'

const CompPreg26a30 = () => {
    const [pregunta26, setPregunta26] = useState('')
    const [pregunta27, setPregunta27] = useState('')
    const [pregunta28, setPregunta28] = useState('')
    const [pregunta29, setPregunta29] = useState('')
    const [pregunta30, setPregunta30] = useState('')
    
    const navigate = useNavigate()
 

     //Información del inicio de sesión

     const documento = localStorage.getItem("num_documento");
     const codigo_unico = localStorage.getItem("codigo_unico");
 

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI ,{
            documento: documento,
            codigo_unico: codigo_unico,
            pregunta26: pregunta26, 
            pregunta27: pregunta27, 
            pregunta28: pregunta28, 
            pregunta29: pregunta29, 
            pregunta30: pregunta30, 

        })
        navigate('/Pregunta31a35')
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
  
  <Grid xs={10} md={10} lg={12} alignItems="center"  >
  
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
  
  <Grid xs={10} md={10} lg={12} alignItems="center" 
      className="Inicio_Form" 
    >
  
  <form className="Form_Preguntas" onSubmit={update}>
  
                  <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta26}
        onChange={ (e)=> setPregunta26(e.target.value)} >
        * Con frecuencia estoy tarareando o cantando una canción.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta26" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta26" /> No
        </div>
    
           <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta27}
       onChange={ (e)=> setPregunta27(e.target.value)} >
        * Fácilmente me invento una melodía para una canción o para expresar un estado de ánimo.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta27" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta27" /> No
        </div>
            
            <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta28}
        onChange={ (e)=> setPregunta28(e.target.value)} >
        * Conozco mucho acerca de la música, cantantes, compositores o grupos musicales.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta28" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta28" /> No
        </div>
  
            <p className="espacio"></p> 
  
        <div className="fuente_preguntas" 
        value={pregunta29}
       onChange={ (e)=> setPregunta29(e.target.value)} >
        * Suelo acompañar la mayoría de mis actividades con música.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta29" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta29" /> No
        </div>
  
            <p className="espacio"></p> 
        
        <div className="fuente_preguntas" 
        value={pregunta30}
        onChange={ (e)=> setPregunta30(e.target.value)} >
        *Disfruto mucho tocando un instrumento o cantando.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta30" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta30" /> No
        </div>
        
  
            <button type="submit" class="btn_siguiente">
              <div className="Fuente_botones" > Siguiente </div>  
            </button>
            <a href="/Pregunta21a25" className="btn_atras Fuente_botones" > Volver </a>
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


export default CompPreg26a30