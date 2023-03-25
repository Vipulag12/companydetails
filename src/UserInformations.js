import React from 'react'
import SideBar from './SideBar'
import UserHeader from './UserHeader'
import UserInfo from './UserInfo'
// import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import "./UserInformations.css"
export default function UserInformations() {
  return (
    <>
    <UserHeader/>
    <div id='UserInfo'>
    <SideBar/>
    <UserInfo/>
    </div>
    
    </>
   
  )
}
