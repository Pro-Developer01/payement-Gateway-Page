import React from 'react'
import "./MethodStyle.css"

export default function Methods() {
    return (
        <div className='containerx'>
            <div className="PaymentMethod">
                Payment Method
            </div>
            <div className="content-row-1">
                <div className="Logos">
                  <img src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_960_720.png" height={"40px"}  alt="PaymentLogos" />
                </div>
                <div className="Logos">
                  <img src="https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg" height={"40px"}  alt="PaymentLogos" />
                </div>
                <div className="Logos">
                  <img src="https://1000logos.net/wp-content/uploads/2020/11/Discover-Logo.jpg" height={"35px"}  alt="PaymentLogos" />
                </div>
            </div>
            <div className="content-row-1">
                <div className="Logos">
                  <img src="https://1000logos.net/wp-content/uploads/2020/11/Discover-Logo.jpg" height={"40px"}  alt="PaymentLogos" />
                </div>
                <div className="Logos">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf4FRpH5lvshZDAZqBJCmrIymqE3L6deIR5OicdyXL&s" height={"40px"}  alt="PaymentLogos" />
                </div>
                <div className="Logos">
                  <img src="https://i0.wp.com/financebuddha.com/blog/wp-content/uploads/2016/12/23155635/UPI1.jpg?fit=945%2C709&ssl=1" height={"40px"}  alt="PaymentLogos" />
                </div>
            </div>
            <br />
            <div className="PaymentMethod">
                Delivery Method
            </div>
            <div className="content-row-1">
                <div className="Logos-Delivery">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/InPost_logo.svg/2560px-InPost_logo.svg.png" height={"40px"} width={"60px"}  alt="PaymentLogos" />
                  <span><b>$20.00</b></span>
                </div>
                <div className="Logos-Delivery">
                  <img src="https://e7.pngegg.com/pngimages/417/295/png-clipart-logo-dpdgroup-symbol-product-font-dpd-logo-angle-text-thumbnail.png" height={"40px"} width={"60px"}  alt="PaymentLogos" />
                  <span><b>$12.00</b></span>
                </div>
            </div>
            <div className="content-row-1">
                <div className="Logos-Delivery">
                  <img src="https://logos-world.net/wp-content/uploads/2020/08/DHL-Emblem.png" height={"40px"} width={"60px"}  alt="PaymentLogos" />
                  <span><b>$15.00</b></span>
                </div>
                <div className="Logos-Delivery">
                  <img src="https://cdn.mos.cms.futurecdn.net/SFJxCXKMZihnZsVnn3LoEk.jpg" height={"40px"} width={"60px"}  alt="PaymentLogos" />
                  <span><b>$10.00</b></span>
                </div>
            </div>
            

        </div>
    )
}
