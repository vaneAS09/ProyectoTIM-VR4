import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Formularios.css';
import '../CSS/Crear_objetos.css';
import '../CSS/style.css';

const URI = 'http://localhost:5000/test/'

const CompCreateTest = () => {
    const [codigo_unico, setCodigo] = useState('')
    const [colegio, setColegio] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [estado, setEstado] = useState('')



    const navigate = useNavigate()    
    
    //procedimiento guardar
    const Guardar = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            codigo_unico:codigo_unico,
            colegio:colegio,
            ciudad:ciudad,
            estado:estado
        })
        navigate('/ShowTests')
    }   

    return (
        <div class="register-form">
           <h1 class="Registrar_font">Crear un Test</h1>

           <form onSubmit={Guardar} class="Registrar_font">
                <div className='mb-3'>
                    
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>* Código único</label>
                    <input
                        value={codigo_unico}
                        onChange={ (e)=> setCodigo(e.target.value)} 
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
                     <label className='form-label'>* Colegio</label>
                    <input
                        value={colegio}
                        onChange={ (e)=> setColegio(e.target.value)} 
                        type="text"
                        className='form-control'
                        required 
                        tabindex="2" 
                        autofocus
                    />                 
                 </div>  

                 <div className='mb-3'>
                     <label className='form-label'>* Ciudad</label>
                    <input
                        value={ciudad}
                        onChange={ (e)=> setCiudad(e.target.value)} 
                        type="text"
                        className='form-control'
                        required 
                        tabindex="3" 
                        autofocus
                    />                 
                 </div>  

                 <label className='form-label'>* Estado</label>
                <select id="estado" name="estado" class="select-css" tabindex="4"
                                        value={estado}
                                        onChange={ (e)=> setEstado(e.target.value)} 
                                        type="text"
                                        className='form-control'
                                        required
                >                       
                <option value="Abierto" selected>Abierto</option>
                <option value="Cerrado">Cerrado</option>    
                                 
                </select>

                 <button type='submit' class="btn-save">Guardar</button>  
                   
                 <a href="/ShowTests" class="cancelar">Cancelar</a> 
                              
           </form>
        </div>
    )
}

export default CompCreateTest