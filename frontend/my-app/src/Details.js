import React, { useEffect, useState } from 'react';
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";

const Details = () => {
      const navigate = useNavigate();
    const [student,setStudent] = useState(); 

    useEffect(()=>{
          
             async function check(){
                const {data} = await axios.get(`/getallstudent`);
                setStudent(data.student)
             }
             check()

    },[]);
      const Delete = async(id)=>{

          await axios.delete(`/api/delete/${id}`);
          navigate("/details");

        //  setTimeout(()=>{
        //     //  navigate("/");
        //  },5000);
      }
  return (
    <div>

        <table>
             <thead>
                  <tr>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Address</th>
                     <th>Update</th>
                     <th>Delete</th>
                  </tr>
             </thead>
             <tbody>
                  {student && student.map((items)=>(
                      <tr key={items._id}>
                          <td>{items.name}</td>
                          <td>{items.email}</td>
                          <td>{items.address}</td>
                          <td><Link to={`/update/${items._id}`} >Update</Link></td>
                          <td><button onClick={()=>Delete(items._id)} >Delete</button></td>
                      </tr>
                  ))}
             </tbody>
        </table>
    </div>
  )
}

export default Details