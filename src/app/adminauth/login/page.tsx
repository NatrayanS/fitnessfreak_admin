"use client"
import React,{useState} from "react";
import '../auth.css';
import { ToastContainer, toast } from "react-toastify";

const SigninPage  = () => {
    const [email , setEmail]  = useState("");
    const [password , setPassword ]= useState("");

    const handleLogin = async () => {
        try{
        const response = await fetch (process.env.NEXT_PUBLIC_BACKEND_API + '/admin/login', {
          method : 'POST',
          headers: {
            'Content-Type': 'application/json',
        },
          body : JSON.stringify({ name, email, password }),
          credentials : 'include'
        });
        
        
        if(response.ok) {
            const data = await response.json();
          // Handle successfull signup, e.g., show a success message
          console.log("Admin login  successful", data);
    
          toast.success('Admin Login Successful', {
          position: toast.POSITION.TOP_CENTER,
        });
        window.location.href="/pages/addworkout";
       }else{
        // Handle signup error
        console.log('Admin login failed', response.statusText);
        toast.error('Admin Login Failed', {
          position : toast.POSITION.TOP_CENTER,
        })
       }
      }
      catch(error){
        toast.error('An error occurred during registration');
        console.error('An error occurred during registration', error)
      }
    
      return (
        <div className='frompage'>
          <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <input 
           type='password'
           placeholder='Password'
           value={password}
           onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Sign in</button>
        </div>
      )
    }
      }
    export default SigninPage;