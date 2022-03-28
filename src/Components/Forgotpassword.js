import React from 'react'
import'./Forgotpassword.css'
import {Link} from 'react-router-dom'
export default function Forgotpassword() {
    return (
        <div classname="main">
            <div className="containerforgotpassword">
            <h2 classsname="p4"><b>Reset password</b></h2>
            <form classname="resetform">  
               <label>Input your registered email to reset your password</label><input id="i" type="email" placeholder="Email*" required/>
               <button id="btn" type="submit">submit</button>
               <label>if your email corresponds to a valid user,we will send a link to reset your password</label>
               <span class="account">Done here?<Link to='/Login'>login</Link></span>
              
            </form>
            </div>
        </div>
    )
}
