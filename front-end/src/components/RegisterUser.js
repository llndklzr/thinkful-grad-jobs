import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import { registerUser } from '../utils/apiFetcher';
import "../styles/styles.scss";
import handleSessionStorage from '../utils/handleSessionStorage';

export default function RegisterUser(){
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
    setIsError(null);
    setPasswordError(null);
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
      <div className="auth error-msg">
        <p>Please enter a valid email address.</p>
      </div>
    )
  }

  const passwordIsNotValid = () =>{
    return(
      <div className="auth error-msg">
        <p>Passwords do not match.</p>
      </div>
    )
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const abortController = new AbortController();
    validateEmail(form.username) ? setIsError(false) : setIsError(true);

    if(form.password === confirmPassword && form.password!==""){
      let err = false;
      await registerUser(form, abortController.signal)
        .then(user =>{
          handleSessionStorage(user);
        })
        .catch((res)=> {err = true; setErrors(res)});
      setConfirmPassword("");
      setPasswordError(false);
      setForm({...initialForm});
      if(!err){
        history.go(-1);
      }
    } else{
      setPasswordError(true);
    }
    return ()=>abortController.abort();
  }

  return(
    <div>
      <h3 className="auth page-header">Sign Up</h3>
      <form className="auth form-wrapper" onSubmit={submitHandler}>
          <div className="auth input-wrapper">
            <label>Email</label>
            <br/>
            <input 
              className={isError ? "auth input failure" : "auth input"}
              name="username" 
              type="text"
              value={form.username}
              onChange={changeHandler}
            />
          </div>
          {isError ? emailIsNotValid() : null}
          <div className="auth input-wrapper">
            <label>Password</label>
            <br/>
            <input
              className={passwordError ? "auth input failure" : "auth input"}
              name="password"
              type="password"
              value={form.password}
              onChange={changeHandler}
            />
          </div>
          <div>
            {passwordError ? passwordIsNotValid() : null}
          </div>
          <div className="auth input-wrapper">
            <label>Confirm Password</label>
            <br/>
            <input
              className={passwordError ? "auth input failure" : "auth input"}
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={conPassChangeHandler}
            />
          </div>
        </form>
        <div className="btn-wrapper">
          <button className="btn auth" onClick={submitHandler}>Submit</button>
        </div>
        <br />
        <div className="auth register-container">
          Already have an account?&nbsp;
          <Link to="/login">Sign in</Link>
        </div>
    </div>
  )
}