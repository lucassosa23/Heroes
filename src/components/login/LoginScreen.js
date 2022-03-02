import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import { useForm } from '../../Hooks/UseForm';
import { startGoogleLogin, startLoginEmailPassword } from '../actions/auth';



export const LoginScreen = () => {

  const dispatch = useDispatch();

  const {loading} = useSelector (state => state.ui);
 

  const [ formValues, handleInputChange] = useForm({  
    email: "nando.gil@gmail.com",
    password: "123456",
  })

  const {email, password} = formValues;
  //const navigate = useNavigate()

 const handleLogin = (e) => {
   e.preventDefault();
    //navigate("/marvel", {
      //replace: true
    //});
    dispatch(startLoginEmailPassword(email, password));
 }

 const handleLoginGoogle = ()=>{
   dispatch(startGoogleLogin());
 }
  return <div className='container mt-5'>
      <h1>Login Screen
      </h1>
      <hr/>
      <form onSubmit={handleLogin}>
        <input
        type="text"
        placeholder='Email'
        name="email"
        value={email}
        onChange={handleInputChange}
        />

        <input
        type="password"
        placeholder='Password'
        name='password'
        value={password}
        onChange={handleInputChange}
          />

        
      <button className='btn btn-primary'
      onClick={handleLogin}
      type="submit"
      disabled = {loading}
      >
        Login
      </button>
      </form>

      <div 
      onClick={handleLoginGoogle}>
        <button>Login con Google</button>
        
      </div>
      
      
  </div>;
};
