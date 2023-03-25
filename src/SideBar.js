import React from 'react'
import { NavLink } from 'react-router-dom'
import "./SideBar.css"
export default function SideBar() {
  return (
    <>
    <div id='sideBar'>
        <div id='data'>
       <NavLink id='head'><h3 >Profile</h3></NavLink>
       <NavLink id='head'><h3 >Posts</h3></NavLink> 
       <NavLink id='head'><h3 >Gallery</h3></NavLink> 
        <NavLink to="/Todo" id='head'><h3 >ToDo</h3></NavLink> 
        
        </div>
       
    </div>
    </>
  )
}
