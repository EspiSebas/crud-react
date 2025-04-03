import React,{useState,useEffect} from 'react';
import axios from "axios";
import DataTable from "react-data-table-component";

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



export const CrudTable = ({ infoSend, url, namePage }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
   
    
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, []);


    async function deleteStudent(data){
      try{
          const response = await axios.delete(`${url}/${data}`)
          fetch(url)
          .then((response) => response.json())
          .then((data) => {
            alert('Removed Correctly !!');
            setData(data);
            setLoading(false);
          })
        
      }catch(error){
        alert(error);
      }
      
      
    }

    
    function sendInfo(id){
      try{
        const info = axios.get(`${url}/${id}`)
        .then((info)=>{
          infoSend(info.data);
          
        })
        
      }catch(error){
          alert(error);
      }
    }

    
    
   
    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;
  

return (
      <div className='App'>
        
        <div>
        <h1>{namePage}</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
            {
              (namePage == 'Students') ? (
              <>
                 <th scope="col">Email</th>
                 <th scope="col">Number Phone</th>
              </>
              ):(
              <>
                  <th scope="col">ClassRoom</th>
                  <th scope="col">Student</th>
              
              </>
              )
            }
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
             {
              data.map((item) => {
                return (<tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  {
              (namePage == 'Students') ? (
              <>
                 <td>{item.email}</td>
                 <td>{item.number_phone}</td>
              </>
              ):(
              <>
                  
                  <td>{item.class_room}</td>
                  <td>{(item.student_id)}</td>
              
              </>
              )
            }
                  <td>
                    <button className='btn btn-primary' onClick={() => sendInfo(item.id)}>Edite</button>
                    <button className='btn btn-danger'  onClick={() => deleteStudent(item.id)}>Delete</button>
                  </td>
                </tr>)
              })

             }
            
              
            </tbody>
          </table>
        </div>
      </div>
    );

}
