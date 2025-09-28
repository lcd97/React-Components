import { useEffect } from 'react';
import {Message} from './Message';
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {
  
    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
      username: '',
      email: '',
      password: ''
    });

    useEffect(() => {
      // console.log("useEffect called!");
    }, []);

    useEffect(() => {
      // console.log("formSate called!");
    }, [formState]);

    useEffect(() => {
      // console.log("email called!");
    }, [email]);

  return (
    <>
    
    <h1 className="text-center">Formulario con custom hook</h1>
    <hr/>

    <input 
      type="text" 
      className="form-control mt-2" 
      placeholder="Username" 
      name="username"
      value={username}
      onChange={onInputChange}
    />

    <input 
      type="email" 
      className="form-control mt-2" 
      placeholder="danycordero9@gmail.com" 
      name="email"
      value={email}
      onChange={onInputChange}
    />

    <input 
      type="password" 
      className="form-control mt-2" 
      placeholder="Contraseña" 
      name="password"
      value={password}
      onChange={onInputChange}
    />
    

    <button
      className="btn btn-primary mt-2"
      onClick={onResetForm}>
      Borrar
    </button>

    {
      (username == 'danycordero9') && <Message/>
    }

    </>
  )
}
