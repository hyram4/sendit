import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Homenav from './Homenav'
import Createparcel from './Createparcel'
import styles from './Homepage.module.css'
import {useDispatch,useSelector} from 'react-redux'
import image from './images/courier-delivering-order-customer-door-man-getting-parcel-box-package-flat-vector-illustration-postman-shipping-service_74855-8309.webp'
export default function Homepage() {
  const {User:currentUser}=useSelector((state)=>state.Auth)
    return (
        
     <div classname={styles.maincontainer}>
     <div id={styles.nav}><Homenav/></div> 
      <h1>welcome back <span>{currentUser.user.username}</span></h1>
     <div id={styles.main}>
     
      <div id={styles.desc}><h1>Send it fast delivery</h1><p> Need to send a parcel? We offer the the best delivery  services in kenya.We are reliable and transparent and our customers are our number one priority.<br></br><b>You select,We collect and deliver!</b></p>
       <button id={styles.contactus} type="submit">Make an order</button>
       
     </div>
      <div classname={styles.img}> <img src={image}/></div>
     </div>
     </div>
    
      
    )
}
