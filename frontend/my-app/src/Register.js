import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Register = () => {
          
       const [name,setName] = useState("");
       const [email,setEmail] = useState("");
       const [password,setPassword] = useState("");
       const [address,setAddress] = useState("");
   


    const handleSubmit = async(e)=>{
             e.preventDefault()
            
           const person = {
                name:name,
                email:email,
                password:password,
                address:address
           };
          await axios.post(`/api/register`,person)
    }
  return (
    <div className='user_form d-flex justify-content-center align-items-center'>
          <form onSubmit={handleSubmit} className='p-3 form-border'  encType='multipart/form-data' >
                  <p className='text-center display-6 text-white'>Register</p>
              <div className='form_data'>
                  <label htmlFor='name_field' className='fs-5 text-white'>Enter Your Name</label>
                  <input  
                     type='text' 
                     className='form-control py-2'
                     placeholder='Enter Name.....'
                     name='name'
                     onChange={(e)=>setName(e.target.value)}
                     />
              </div>

              <div className='form_data'>
                  <label htmlFor='email_field' className='fs-5 text-white'>Enter Your Email</label>
                  <input  
                    type='email'  
                    className='form-control py-2'
                    placeholder='Enter Email..........'
                    name='email'
                    onChange={(e)=>setEmail(e.target.value)}
                    />
              </div>
              <div className='form_data'>
                  <label htmlFor='password_field' className='fs-5 text-white'>Enter Your Password</label>
                  <input  
                    type='password'  
                    className='form-control py-2'
                    placeholder='Enter Password......'
                    name='password'
                    onChange={(e)=>setPassword(e.target.value)}
                    />
              </div>
              <div className='form_data'>
                  <label htmlFor='password_field' className='fs-5 text-white'>Enter Your Address</label>
                  <input  
                    type='text'  
                    className='form-control py-2'
                    placeholder='Enter  Address......'
                    name='address'
                    onChange={(e)=>setAddress(e.target.value)}
                    />
              </div>
              <div className='form_data d-flex flex-row-reverse'>
                     <p><Link to={"/login"}>Sign In</Link></p>
                 </div>
               <div className='form_data  p-2'>
                   <input  
                   type='submit' 
                     className='btn btn-success form-control'
                    />
               </div>
          </form>
    </div>
  )
}

export default Register