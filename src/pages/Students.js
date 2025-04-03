import React,{useState,useEffect} from 'react'
import { CrudApp } from '../components/CrudApp';
import { NavBar } from '../components/NavBar';

export const Students = () => {
   const url = "http://127.0.0.1:8000/api/students";
   const namePage = "Students"
    return (
      
      <div className='App'>
        <div>
        <NavBar></NavBar>
        <CrudApp url={url} namePage={namePage}></CrudApp>
        </div>
      </div>
    );
  
}
