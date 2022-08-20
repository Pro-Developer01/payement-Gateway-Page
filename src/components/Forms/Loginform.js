import React from 'react'
import "./FormStyle.css"

export default function Forms() {
  return (
    <center>

    <div className="containerForm">
        <h3>Login</h3>
               <form action="">
               <div className="formsElements">
                    <label htmlFor="email"><b>Email</b></label><br />
                    <input type="email" placeholder='Email' id="email"/><br />
                    <label htmlFor="password"><b>Password</b></label> <br />
                    <input type="password" placeholder='Password' id='password'/><br />
                    <button type='submit' className='btn btn-primary my-4'>Login</button>
                </div>
               </form>
                 
           
    </div>

    </center>
  )
}
