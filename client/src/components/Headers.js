
import React, { useContext,useState,useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "./style.css";
import logoimage from './logo.jpeg';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





const Headers = () => {
const {carts} = useSelector((state)=>state.allCart);
const[isLogedIn, setIsLogedIn]=useState(localStorage.getItem('isLogedIn')); 
const navigate=useNavigate();
const Logout=() =>{
    window.localStorage.removeItem("isLogedIn");
    navigate('/');
    setIsLogedIn(false);
}
//test

const Signin=()=>{
    navigate('/login');
    setIsLogedIn(true);
}

//avtar
const [userData, setUserData] = useState([]);

useEffect(() => {
  // Fetch user data from the API
  axios.get('http://localhost:7000/signup')
    .then((response) => {
      setUserData(response.data);
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
    });
}, []);
    


    return (
       
        <header>
        <nav>
            <div className="left">
                {/* <IconButton className='hamburgur'>
                    <MenuIcon style={{color:"#fff"}}/>
                </IconButton> */}

                <div className="navlogo">
                    <NavLink to="/"><img src={logoimage} alt="Logo" /></NavLink>
                </div>
                <h1 className='storename'>Bajrang Makhana Foodstuff</h1>
                {/* <div className="nav_searchbar">
        <input type="text" name="" id="" />
        <div className="search_icon">
          <SearchIcon id="search" />
        </div>
      </div> */}
            </div>
           


            <div className="right">
            <NavLink to="/cart" className="text-decoration-none text-light mx-2">
                <div id='ex4'>
                       <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                            <i class="fa-solid fa-cart-shopping"></i>
                     </span>
                    </div>
                    </NavLink>
                    <div className="mainavtar">
                        <div className="subavatar1">
                            <Button
                                id="fade-button"
                                // aria-controls={open ? 'fade-menu' : undefined}
                                // aria-haspopup="true"
                                // aria-expanded={open ? 'true' : undefined}
                                // onClick={handleClick}
                            >
                               {userData && userData.name ? (
                                    <Avatar className='avtar2'>{userData.name[0].toUpperCase()}</Avatar>) :(
                                        <Avatar className='avtar'></Avatar>
                                        )}
                            </Button>

               
                            
                        </div>
                       

                      
                    </div>
                    <div className='Login_btn'>
                    {isLogedIn?(
                        <button onClick={()=> Logout()} className='logout_button'   >
                        <strong> Logout</strong>
                         </button>
                    ):(
                        <button onClick={()=> Signin()} className='logout_button'  >
                        <strong> Login </strong>
                         </button>
                    )}  
                    </div>
               


            </div>


        </nav>
    </header>
    )
}

export default Headers