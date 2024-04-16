import React,{useState} from 'react';
import axios from 'axios';

export const Uploading = () => {

  const [userData,setUserdata] = useState({
     images:""
  })

  const handlePhoto = (e) => {
    setUserdata({...userData, images: e.target.files});
}

  const handleSubmit = async(e)=>{
        e.preventDefault();
        const formDataa = new FormData();

         for(const key of Object.keys(userData.images)){
              formDataa.append("images",userData.images[key])
              console.log(key)
         }
        // console.log(Object.keys(userData.images))
          await axios.get("http://127.0.0.1:8000/api/v1/login");
        // const {data} = await axios.post(`/api/v1/addata`,formDataa,{headers:{'Content-Type':'multipart/form-data'}});
        // console.log(data)
  }
  return (
    <div>

        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <label>Enter Your Profile</label>
            <input type='file' multiple name='avatar' onChange={handlePhoto} id='avatar' />
            <input type='submit' value={"submit"} />
        </form>
        
    </div>
  )
}
