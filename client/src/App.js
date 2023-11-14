import Headers from './components/Headers';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import Sucess from './components/Sucess';
import Cancel from './components/Cancel';
import Signin from './components/signinsingup/Signin';
import Signup from './components/signinsingup/Signup';
import CircularProgress from '@mui/material/CircularProgress';
import React, {useState, useEffect} from 'react';
import OrderTracking from './components/map/Map';


function App() {
  const [data, setData] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setData(true)
    }, 2000)
  }, [])
  const login = window.localStorage.getItem("isLogedIn");
  return (
    <>
   {
    data ? (
      <>
     
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/login' element={<Signin/>}/>
      <Route path="/signup" element={<Signup />} />
      <Route  path='/cart' element={<CartDetails />}/>
      <Route  path='/sucess' element={<Sucess />}/>
      <Route  path='/cancel' element={<Cancel />}/>      
      <Route path='/yourorder' element={<OrderTracking />}/>
     </Routes>
     <Toaster />
     </>
     ):(
          <div className="circle">
            <CircularProgress color="secondary"/>
            <h2>Loding... </h2>
          </div>
        )
   
    }
    </>
   
    
  );
}

export default App;