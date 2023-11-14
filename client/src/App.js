import Headers from './components/Headers';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import Sucess from './components/Sucess';
import Cancel from './components/Cancel';
import Map from './components/map/Map';

function App() {
  return (
    <>
     <Headers />
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CartDetails />}/>
      <Route  path='/sucess' element={<Sucess />}/>
      <Route  path='/cancel' element={<Cancel />}/>      
      <Route path='/yourorder' element={<Map />}/>
     </Routes>
     <Toaster />
    </>
  );
}

export default App;