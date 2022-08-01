import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:5000/prospects/'

const CompEditProspectos = () => {
    const [tipo_documento, setdocumentType] = useState('')
    const [num_documento, setDocument] = useState('')
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [grado, setGrado] = useState('')
    const [Ciudad_residencia, setCiudad] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [datos_auth, setAuth] = useState('No')  

    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            tipo_documento:tipo_documento,
            num_documento:num_documento,
            nombres:nombres,
            apellidos:apellidos,
            grado:grado,
            Ciudad_residencia:Ciudad_residencia,
            email:email,
            telefono:telefono,
            datos_auth:datos_auth
        })
        navigate('/ShowProspect')
    }

    useEffect( ()=>{
        getProById()
    },[])

    const getProById = async () => {
        const res = await axios.get(URI+id)
        setdocumentType(res.data.tipo_documento)
        setDocument(res.data.num_documento)
        setNombres(res.data.nombres)
        setApellidos(res.data.apellidos)
        setGrado(res.data.grado)
        setCiudad(res.data.Ciudad_residencia)
        setEmail(res.data.email)
        setTelefono(res.data.telefono)
        setAuth(res.data.datos_auth)
    }

    return (
        <div class="register-form">
        <h1 class="Registrar_font">Editar un Prospecto</h1>

        <form onSubmit={update} class="Registrar_font">
             <div className='mb-3'>

             <label className='form-label'>* Tipo de documento</label>
             <select id="rol" name="tipo_documento" class="select-css" tabindex="1"
                                     value={tipo_documento}
                                     onChange={ (e)=> setdocumentType(e.target.value)} 
                                     type="text"
                                     className='form-control'
                                     required
             > 
               <option value="Cédula" selected>Cédula</option>
               <option value="Tarjeta de identidad">Tarjeta de identidad</option>     
                              
             </select>

                 
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
                     tabindex="2" 
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
                     tabindex="3" 
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
                     tabindex="4" 
                     autofocus
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
                  <label className='form-label'>* Ciudad de residencia</label>
                 <input
                     value={Ciudad_residencia}
                     onChange={ (e)=> setCiudad(e.target.value)} 
                     type="text"
                     className='form-control'
                     minlength="3" maxlength="20" required tabindex="6"
                 />                 
              </div> 
              
              <div className='mb-3'>
                  <label className='form-label'>* Email</label>
                 <input
                     value={email}
                     onChange={ (e)=> setEmail(e.target.value)} 
                     type="email"
                     className='form-control'
                     minlength="5" maxlength="255" required tabindex="7"
                 />                 
              </div> 

              <div className='mb-3'>
                  <label className='form-label'>* Teléfono</label>
                 <input
                     value={telefono}
                     onChange={ (e)=> setTelefono(e.target.value)} 
                     type="numero"
                     className='form-control'
                     minlength="4" maxlength="25" required tabindex="8"
                 />                 
              </div> 

              <div className='mb-3'>
                  
                  <label for="prospectos">* ¿Autoriza datos personales?    </label>
                  <div>   </div>
                  <input 
                  value={datos_auth}
                  onChange={ (e)=> setAuth("Si")} 
                  tabindex="9"
                  type="checkbox"> 
                  </input>        
              </div> 

              <button type='submit' class="btn-save">Guardar</button>  
                
              <a href="/ShowProspect" class="cancelar">Cancelar</a> 
                           
        </form>
     </div>
    )

}

export default CompEditProspectos