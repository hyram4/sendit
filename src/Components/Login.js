import React ,{useState}from 'react'
import'./login.css'
import {login} from '../Redux/Actions/Auth'
import axios from 'axios'

import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import image from './images/businessman-with-app-delivery-tracking-business-technology-concept_70921-715.webp'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
export default function Login() {
       const Navigate=useNavigate()
       const dispatch=useDispatch()
    //    const email=useState("")
    //    const password=useState("")
       const [user,setUser]=useState(
           {
               email: "" ,
               password: ""
           }

       )
              
    const notify = ()=>{
        toast('You have successfully logged in', {position: toast.POSITION.BOTTOM_RIGHT})
    }
    const errorNotify = (g)=>{
        toast('Either your password  or email is incorrect or the user doesnot exist', {position: toast.POSITION.BOTTOM_RIGHT})
    }

    //    const[loading,setLoading]=useState(false)
       function handleSubmit(e){
           e.preventDefault();
       
            //  setLoading(true);
      dispatch(login(user.email,user.password)).then (()=>
            {
                // setLoading(true);
                Navigate("/Home")
              notify();
            })
            .catch((g)=>{
                // setLoading(false);
                console.log(g);
                errorNotify();
            })
       }
       function onChangeMethod (e){
           setUser(prev=>({
               ...prev,[e.target.name]: e.target.value,
              
           }))
       }
 
    return (
        <div classname="main">
            <div className="containerlogin">
             <img id="image1" src={image}/>
            <h2 classsname="p4"><b>Log in to send it</b></h2>
            <form classname="loginform" onSubmit={handleSubmit}>  
               <input id="i" type="email" placeholder="Enter email*" name="email" value={user.email} onChange={ onChangeMethod} required/>
               <input id="i" type="password" placeholder="Enter password*" name="password" value={user.password} onChange={ onChangeMethod} required/>
               <label><input id="checkbox" type="checkbox"/>Remeber me </label>
               <span class="forgotpassword"><Link to='/Forgotpassword'>forgot password?</Link></span>
               <button onClick={handleSubmit} id="btn" type="submit">login</button>
               <span class="account">Need to create an account?<Link to ='Signup'>sign up</Link></span>
            </form>
            </div>
        </div>
    )
}
