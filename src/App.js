
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Forms from './components/Forms/Forms';
import Loginform from './components/Forms/Loginform';


function App() {
  return (
    <>
       <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Signup' element={<Forms/>} />
          <Route path='/Login' element={<Loginform/> } />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
