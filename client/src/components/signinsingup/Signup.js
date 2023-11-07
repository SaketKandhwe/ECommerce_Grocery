// Write an "rafce" then automatically  adding the function and export default
// This is a meaning of "rafce" is "React functional component with arrow function and export default"
import "./SignupValidation";
import validation from "./SignupValidation";
import React, { useState } from "react";
import logoimage from "./logo.jpeg";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
// import Passwordinput from "./Passwordinput";
//eye Icon
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import { IconButton } from "@mui/material";
//end


// const Signup = () => {
function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  // toogle Password
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
    event.preventDefault();
};

const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
};
  // const Passwordinput = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible);
  // };

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
    if (
      (errors.name === "") & (errors.email === "") &&
      errors.mobile === "" &&
      errors.password === ""
    ) {
      axios
        .post("http://localhost:7000/signin", values)
        .then((res) => {
          console.log(res);
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Validate the password and confirm password.
  //   if (password !== confirmPassword) {
  //     // Display an error message.
  //     alert('Password and confirm password do not match.');
  //     return;
  //   }
  //   else{
  //     alert("You have successfully created your account.");
  //     return;
  //   }
  //   // Submit the form to the server.
  //   // ...
  // };

  // const [value, setValue] = useState('');

  // const onInput = (event) => {
  //   setValue(event.target.value.replace(/[^0-9]/g, ''));
  // }

  return (
    <>
      <section>
        <div className="log_container">
          <div className="log_header">
            <NavLink to="/">
              <img src={logoimage} alt="Logo" />
            </NavLink>
          </div>
          <div className="log_form">
            <form onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <div className="input_data input_reg">
                <label htmlFor="">Your Name</label>
                <input
                  type="text"
                  onChange={handleInput}
                  name="name"
                  id="name"
                />
                {errors.name && (
                  <span className="text-danger"> {errors.name}</span>
                )}
              </div>

              <div className="input_data input_reg">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  onChange={handleInput}
                  name="email"
                  id="email"
                />
                {errors.email && (
                  <span className="text-danger"> {errors.email}</span>
                )}
              </div>

              <div className="input_data input_reg">
                <label htmlFor="">Mobile</label>
                <input
                  type="text"
                  onChange={handleInput}
                  name="mobile"
                  id="mobile"
                />
                {errors.mobile && (
                  <span className="text-danger"> {errors.mobile}</span>
                )}
              </div>

              <div className="input_data  input_password">
                {/* <label htmlFor="">Password</label> */}
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
                {/* <input
                  type={isVisible ? "text" : "password"}
                  onChange={handleInput}
                  name="password"
                  id="password"
                /> */}
                {/* <Passwordinput /> */}
                {/* <button onClick={toggleVisibility}>
                  {isVisible ? "Hide" : "Show"}
                </button> */}
                {errors.password && (
                  <span className="text-danger"> {errors.password}</span>
                )}
              </div>
              

              <button type="submit" className="signin_btn">
                Continue
              </button>
              <div className="signin_info">
                <p>Already have an account?</p>
                <Link to="/login">Signin</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;