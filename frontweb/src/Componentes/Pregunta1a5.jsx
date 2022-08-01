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

const CompPreg1a5 = () => {

    const [pregunta1, setPregunta1] = useState('')
    const [pregunta2, setPregunta2] = useState('')
    const [pregunta3, setPregunta3] = useState('')
    const [pregunta4, setPregunta4] = useState('')
    const [pregunta5, setPregunta5] = useState('')
    
    const navigate = useNavigate()

     const documento = localStorage.getItem("num_documento");
     const codigo_unico = localStorage.getItem("codigo_unico");
 

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI ,{
            documento: documento,
            codigo_unico: codigo_unico,
            pregunta1: pregunta1, 
            pregunta2: pregunta2, 
            pregunta3: pregunta3, 
            pregunta4: pregunta4, 
            pregunta5: pregunta5, 

        })
        navigate('/Pregunta6a10')
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
        value={pregunta1}
        onChange={ (e)=> setPregunta1(e.target.value)} >
        * Tengo un buen rendimiento en español y/o otros idiomas.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta1" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta1" /> No
        </div>
    
           <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta2}
       onChange={ (e)=> setPregunta2(e.target.value)} >
        * Me gusta mantenerme actualizado/a en noticias y actualidad.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta2" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta2" /> No
        </div>
            
            <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta3}
        onChange={ (e)=> setPregunta3(e.target.value)} >
        * Tengo un vocabulario amplio y entiendo con facilidad y precisión lo que leo.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta3" required /> Si <p></p>
        <input type="radio" value="0" name="pregunta3" /> No
        </div>
  
            <p className="espacio"></p> 
  
        <div className="fuente_preguntas" 
        value={pregunta4}
       onChange={ (e)=> setPregunta4(e.target.value)} >
        * Me encanta leer y/o escribir.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta4" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta4" /> No
        </div>
  
            <p className="espacio"></p> 
        
        <div className="fuente_preguntas" 
        value={pregunta5}
        onChange={ (e)=> setPregunta5(e.target.value)} >
        * Tengo facilidad para hablar en público y transmitir mis ideas con claridad.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta5" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta5" /> No
        </div>
        
  
            <button type="submit" class="btn_siguiente">
              <div className="Fuente_botones" > Siguiente </div>  
            </button>
            <a href="/RutaTest" className="btn_atras Fuente_botones" > Volver </a>
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



export default CompPreg1a5