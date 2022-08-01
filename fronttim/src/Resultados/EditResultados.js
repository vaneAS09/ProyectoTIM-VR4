import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:5000/resultados/'

const CompEditResultados = () => {

    const [num_documento, setDocument] = useState('')
    const [nombre_completo, setNombres] = useState('')
    const [codigo_test, setCodigo] = useState('')
    const [grado, setGrado] = useState('')
    const [colegio, setColegio] = useState('') 
    const [programa_pre1, setProgram1] = useState('')
    const [programa_pre2, setProgram2] = useState('')  

    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            num_documento:num_documento,
            nombre_completo:nombre_completo, 
            codigo_test:codigo_test, 
            grado:grado, 
            colegio:colegio,
            programa_pre1:programa_pre1, 
            programa_pre2:programa_pre2,  
        })
        navigate('/ShowResultados')
    }

    useEffect( ()=>{
        getResById()
    },[])

    const getResById = async () => {
        const res = await axios.get(URI+id)
        setDocument(res.data.num_documento)
        setNombres(res.data.nombre_completo)
        setCodigo(res.data.codigo_test)
        setGrado(res.data.grado)
        setColegio(res.data.colegio)
        setProgram1(res.data.programa_pre1)
        setProgram2(res.data.programa_pre2) 
    }

    return (
        <div class="register-form">
        <h1 class="Registrar_font">Editar un Resultado</h1>

        <form onSubmit={update} class="Registrar_font">
             <div className='mb-3'>

              </div>   
              <div className='mb-3'>
                  <label className='form-label'>* Documento de identidad</label>
                 <input
                     value={num_documento}
                     onChange={ (e)=> setDocument(e.target.value)} 
                     type="text"
                     className='form-control'
                     minlength="5" 
                     maxlength="14"
                     required 
                     tabindex="1" 
                     autofocus
                 />                 
              </div>  

              <div className='mb-3'>
                  <label className='form-label'>* Nombre completo</label>
                 <input
                     value={nombre_completo}
                     onChange={ (e)=> setNombres(e.target.value)} 
                     type="text"
                     className='form-control'
                     required 
                     tabindex="2" 
                     autofocus
                 />                 
              </div>  

              <div className='mb-3'>
                  <label className='form-label'>* Código único del test</label>
                 <input
                     value={codigo_test}
                     onChange={ (e)=> setCodigo(e.target.value)} 
                     type="numero"
                     className='form-control'
                     minlength="4" maxlength="25" required tabindex="3"
                 />                 
              </div> 


              <div className='mb-3'>
                  <label className='form-label'>* Grado</label>
                 <input
                     value={grado}
                     onChange={ (e)=> setGrado(e.target.value)} 
                     type="text"
                     className='form-control'
                     minlength="1" maxlength="20" required tabindex="4"
                 />                 
              </div> 

              <div className='mb-3'>
                  <label className='form-label'>* Colegio</label>
                 <input
                     value={colegio}
                     onChange={ (e)=> setColegio(e.target.value)} 
                     type="numero"
                     className='form-control'
                     minlength="4" maxlength="25" required tabindex="5"
                 />                 
              </div> 

             
              <div className='mb-3'>
                  <label className='form-label'>* Programa de interés</label>
                 <input
                     value={programa_pre1}
                     onChange={ (e)=> setProgram1(e.target.value)} 
                     type="numero"
                     className='form-control'
                     minlength="4" maxlength="255" required tabindex="6"
                 />                 
              </div> 

              <div className='mb-3'>
                  <label className='form-label'>* Programa de interés</label>
                 <input
                     value={programa_pre2}
                     onChange={ (e)=> setProgram2(e.target.value)} 
                     type="numero"
                     className='form-control'
                     minlength="4" maxlength="255" required tabindex="8"
                 />                 
              </div> 


              <button type='submit' class="btn-save">Guardar</button>  
                
              <a href="/ShowResultados" class="cancelar">Cancelar</a> 
                           
        </form>
     </div>
    )

}

export default CompEditResultados