import React ,{useState}from 'react'
import './Createparcel.css'
import Homenav from './Homenav'
import {createparcel} from '../Redux/Actions/Parcels'
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'

export default function Createparcel() {
    const Navigate=useNavigate()
    const dispatch=useDispatch()

   const {User:currentUser}=useSelector((state)=>state.Auth)
  const    sender_id=currentUser.user.id
    const [parcel,setParcel]=useState(
        {
            description: "",
            sender_number: "",
            receiver_number: "",
            start_location: "",
            end_location: "",
            sender_id:sender_id
        }

    )
    function handleSubmit(e){  
        e.preventDefault();    
      dispatch(createparcel(parcel.description,parcel.sender_number,parcel.receiver_number,parcel.start_location,parcel.end_location,parcel.sender_id))
              console.log(parcel)
            //   console.log(sender_id)
            //  Navigate("/Home")

    }
    function onChangeMethod (e){
        setParcel(prev=>({
            ...prev,[e.target.name]: e.target.value,
           
        }))
    }
    return (
        <div classname="main">
            <div id="nav"><Homenav/></div> 
            <div className="containercreateparcel">
            <h2 className="p4"><b>Create a parcel</b></h2>
            <form className="parcelform" onSubmit={handleSubmit} >  
               <label>Description</label><input id="createparcel" type="description" placeholder="Description" name="description" value={parcel.description} onChange={ onChangeMethod} required/>
               <label>sender phone number</label><input id="createparcel" type="tel" placeholder="eg +2547.." name="sender_number" value={parcel.sender_number} onChange={ onChangeMethod} required/>
               <label>Receiver Phone number</label><input id="createparcel" type="tel" placeholder="+2547.." name="receiver_number" value={parcel.receiver_number} onChange={ onChangeMethod}  required/>
               <label>Start Location</label><input id="createparcel" type="text" placeholder="eg Nyeri" name="start_location" value={parcel.start_location} onChange={ onChangeMethod}  required/>
               <label>End Location</label><input id="createparcel" type="text" placeholder="eg Nyeri" name="end_location" value={parcel.end_location} onChange={ onChangeMethod}  required/>
               <button id="btn" type="submit" >submit</button>
               
            </form>
            </div>
        </div>
    )
}