import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const initialForm = {
    name: "",
    email: "",
    password: ""
}

export const Register = () => {
    const url = "http://127.0.0.1:8000/api/auth/register";

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
            if (response.status === 201) {
                console.log(response)
                alert('Formulario enviado con éxito');
                navigate("/");
            } else {
                alert('Hubo un error al enviar el formulario');
            }

        } catch (error) {
            alert(error);
        }


    }





    return (
        <div className='App'>

            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label">Name:</label><br></br>
                    <input type='text' name='name' placeholder='name' onChange={handleChange} value={form.name} />
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Email:</label><br></br>
                    <input type='text' name='email' placeholder='email' onChange={handleChange} value={form.email} />
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Password:</label><br></br>
                    <input type='password' name='password' placeholder='password' onChange={handleChange} value={form.password} />
                </div>
                <div>
                    <button className='btn btn-primary' type="submit" >Login</button> <br></br><br></br>

                </div>
            </form>

        </div>
    )
}
