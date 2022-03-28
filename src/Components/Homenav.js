import React from 'react'
import './Homenav.css'
import {Link} from 'react-router-dom'
import {logout} from '../Redux/Actions/Auth'
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Homenav() {
    const Navigate=useNavigate()
       const dispatch=useDispatch()
       const logout=()=>{
       dispatch(logout())}
       const notify = ()=>{
        toast('You have successfully logged out', {position: toast.POSITION.TOP_CENTER,autoClose:false})
    }
    return (
        <div classname="one">
         <div id="container2">
         <Link id="linky" to='/Home'>Home</Link>
         <Link id="linky" to='/Createparcel'>Create a parcel</Link>
         <Link id="linky" to='/History'>History</Link>
         <Link id="linky" to='/Trackparcel'>Track parcel</Link>
         <div id='logout'>  <Link id="linky" to='/Logout' onClick={logout,notify} >Logout</Link></div>
         </div>
         
        </div>
    )
}