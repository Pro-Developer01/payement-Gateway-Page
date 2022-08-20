import React from 'react'
import "./NavbarStyle.css"

export default function Navbar() {
  return (
    // <nav className="navbar navbar-expand-lg bg-light">
      <div className="containerNav">

      <div className="logoNav">
        <img src="https://www.logolynx.com/images/logolynx/90/90cdeb260df361a39d97540d9c75a814.png" height={"36px"} alt="" />
        <span style={{fontSize:"22px"}}>E-Shop</span>
      </div>
      <div className="MiddleNav">
        <a href="/"><span>Men</span></a>
        
        <a href="/"><span>Child</span></a>
        
        <a href="/"><span>Women</span></a>
        
      </div>
      <div className="lastNav">
        <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" height={"24px"} alt="" />
        <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" height={"24px"} alt="" />
        <img src="https://static.thenounproject.com/png/4693049-200.png" height={"30px"} alt="" />
       
      </div>
      </div>
// </nav>
  )
}
