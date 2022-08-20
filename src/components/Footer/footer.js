import React from 'react'
import "./footerStyle.css"
export default function footer() {
  return (
  <div className="containerFooter">
    <div className="BackButton">
    <img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" height={"25px"} style={{
        marginRight: "25px",
    }} alt="" />
    <span>Back</span>
    </div>
    <div className="FooterLast">
                <div >
                  <button type="button" className="buttonsFoo" style={{background:"white",color:"black", border:"solid 1px black", opacity:"1"}}>COUNTINUE SHOPPING</button>
                </div>
                <div  >
                  <button type="button" className="buttonsFoo" >PROCEED TO PAYMENT</button>
                </div>
    </div>
  </div>
  )
}
