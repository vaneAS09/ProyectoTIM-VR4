import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:5000/evaluaciones/'

const CompEditEvaluaciones = () => {

    const [documento, setDocument] = useState('')
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [grado, setGrado] = useState('')
    const [email, setEmail] = useState('')
    const [programa1, setProgram1] = useState('')
    const [programa2, setProgram2] = useState('')  
    const [codigo_unico, setCodigo] = useState('')  
    const [colegio, setColegio] = useState('')  

    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            documento:documento,
            nombres:nombres, 
            apellidos:apellidos, 
            ciudad:ciudad, 
            grado:grado, 
            email:email,
            programa1:programa1, 
            programa2:programa2,  
            codigo_unico:codigo_unico, 
            colegio:colegio
        })
        navigate('/ShowEvaluaciones')
    }

    useEffect( ()=>{
        getEvaById()
    },[])

    const getEvaById = async () => {
        const res = await axios.get(URI+id)
        setDocument(res.data.documento)
        setNombres(res.data.nombres)
        setApellidos(res.data.apellidos)
        setCiudad(res.data.ciudad)
        setGrado(res.data.grado)
        setEmail(res.data.email)
        setProgram1(res.data.programa1)
        setProgram2(res.data.programa2)
        setCodigo(res.data.codigo_unico)
        setColegio(res.data.colegio)
    }

    return (
        <div class="register-form">
        <h1 class="Registrar_font">Editar una Evaluación</h1>

        <form onSubmit={update} class="Registrar_font">
             <div className='mb-3'>

              </div>   
              <div className='mb-3'>
                  <label className='form-label'>* Documento de identidad</label>
                 <input
                     value={documento}
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
                  <label className='form-label'>* Nombres</label>
                 <input
                     value={nombres}
                     onChange={ (e)=> setNombres(e.target.value)} 
                     type="text"
                     className='form-control'
                     required 
                     tabindex="2" 
                     autofocus
                 />                 
              </div>  

              <div className='mb-3'>
                  <label className='form-label'>* Apellidos</label>
                 <input
                     value={apellidos}
                     onChange={ (e)=> setApellidos(e.target.value)} 
                     type="text"
                     className='form-control'
                     required 
                     tabindex="3" 
                     autofocus
                 />                 
              </div>  

              <div className='mb-3'>
                  <label className='form-label'>* Ciudad de residencia</label>
                 <input
                     value={ciudad}
                     onChange={ (e)=> setCiudad(e.target.value)} 
                     type="text"
                     className='form-control'
                     minlength="3" maxlength="20" required tabindex="4"
                 />                 
              </div> 


              <div className='mb-3'>
                  <label className='form-label'>* Grado</label>
                 <input
                     value={grado}
                     onChange={ (e)=> setGrado(e.target.value)} 
                     type="text"
                     className='form-control'
                     minlength="1" maxlength="20" required tabindex="5"
                 />                 
              </div> 

             
              
              <div className='mb-3'>
                  <label className='form-label'>* Email</label>
                 <input
                     value={email}
                     onChange={ (e)=> setEmail(e.target.value)} 
                     type="email"
                     className='form-control'
                     minlength="5" maxlength="255" required tabindex="6"
                 />                 
              </div> 

              <div className='mb-3'>
                  <label className='form-label'>* Programa de interés</label>
                 <input
                     value={programa1}
                     onChange={ (e)=> setProgram1(e.target.value)} 
                     type="numero"
                     className='form-control'
                     minlength="4" maxlength="255" required tabindex="7"
                 />                 
              </div> 

              <div className='mb-3'>
                  <label className='form-label'>* Programa de interés</label>
                 <input
                     value={programa2}
                     onChange={ (e)=> setProgram2(e.target.value)} 
                     type="numero"
                     className='form-control'
                     minlength="4" maxlength="255" required tabindex="8"
                 />                 
              </div> 

              <div className='mb-3'>
                  <label className='form-label'>* Código único del test</label>
                 <input
                     value={codigo_unico}
                     onChange={ (e)=> setCodigo(e.target.value)} 
                     type="numero"
                     className='form-control'
                     minlength="4" maxlength="25" required tabindex="9"
                 />                 
              </div> 

              <div className='mb-3'>
                  <label className='form-label'>* Colegio</label>
                 <input
                     value={colegio}
                     onChange={ (e)=> setColegio(e.target.value)} 
                     type="numero"
                     className='form-control'
                     minlength="4" maxlength="25" required tabindex="10"
                 />                 
              </div> 

              <button type='submit' class="btn-save">Guardar</button>  
                
              <a href="/ShowEvaluaciones" class="cancelar">Cancelar</a> 
                           
        </form>
     </div>
    )

}

export default CompEditEvaluaciones