import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import { userAuth } from '../utils/apiFetcher';
import "../styles/styles.scss";

export default function RegisterPage(){
  const initialForm = {
    username: "",
    password: "",
  }
  const history = useHistory();
  
  let [confirmPassword, setConfirmPassword] = useState("");

  let [form, setForm] = useState({...initialForm});
  let [error, setErrors] = useState(null);
  let [isError, setIsError] = useState(false);
  let [passwordError, setPasswordError] = useState(false);

  const changeHandler= (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const conPassChangeHandler = (e) =>{
    setConfirmPassword(e.target.value);
  }

  function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());;
  }

  function emailIsNotValid(){
    return(
      <div className="error-msg">
        <p>Please enter a valid email address.</p>
      </div>
    )
  }

  const passwordIsNotValid = () =>{
    return(
      <div className="error-msg">
        <p>Passwords do not match.</p>
      </div>
    )
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const abortController = new AbortController();
    validateEmail(form.username) ? setIsError(false) : setIsError(true);

    if(form.password === confirmPassword && form.password!==""){
      await userAuth(form, "register", abortController.signal)
        .catch(setErrors) // set some error component
      setConfirmPassword("");
      setPasswordError(false);
      history.push(`/survey/${form.username}`)
      setForm({...initialForm});

    } else{
      setPasswordError(true);
    }
    
  }

  return(
    <div>
      <h3 className="page-header">Sign Up</h3>
      <form onSubmit={submitHandler}>
          <div className="input-wrapper">
            <label>Email</label>
            <br/>
            <input 
              className={isError ? "failure" : "none"}
              name="username" 
              type="text"
              value={form.username}
              onChange={changeHandler}
            />
          </div>
          {isError ? emailIsNotValid() : null}
          <div className="input-wrapper">
            <label>Password</label>
            <br/>
            <input
              className={passwordError ? "failure" : "none"}
              name="password"
              type="password"
              value={form.password}
              onChange={changeHandler}
            />
          </div>
          <div>
            {passwordError ? passwordIsNotValid() : null}
          </div>
          <div className="input-wrapper">
            <label>Confirm Password</label>
            <br/>
            <input
              className={passwordError ? "failure" : "none"}
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={conPassChangeHandler}
            />
          </div>
        </form>
        <div className="btn-wrapper">
          <button className="btn" onClick={submitHandler}>Submit</button>
        </div>
        <br />
        <div className="register-container">
          Already have an account?&nbsp;
          <Link to="/login">Sign in</Link>
        </div>
    </div>
  )
}