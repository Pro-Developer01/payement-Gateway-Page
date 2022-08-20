import React from 'react'
import "./ShippingStyle.css";
import { Link } from "react-router-dom";
export default function Shipping() {
  return (
    <div className='containerShipping'>
            
            <div className="content-row-1">
                <div  >
                 <Link to="/Login"> <button type="button" className="buttons" >LOG IN</button></Link>
                </div>
                <div >
                    <Link to="/SignUp">
                  <button type="button" className="buttons" style={{background:"white",color:"black", border:"solid 1px grey"}}>SIGN UP</button>
                  </Link>
                </div>  
            </div>
            <div className="ShippingInfo">
               Shipping Information
            </div>
            <div className="FormFields">
               <form action="">
                <div className="row1">
                    <input type="email" placeholder='Email'/>
               
                
                    <input type="text" placeholder='Address'/>
                </div>
                <div className="row1">
                    <input type="text" placeholder='First Name'/>
               
                
                    <input type="text" placeholder='City'/>
                </div>
                <div className="row1">
                    <input type="text" placeholder='Last Name'/>
               
                
                    <input type="number" placeholder='Postal Code / ZIP'/>
                </div>
                <div className="row1">
                    <input type="number" placeholder='Phone number'/>
                    <select name="country" id="country" className='country'>
                        <option value="Poland">Poland</option>
                        <option value="Poland">India</option>
                        <option value="Poland">America</option>
                        <option value="Poland">China</option>
                        <option value="Poland">Russia</option>
                        </select>   
                </div>
               </form>
                 
            </div>
        </div>
    )
}
