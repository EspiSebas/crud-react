import React,{useState,useEffect} from 'react'
import axios from "axios";
import { useNavigate,Link } from 'react-router-dom'; 

const initialForm = {

    email:"",
    password:""
}

export const Login = () => {

    const url = "http://127.0.0.1:8000/api/auth/login";

    const navigate = useNavigate();
    const [form, setForm] = useState(initialForm);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post(url, form);
            if (response.status === 200) {
                localStorage.setItem('token', response.data.access_token);
                console.log(response)
                alert('Logging...');
                navigate("/home");
            } else {
                alert('Hubo un error al loguearse');
            }

        } catch (error) {
            alert(error);
        }

    }


  return (
    <div className='App'>
        
        <h3>Login</h3>
        <form onSubmit={handleSubmit} >
            <div class="mb-3">
                <label for="name" class="form-label">Email:</label><br></br>
                <input type='text' name='email' placeholder='Email' onChange={handleChange} value={form.email}/>
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Password:</label><br></br>
                <input type='password' name='password' placeholder='Password' onChange={handleChange} value={form.password} />
            </div>
            <div>
              <button className='btn btn-primary' type="submit"> Login</button> <br></br><br></br>
            </div>
            <div>
              <Link className='btn btn-danger' type="submit" to="/register">Register</Link> <br></br><br></br>
            </div>
        </form>
        
    </div>
  )
}
