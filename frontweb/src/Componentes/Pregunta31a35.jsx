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

const CompPreg31a35 = () => {

    const [pregunta31, setPregunta31] = useState('')
    const [pregunta32, setPregunta32] = useState('')
    const [pregunta33, setPregunta33] = useState('')
    const [pregunta34, setPregunta34] = useState('')
    const [pregunta35, setPregunta35] = useState('')
    
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
            pregunta31: pregunta31, 
            pregunta32: pregunta32, 
            pregunta33: pregunta33, 
            pregunta34: pregunta34, 
            pregunta35: pregunta35, 

        })
        navigate('/Pregunta36a40')
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
        value={pregunta31}
        onChange={ (e)=> setPregunta31(e.target.value)} >
        *  Sé muy bien qué cosas me gustan y no me gustan.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta31" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta31" /> No
        </div>
    
           <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta32}
       onChange={ (e)=> setPregunta32(e.target.value)} >
        * Con frecuencia pienso acerca de mi mismo/a y me cuestiono acerca de quién y cómo soy.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta32" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta32" /> No
        </div>
            
            <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta33}
        onChange={ (e)=> setPregunta33(e.target.value)} >
        * Por lo general soy consciente de lo que estoy expresando con mis gestos.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta33" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta33" /> No
        </div>
  
            <p className="espacio"></p> 
  
        <div className="fuente_preguntas" 
        value={pregunta34}
       onChange={ (e)=> setPregunta34(e.target.value)} >
        * Distingo muy bien los ambientes y las personas en las cuales me siento a gusto.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta34" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta34" /> No
        </div>
  
            <p className="espacio"></p> 
        
        <div className="fuente_preguntas" 
        value={pregunta35}
        onChange={ (e)=> setPregunta35(e.target.value)} >
        * Conozco mis sentimientos y logro controlarlos o expresarlos de manera adecuada.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta35" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta35" /> No
        </div>
        
  
            <button type="submit" class="btn_siguiente">
              <div className="Fuente_botones" > Siguiente </div>  
            </button>
            <a href="/Pregunta26a30" className="btn_atras Fuente_botones" > Volver </a>
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


export default CompPreg31a35