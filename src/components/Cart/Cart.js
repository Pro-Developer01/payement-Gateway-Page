import React from 'react';
import "./CartStyle.css";

export default function Cart() {
  return (
    <div className='containerx'>
        <div className="title">
            Your cart
        </div>
        <div className="content">
            <div className="products">
               <div className="item1">
               <img src="https://manofmany.com/wp-content/uploads/2019/03/10-Most-Famous-Male-Models-of-All-Time-Lucky-Blue-Smith-3.jpg" height={"60px"} width={"60px"} style={{
                borderRadius:"33px"
               }} alt="not found" />
               <div className="Product-desc">
                <span>T-shirt</span>
                <span>Summer Vibes</span>
                <span style={{fontSize:"11px", color:"#9f9f9f"}}>#267838</span>
               </div>
               <span>$89.99</span>


                </div> 
               <div className="item1">
               <img src="https://img.freepik.com/free-photo/vertical-shot-handsome-man-holding-his-chin-with-arm-against-gray-wall_181624-45623.jpg?w=2000" height={"60px"} width={"60px"} style={{
                borderRadius:"33px"
               }} alt="not found" />
               <div className="Product-desc">
                <span>Basic Slim</span>
                <span>Fit T-Shirt</span>
                <span style={{fontSize:"11px", color:"#9f9f9f"}}>#216216</span>
               </div>
               <span>$69.99</span>


                </div> 
                <div className="TotalCost">
                  <span>Total Cost</span>
                  <span><b>$159.98</b></span>
                </div>
                <div className="FreeShipping">
                  <img src="https://www.iconpacks.net/icons/1/free-truck-icon-1058-thumb.png" alt="Truck" height={"30px"} width={"30px"} />
                  <span style={{width:"61%"}}>You are<b>$30.02</b> away from Free Shipping!</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}
