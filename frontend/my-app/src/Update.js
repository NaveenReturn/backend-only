import React, { useEffect, useState } from 'react';
import {Link,useParams,useNavigate} from "react-router-dom";
import axios from "axios";

const Update = () => {
          const {id} = useParams();
          const navigate = useNavigate();
       const [name,setName] = useState();
       const [email,setEmail] = useState();
       const [address,setAddress] = useState();
   
      useEffect(()=>{

           async function check(){
                const {data} = await axios.get(`/getsingledata/${id}`);
                console.log(data)
                setName(data.userId.name);
                setEmail(data.userId.email);
                setAddress(data.userId.address);
           }
           check()
      },[])

    const handleSubmit = async(e)=>{
             e.preventDefault()
            
           const person = {
                name:name,
                email:email,
                address:address
           };
          await axios.put(`/api/update/${id}`,person);
          setTimeout(()=>{
            navigate("/details")
          },1000)
    }
  return (
    <div className='user_form d-flex justify-content-center align-items-center'>
          <form onSubmit={handleSubmit} className='p-3 form-border'  encType='multipart/form-data' >
                  <p className='text-center display-6 text-white'>Update</p>
              <div className='form_data'>
                  <label htmlFor='name_field' className='fs-5 text-white'>Enter Your Name</label>
                  <input  
                     type='text' 
                     className='form-control py-2'
                     placeholder='Enter Name.....'
                     name='name'
                     value={name}
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
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
              </div>
              <div className='form_data'>
                  <label htmlFor='password_field' className='fs-5 text-white'>Enter Your Address</label>
                  <input  
                    type='text'  
                    className='form-control py-2'
                    placeholder='Enter  Address......'
                    name='address'
                    value={address}
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

export default Update