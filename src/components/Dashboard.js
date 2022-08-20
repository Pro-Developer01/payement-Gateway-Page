import React from 'react'
import '../App.css';

import Cart from '../components/Cart/Cart';
import Methods from '../components/Methods/Methods';
import Breadcum from '../components/Breadcum/Breadcum';



import Footer from './Footer/footer';
import Shipping from '../components/Shipping/Shipping';



export default function Dashboard() {
  return (
    <>
  
    <Breadcum />
   
      <div className="grid-container">
   
   <div className="gridItem1"> <Shipping/> </div>

      
    <div className="gridItem2"><Methods/></div>
    <div className="gridItem3"><Cart/></div>
   </div>
   <Footer />
    </>
   
  )
}
