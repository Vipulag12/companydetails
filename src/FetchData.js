import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'
const DtaTransfer = createContext()
export const Transfer =()=> useContext(DtaTransfer);
export default function FetchData(props) {
  const [value,setValue] = useState([]);
  const fetchUser =()=>{
      fetch("https://panorbit.in/api/users.json")
      .then(res=>res.json()).then((result)=>{
          setValue(result.users);
      })
  }
  useEffect(()=>{
      fetchUser()
  },[])
  return (
    <div>
        <DtaTransfer.Provider value={{value}}>
        {props.children}
        </DtaTransfer.Provider>
    </div>
  )
}
