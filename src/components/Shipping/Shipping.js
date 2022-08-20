import React from 'react'
import "./ShippingStyle.css";
export default function Shipping() {
  return (
    <div className='containerx'>
            <div className="PaymentMethod">
               <h4>Shipping and Payment</h4>
            </div>
            <div className="content-row-1">
                <div  >
                  <button type="button" className="buttons" >LOG IN</button>
                </div>
                <div >
                  <button type="button" className="buttons" style={{background:"white",color:"black", border:"solid 1px grey"}}>SIGN UP</button>
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
                        <option value="Poland">poland</option>
                        <option value="Poland">poland</option>
                        <option value="Poland">poland</option>
                        </select>   
                </div>
               </form>
                 
            </div>
        </div>
    )
}