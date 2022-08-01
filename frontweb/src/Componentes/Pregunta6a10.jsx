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

const CompPreg6a10 = () => {
    const [pregunta6, setPregunta6] = useState('')
    const [pregunta7, setPregunta7] = useState('')
    const [pregunta8, setPregunta8] = useState('')
    const [pregunta9, setPregunta9] = useState('')
    const [pregunta10, setPregunta10] = useState('')
    
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
            pregunta6: pregunta6, 
            pregunta7: pregunta7, 
            pregunta8: pregunta8, 
            pregunta9: pregunta9, 
            pregunta10: pregunta10, 

        })
        navigate('/Pregunta11a15')
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
        value={pregunta6}
        onChange={ (e)=> setPregunta6(e.target.value)} >
        * Se me facilita el cálculo numérico y las operaciones matemáticas.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta6" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta6" /> No
        </div>
    
           <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta7}
       onChange={ (e)=> setPregunta7(e.target.value)} >
        * Me desempeño bien en juegos de estrategia o de retos mentales (Ej.Ajedrez, Rompecabezas, Sudoku, etc)
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta7" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta7" /> No
        </div>
            
            <p className="espacio"></p> 

        <div className="fuente_preguntas" 
        value={pregunta8}
        onChange={ (e)=> setPregunta8(e.target.value)} >
        * Soluciono problemas de tipo lógico con facilidad.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta8" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta8" /> No
        </div>
  
            <p className="espacio"></p> 
  
        <div className="fuente_preguntas" 
        value={pregunta9}
       onChange={ (e)=> setPregunta9(e.target.value)} >
        * Tengo facilidad para las Ciencias Básicas (Química, Física, Biología).
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta9" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta9" /> No
        </div>
  
            <p className="espacio"></p> 
        
        <div className="fuente_preguntas" 
        value={pregunta10}
        onChange={ (e)=> setPregunta10(e.target.value)} >
        * Disfruto el contacto y manejo de computadores.
        <p className="espacio"></p> 
        <input type="radio" value="1" name="pregunta10" required/> Si <p></p>
        <input type="radio" value="0" name="pregunta10" /> No
        </div>
        
  
            <button type="submit" class="btn_siguiente">
              <div className="Fuente_botones" > Siguiente </div>  
            </button>
            <a href="/Pregunta1a5" className="btn_atras Fuente_botones" > Volver </a>
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


export default CompPreg6a10