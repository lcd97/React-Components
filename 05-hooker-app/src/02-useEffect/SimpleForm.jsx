import { useEffect, useState } from 'react';
import {Message} from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'danycordero9',
        email: 'danycordero9@gmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState({
          ...formState,
          [name]: value
        })
    };


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
    
    <h1 className="text-center">Simple Form</h1>
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
    
    {
      (username == 'danycordero9') && <Message/>
    }

    </>
  )
}
