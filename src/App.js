import './App.css';
import { CrudApp } from './components/CrudApp';
import { Propiedades } from './components/Propiedades';
import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Students } from './pages/Students';
import { Subject } from './pages/Subject';
import { Teachers } from './pages/Teachers';

function App() {
  
  return (
    <>
       {/*<Propiedades text="Esto es un componente" age={20} name="Sebastian" age1={20}/>*/}
        
        {/*<CrudApp></CrudApp> */}
        <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Students />} />
            <Route path="/subject" element={<Subject />} />
            <Route path="/teacher" element={<Teachers />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
