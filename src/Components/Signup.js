import React ,{useState}from 'react'
import'./signup.css'
import {useNavigate} from 'react-router-dom'
import {signup} from '../Redux/Actions/Auth'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import image from './images/businessman-with-app-delivery-tracking-business-technology-concept_70921-715.webp'
import {Link} from 'react-router-dom'
export default function Signup() {
    const Navigate=useNavigate()
    const dispatch=useDispatch()
    // const [username,setUsername]=useState("")
    // const [fullname,setFullname]=useState("")
    // const [phone_number,setPhone_number]=useState("")
    // const [email,setEmail]=useState("")
    // const [password,setPassword]=useState("")
    const [user,setUser]=useState(
        {
            username:"",
            fullname:"",
            phone_number:"",
            email:"" ,
            password:""
        }

    )
    function handleSubmit(e){
        e.preventDefault();
         
   dispatch(signup(user.username,user.fullname,user.phone_number,user.email,user.password)).then (()=>
         {
             console.log(user)
             Navigate("/Login")
         })
         .catch((message)=>{
             console.log(message);
         })
    }
    function onChangeMethod (e){
        setUser(prev=>({
            ...prev,[e.target.name]: e.target.value,
           
        }))
    }
    return (
        <div classname="main">
            <div className="container">
            <img id="image1" src={image}/>
            <h2 classname="p4"><b>Send it sign up</b></h2>
            <form classname="signupform" onSubmit={handleSubmit}>  
               <label>Username</label><input id="signup" type="text" placeholder="Enter username*" name="username" value={user.username} onChange={onChangeMethod} required/>
               <label>fullname</label><input id="signup" type="text" placeholder="Enter fullname*"  name="fullname" value={user.fullname} onChange={onChangeMethod}  required/>
               <label>Phone number</label><input id="signup" type="tel" placeholder="Enter phone number*" name="phone_number" value={user.phone_number} onChange={onChangeMethod}  required/>
               <label>Email</label><input id="signup" type="email" placeholder="Enter email*" name="email" value={user.email} onChange={onChangeMethod}  required/>
               <label>password</label><input id="signup" type="password" placeholder="Enter password*" name="password" value={user.password} onChange={onChangeMethod} required/>
               <button id="btn" type="submit">signup</button>
               <span class="account">Already have an account?<Link to='/Login'>login</Link></span>
            </form>
            </div>
        </div>
    )
}
