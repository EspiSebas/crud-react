import './App.css';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import { Students } from './pages/Students';
import { Subject } from './pages/Subject';
import { Teachers } from './pages/Teachers';
import { Index } from './pages/Index';
import { FormRegister } from './pages/FormRegister';
import { Home } from './pages/Home';

function App() {
  
  return (
    <>
       {/*<Propiedades text="Esto es un componente" age={20} name="Sebastian" age1={20}/>*/}
        
        {/*<CrudApp></CrudApp> */}
        <Router>
        <div>
          <Routes>
            <Route path='/' element={ <Index></Index>}/>
            <Route path="/students" element={<Students />} />
            <Route path="/subject" element={<Subject />} />
            <Route path="/teacher" element={<Teachers />} />
            <Route path="/register" element={<FormRegister/>}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
