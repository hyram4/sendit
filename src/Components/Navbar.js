import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'

export default function Navbar() {
    const Navigate=useNavigate()
       const dispatch=useDispatch()
    return (
        <div classname="one">
         <div id="container2">
         <Link to='/Login' style={{ textDecoration: 'none' }}>login</Link>
         <Link to='/Signup' style={{ textDecoration: 'none' }}>signup</Link>
         </div>
        </div>
    )
}
