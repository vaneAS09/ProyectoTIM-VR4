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

const CompPreg11a15 = () => {
    const [pregunta11, setPregunta11] = useState('')
    const [pregunta12, setPregunta12] = useState('')
    const [pregunta13, setPregunta13] = useState('')
    const [pregunta14, setPregunta14] = useState('')
    const [pregunta15, setPregunta15] = useState('')
    
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
            pregunta11: pregunta11, 
            pregunta12: pregunta12, 
            pregunta13: pregunta13, 
            pregunta14: pregunta14, 
            pregunta15: pregunta15, 

        })
        navigate('/Pregunta16a20')
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
        value={pregunta11}
        onChange={ (e)=> setPregunta11(e.target.value)} >
        * Me gusta mucho la fotografía, el cine, el teatro o el arte.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta11" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta11" /> No
        </div>
    
           <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta12}
       onChange={ (e)=> setPregunta12(e.target.value)} >
        * Me oriento con facilidad cuando llego a un sitio nuevo.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta12" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta12" /> No
        </div>
            
            <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta13}
        onChange={ (e)=> setPregunta13(e.target.value)} >
        * Me puedo imaginar fácilmente un objeto de dos dimensiones con volumen.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta13" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta13" /> No
        </div>
  
            <p className="espacio"></p> 
  
        <div className="fuente_preguntas" 
        value={pregunta14}
       onChange={ (e)=> setPregunta14(e.target.value)} >
        * Entiendo fácilmente gráficos, mapas e instrucciones ilustradas.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta14" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta14" /> No
        </div>
  
            <p className="espacio"></p> 
        
        <div className="fuente_preguntas" 
        value={pregunta15}
        onChange={ (e)=> setPregunta15(e.target.value)} >
        * Dibujo o pinto con fluidez y agrado.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta15" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta15" /> No
        </div>
        
  
            <button type="submit" class="btn_siguiente">
              <div className="Fuente_botones" > Siguiente </div>  
            </button>
            <a href="/Pregunta6a10" className="btn_atras Fuente_botones" > Volver </a>
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


export default CompPreg11a15