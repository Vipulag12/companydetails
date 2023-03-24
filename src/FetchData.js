import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'
const DtaTransfer = createContext()
export const Transfer =()=> useContext(DtaTransfer);
export default function FetchData(props) {
    const [user,setUser] = useState([]);
    useEffect(()=>{
      fetch("https://panorbit.in/api/users.json")
      .then(res=>res.json())
      .then((result)=>{
          setUser(result.users);
          console.log(user);
      })
    },[])
  return (
    <div>
        <DtaTransfer.Provider value={{user}}>
        {props.children}
        </DtaTransfer.Provider>
    </div>
  )
}
