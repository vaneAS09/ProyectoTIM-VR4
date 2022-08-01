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

const CompPreg21a25 = () => {
    const [pregunta21, setPregunta21] = useState('')
    const [pregunta22, setPregunta22] = useState('')
    const [pregunta23, setPregunta23] = useState('')
    const [pregunta24, setPregunta24] = useState('')
    const [pregunta25, setPregunta25] = useState('')
    
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
            pregunta21: pregunta21, 
            pregunta22: pregunta22, 
            pregunta23: pregunta23, 
            pregunta24: pregunta24, 
            pregunta25: pregunta25, 

        })
        navigate('/Pregunta26a30')
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
        value={pregunta21}
        onChange={ (e)=> setPregunta21(e.target.value)} >
        * Me siento especialmente a gusto cuando estoy en movimiento y al aire libre.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta21" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta21" /> No
        </div>
    
           <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta22}
       onChange={ (e)=> setPregunta22(e.target.value)} >
        * Soy ágil para el deporte, tengo buen equilibrio y sentido de coordinación
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta22" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta22" /> No
        </div>
            
            <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta23}
        onChange={ (e)=> setPregunta23(e.target.value)} >
        * Sigo con facilidad nuevos pasos de baile.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta23" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta23" /> No
        </div>
  
            <p className="espacio"></p> 
  
        <div className="fuente_preguntas" 
        value={pregunta24}
       onChange={ (e)=> setPregunta24(e.target.value)} >
        * Me encanta armar y desarmar cosas o hacer manualidades.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta24" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta24" /> No
        </div>
  
            <p className="espacio"></p> 
        
        <div className="fuente_preguntas" 
        value={pregunta25}
        onChange={ (e)=> setPregunta25(e.target.value)} >
        * Disfruto mucho el movimiento, la danza o la actividad física.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta25" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta25" /> No
        </div>
        
  
            <button type="submit" class="btn_siguiente">
              <div className="Fuente_botones" > Siguiente </div>  
            </button>
            <a href="/Pregunta16a20" className="btn_atras Fuente_botones" > Volver </a>
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


export default CompPreg21a25