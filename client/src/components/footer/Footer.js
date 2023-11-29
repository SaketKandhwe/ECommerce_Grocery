import React from 'react'
import './footer.css'
import logoimage from './logo.jpeg';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    const year = new Date().getFullYear();
    console.log(year);
    return (
        <footer>
            <div className='footer_container'>
                <div className='footer_details_one'>
                    <h3>About Us</h3>
                    <div className="links">
                        <NavLink to="#" className="onedata">About Us</NavLink><br />
                        <NavLink to="#" className="onedata">Contact US</NavLink><br />
                        <NavLink to="#" className="onedata">Terms and Conditions</NavLink><br />
                    </div>
                </div>
                <div className='footer_details_one'>
                    <h3>Get In Touch</h3>
                    <div className="links">
                        <NavLink to="https://www.instagram.com/thegyansabha/" className="onedata"><InstagramIcon /></NavLink>
                        <NavLink to="https://www.facebook.com/thegyansabha" className="onedata"><FacebookIcon /></NavLink>
                    </div>
                </div>
                <div className='footer_details_one'>
                    <h3>Address</h3>
                    <p>Tower Chowk, Ashapur, Benipur, Bihar, 847103</p>
                </div>
            </div>
            <div className='lastdetails'>
                <img src={logoimage} alt="Logo" />
                <p>© 2023 All rights reserved. Bajrang Makhana Foodstuff</p>
            </div>
        </footer>
    )
}

export default Footer
