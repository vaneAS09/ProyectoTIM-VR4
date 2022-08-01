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

const CompPreg36a40 = () => {

    const [pregunta36, setPregunta36] = useState('')
    const [pregunta37, setPregunta37] = useState('')
    const [pregunta38, setPregunta38] = useState('')
    const [pregunta39, setPregunta39] = useState('')
    const [pregunta40, setPregunta40] = useState('')
    
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
            pregunta36: pregunta36, 
            pregunta37: pregunta37, 
            pregunta38: pregunta38, 
            pregunta39: pregunta39, 
            pregunta40: pregunta40, 

        })
        navigate('/FinTest')
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
        value={pregunta36}
        onChange={ (e)=> setPregunta36(e.target.value)} >
        * Observo a otras personas y detecto con facilidad sus intenciones o motivaciones.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta36" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta36" /> No
        </div>
    
           <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta37}
       onChange={ (e)=> setPregunta37(e.target.value)} >
        * Soy feliz cuando puedo organizar una reunión o fiesta con mis amigos y compañeros.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta37" required /> Si <p></p>
        <input type="radio" value="0" name="pregunta37" /> No
        </div>
            
            <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta38}
        onChange={ (e)=> setPregunta38(e.target.value)} >
        * En mi grupo o en mi familia convenzo con facilidad a los demás de mis ideas.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta38" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta38" /> No
        </div>
  
            <p className="espacio"></p> 
  
        <div className="fuente_preguntas" 
        value={pregunta39}
       onChange={ (e)=> setPregunta39(e.target.value)} >
        *  Me adapto fácilmente a diferentes tipos o grupos de personas.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta39" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta39" /> No
        </div>
  
            <p className="espacio"></p> 
        
        <div className="fuente_preguntas" 
        value={pregunta40}
        onChange={ (e)=> setPregunta40(e.target.value)} >
        *  Me gusta mucho participar en donde quiera que puedo: Consejo estudiantil, periódico, grupos sociales.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta40" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta40" /> No
        </div>
        
  
            <button type="submit" class="btn_siguiente">
              <div className="Fuente_botones" > Siguiente </div>  
            </button>
            <a href="/Pregunta31a35" className="btn_atras Fuente_botones" > Volver </a>
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


export default CompPreg36a40