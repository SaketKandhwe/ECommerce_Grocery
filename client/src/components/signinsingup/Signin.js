// Write an "rafce" then automatically  adding the function and export default
// This is a meaning of "rafce" is "React functional component with arrow function and export default"
import { useEffect, useState } from "react";
import React from "react";
import logoimage from "./logo.jpeg";
import "./account.css";
import Headers from "../Headers";
import { NavLink, useNavigate } from "react-router-dom"; //Page linked but without reload the page
import { Link } from "react-router-dom";
import "./LoginValidation";
import validation from "./LoginValidation";
import axios from "axios";
// import { TextField } from "@mui/material";
// import Passwordinput from "./Passwordinput";
//import for toggle
// import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import { IconButton } from "@mui/material";

// import jwt_decode from 'jwt-decode';



function Signin() {
  // const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword:false,
  });

  // toogle Password
  // const Passwordinput = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible);
  // };
//   const [values, setValue] = React.useState({
//     password: "",
//     showPassword: false,
// });
//passowrd
const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
    event.preventDefault();
};

const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
};
//end




  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    window.localStorage.setItem("isLogedIn",true);
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:7000/signup", values)
        .then(res => {
          if (res.data === "Success") {
            navigate("/cart");
          } else {
            alert("No record existed");
          }

          // console.log(res.data);
          //   localStorage.setItem('token',res.data.token);
          //   navigate('/cart')


        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
    <Headers />

    <section>
      <div className="log_container">
        <div className="log_header">
          <NavLink to="/">
            <img src={logoimage} alt="Logo" />
          </NavLink>
        </div>

        <div className="log_form">
          <form action="" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input_data input_user">
              <label htmlFor="">Username</label>
              
              <input
                // <TextField
                // type="text"
                // onChange={handleInput}
                // // label="Username"
                type="text"
                name="email"
                id="email"
                
        onChange={handleInput}
        // label="Username"
        // value={values.username}
              />
              {errors.email && (
              <span className="text-danger"> {errors.email}</span>
            )}
            </div>
            

            <div className="input_data input_password "  >
           
           
        
            <label htmlFor="">Password</label><br></br>
            <Input
                name="password"
                id="password"
                type={values.showPassword ? "text" : "password"}
                onChange={handleInput}

                // onChange={handlePasswordChange("password")}
                // value={values.password}
                
                inputProps={{ maxLength: 15 }}                         
                endAdornment={
                    <InputAdornment className="icon" position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                     </InputAdornment>
                }
                
            />
             {errors.password && (
              <span className="text-danger"> {errors.password}</span>
            )}
        </div>
            {/* <div className="input_data">
              <label htmlFor="">Password</label> */}

              {/* <input
                type={isVisible ? "text" : "password"}
                onChange={handleInput}
                name="password"
                id="password"
             
              /> */}
              
              {/* <button onClick={toggleVisibility}>
                {isVisible ? "Hide" : "Show"}
              </button> */}
            

              {/* type={isVisible ? "text" : "password"}
                onChange={handleInput}
                name="password"
                id="password"
                placeholder="Enter your password"
                InputProps={{ */}
              {/* // endAdornment: ( */}

              {/* <h1>Password Show</h1> */}
              {/* <Passwordinput /> */}
            {/* </div> */}
           

            <button type="submit" className="signin_btn">
              Continue
            </button>
          </form>
        </div>
        <div className="create_account">
          <p>New Customer</p>
          <Link to="/signup">
            <button>Create Your Account</button>
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}


export default Signin;