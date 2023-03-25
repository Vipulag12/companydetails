import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState} from "react";
import { Transfer } from './FetchData';
import "./UserHeader.css"
export default function UserHeader() {
    const data = Transfer();
  console.log(data);
  const [user,setUser] = useState({});
  const params = useParams();

  useEffect(()=>{
    const ans = data.value.filter((ans)=>{
      return ans.id==params.id
    })
    setUser({...ans[0]});
  },[user])
  console.log(user);
  return (
   <>
   <section id='UserHeader'>
    <header id='header'>
        <h1>Profile</h1>
        <div id='userHeaderImg'>
            <img src={user.profilepicture} alt="" />
        <h6>{user.name}</h6>
        </div>
        
    </header>
   </section>
   <hr id='hr' />
   </>
  )
}
