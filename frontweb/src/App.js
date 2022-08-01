import './CSS/Home.css';


//importamos los componentes

import Start from './Init';
import RutaTest from './RutaTest';
import RutaProspect from './RutaProspect'
import RutaRecuperar from './RutaRecuperar'
import CompPreg1a5 from './Componentes/Pregunta1a5'
import CompPreg1a5P from './Componentes/Pregunta1a5P'
import CompPreg1a5R from './Componentes/Pregunta1a5R'
import CompPreg6a10 from './Componentes/Pregunta6a10'
import CompPreg11a15 from './Componentes/Pregunta11a15'
import CompPreg16a20 from './Componentes/Pregunta16a20'
import CompPreg21a25 from './Componentes/Pregunta21a25'
import CompPreg26a30 from './Componentes/Pregunta26a30'
import CompPreg31a35 from './Componentes/Pregunta31a35'
import CompPreg36a40 from './Componentes/Pregunta36a40'
import FinTest from './Componentes/FinTest'


//importamos el router
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
            
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Start /> } />
            <Route index element={ <Start /> } />
            <Route path='/RutaTest' element={ <RutaTest />} />
            <Route path='/RutaProspect' element={ <RutaProspect />} />
            <Route path='/RutaRecuperar' element={ <RutaRecuperar />} />
            <Route path='/Pregunta1a5' element={ <CompPreg1a5 />} />
            <Route path='/Pregunta1a5P' element={ <CompPreg1a5P />} />
            <Route path='/Pregunta1a5R' element={ <CompPreg1a5R />} />
            <Route path='/Pregunta6a10' element={ <CompPreg6a10 />} />
            <Route path='/Pregunta11a15' element={ <CompPreg11a15 />} />
            <Route path='/Pregunta16a20' element={ <CompPreg16a20 />} />
            <Route path='/Pregunta21a25' element={ <CompPreg21a25 />} />
            <Route path='/Pregunta26a30' element={ <CompPreg26a30 />} />
            <Route path='/Pregunta31a35' element={ <CompPreg31a35 />} />
            <Route path='/Pregunta36a40' element={ <CompPreg36a40 />} />
            <Route path='/FinTest' element={ <FinTest />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
