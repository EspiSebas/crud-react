import React,{useState,useEffect} from 'react'
import axios from "axios";
import DataTable from "react-data-table-component";
import { CrudTable } from '../components/CrudTable';
import { CrudApp } from '../components/CrudApp';


export const Students = () => {
   const url = "http://127.0.0.1:8000/api/students";
   const namePage = "Students"
    return (
      
      <div className='App'>
        <div>
        <CrudApp url={url} namePage={namePage}></CrudApp>
        </div>
      </div>
    );
  
}
