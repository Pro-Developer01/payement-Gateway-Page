
import './App.css';
import Breadcum from './components/Breadcum/Breadcum';
import Cart from './components/Cart/Cart';
import Methods from './components/Methods/Methods';
import Navbar from './components/Navbar/Navbar';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <>
   <Navbar/>
   <Breadcum/>
   <div className="grid-container">
    <div className="gridItem1">  <Shipping/></div>
    <div className="gridItem2"><Methods/></div>
    <div className="gridItem3"><Cart/></div>
   </div>
   
   
 
    </>
  );
}

export default App;
