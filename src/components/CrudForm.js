import React,{useState,useEffect} from 'react'
import axios from "axios";


const studentForm = {
    name:"",
    email:"",
    number_phone:""
    
}

const subjectForm = {
  name:"",
  class_room:"",
  student_id:""
  
}

export const CrudForm = ({url, namePage}) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
      
      useEffect(() => {
        fetch("http://127.0.0.1:8000/api/students")
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

  const initialForm = (namePage == "Students") ? studentForm : subjectForm;

      
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(namePage == "Student"){
      if(!form.name || !form.email || !form.number_phone){
        alert('Please, send the information in the field');
        return ; 
      }
    }
  


    try {
    
      const response = await axios.post(url, form);
      if (response.status === 200) {
        console.log(form)
        alert('Formulario enviado con éxito');
      } else {
        alert('Hubo un error al enviar el formulario');
      }

    } catch (error){
      alert(error);
    }

  }

  const handleReset = (e) => {
    setForm(initialForm);
  }
  

  return (
        <div className='App'>
        
        <h3>Add {namePage}</h3>
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="name" class="form-label">Name:</label><br></br>
                <input type='text' name='name' placeholder='name' onChange={handleChange} value={form.name}/>
            </div>
            {
              (namePage == 'Students') ? (
                <>
                <div class="mb-3">
                    <label for="Email" class="form-label">Number of phone:</label><br></br>
                    <input type='number' name='number_phone' placeholder='number_phone' onChange={handleChange} value={form.number_phone}/>
                </div>
                <div class="mb-3">
                    <label for="Email" class="form-label">Email</label><br></br>
                    <input type='email' name='email' placeholder='email' onChange={handleChange} value={form.email} />
                </div>
              </>
              ):(
              <>
                 <div class="mb-3">
                <label for="text" class="form-label">Class Room:</label><br></br>
                <input type='text' name='class_room' placeholder='class_room' onChange={handleChange} value={form.class_room}/>
            </div>
            <div class="mb-3">
                <label for="text" class="form-label">Student:</label><br></br>
                <select class="form-select" value={form.student_id} onChange={handleChange} name='student_id'>
                {data.map((item) => {
                  return (
                    <option  key={item.id} value={item.id}>{item.name}</option>
                  )
                })
                }
                </select>
              
            </div>
              
              
              </>
              )

            }
           
            <div>
              <button className='btn btn-primary' type="submit"> Agregar</button> <br></br><br></br>
              
            </div>
        </form>
        
    </div>
    )
 
}