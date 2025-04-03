import React from 'react'
import { CrudApp } from '../components/CrudApp';

export const Teachers = () => {
   const url = "http://127.0.0.1:8000/api/teacher";
   const namePage = "Teachers"
        return (
          <div className='App'>
            <div>
            <CrudApp url={url} namePage={namePage}></CrudApp>
            </div>
          </div>
        );
}
