import './CSS/Home.css';

//importamos los componentes
import CompShowUsers from './Users/ShowUsers';
import CompCreateUsers from './Users/CreateUsers';
import CompEditUsers from './Users/EditUsers';
import CompConfigUsers from './Users/ConfigUser';
import CompShowProspect from './Prospectos/ShowProspect';
import CompCreateProspects from './Prospectos/CreatePropecto';
import CompEditProspectos from './Prospectos/EditProspecto';
import CompShowTest from './Tests/ShowTests';
import CompCreateTest from './Tests/CreateTest';
import CompEditTests from './Tests/EditTest';
import CompShowEvaluaciones from './Evaluaciones/ShowEvaluaciones';
import CompEditEvaluaciones from './Evaluaciones/EditEvaluacion';
import CompShowResultados from './Resultados/ShowResultados';
import CompShowResultadosF from './Resultados/ShowResultadosF';
import CompEditResultados from './Resultados/EditResultados';
import Dashboard from './Dashboard';
import Login from './Login';

//importamos el router
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <header>
     
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Login /> } />
            <Route index element={ <Login /> } />
            <Route path='/Dashboard' element={ <Dashboard />} />
            <Route path='/ShowUsers' element={ <CompShowUsers />} />
            <Route path='/create' element={ <CompCreateUsers />} />
            <Route path='/edit/:id' element={ <CompEditUsers />} />
            <Route path='/editC' element={ <CompConfigUsers />} />
            <Route path='/ShowProspect' element={ <CompShowProspect />} />
            <Route path='/createP' element={ <CompCreateProspects />} />
            <Route path='/editP/:id' element={ <CompEditProspectos  />} />
            <Route path='/ShowTests' element={ <CompShowTest />} />
            <Route path='/createT' element={ <CompCreateTest />} />
            <Route path='/editT/:id' element={ <CompEditTests  />} />
            <Route path='/ShowEvaluaciones' element={ <CompShowEvaluaciones />} />
            <Route path='/editE/:id' element={ <CompEditEvaluaciones />} />
            <Route path='/ShowResultados' element={ <CompShowResultados />} />
            <Route path='/ShowResultadosF/:codigo_unico' element={ <CompShowResultadosF />} />
            <Route path='/editR/:id' element={ <CompEditResultados />} />
  
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
