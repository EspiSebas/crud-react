import React,{useState,useEffect} from 'react'
import axios from "axios";
import DataTable from "react-data-table-component";
import { CrudApp } from '../components/CrudApp';
import { NavBar } from '../components/NavBar';

{/*
const columns = [
    {
		name: 'id',
		selector: row => row.id,
	},
    {
		name: 'name',
		selector: row => row.name,
        
	},
    {
		name: "email",
		selector: row => row.email,
	},
    {
		name: 'number_phone',
		selector: row => row.number_phone,
        sortable:true
	}
]
*/}

export const Subject = () => {

  const url = "http://127.0.0.1:8000/api/subject";
  const namePage = "Subjects"
      return (
        
        <div className='App'>
          <>
            <NavBar></NavBar>
             <CrudApp url={url} namePage={namePage}></CrudApp>
          
          </>
        </div>
      );
}
