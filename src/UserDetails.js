import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./UserDetails.css"
function UserDetails() {
    const [data,setData] = useState([]);
    const fetchUser =()=>{
        fetch("https://panorbit.in/api/users.json")
        .then(res=>res.json()).then((result)=>{
            setData(result.users);
        })
    }
    useEffect(()=>{
        fetchUser()
    },[])
  return (
    <>
    <div id='UsersDetails'>
      <div id='users'>
      <h5>Select an Account</h5>
      <div id='datas'>
      {data.map((ans)=>(
        <>
         <div id="container">
 <NavLink to={`UserDetails/${ans.id}`}>
 <img id='images' src={ans.profilepicture} alt="" />
  </NavLink>  
 <h4 id='user_name'>{ans.name}</h4>
 </div>
 <hr/> 
        </>
    ))}
        </div>
        </div>
    </div>
    
    </>
    
  )
}

export default UserDetails

{}