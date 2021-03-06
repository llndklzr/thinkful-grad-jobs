import React, {useState} from "react";
import { useHistory, Link } from "react-router-dom";
import { loginUser } from "../utils/apiFetcher";
import handleSessionStorage from "../utils/handleSessionStorage";
import DLBtn from "../components/DLBtn";


export default function LoginUser(){
  const initialForm = {
    username: "",
    password: ""
  }
  const history = useHistory();

  let [form, setForm] = useState({...initialForm});
  let [error, setError] = useState(null);

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setError(null);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    let err = false;
    const abortController = new AbortController();
    await loginUser(form, abortController.signal)
      .then(user =>{
        handleSessionStorage(user);
      })
      .catch(res=>{
        setError(res);
        err = true;
      });

    if(!err){
      history.push("/new-story");
    }
  }
  

  const errorMessage =<p className="auth error-msg top">{error?.message}</p>
  

  return (
    <div className="auth page-wrapper">
      <h3 className="auth page-header">Welcome Back</h3>
      <span>Enter your account info to edit your story.</span>
      <form className="auth form-wrapper" onSubmit={submitHandler}>
        {error ? errorMessage : null}
        <div className="auth input-wrapper">
          <label>Email</label>
          <br/>
          <input
            className={error ? "auth input failure" : "auth input"}
            name="username" 
            type="text"
            value={form.username}
            onChange={changeHandler}
          />
        </div>
        <br />
        <div className="auth input-wrapper">
          <label>Password</label>
          <br/>
          <input
            className={error ? "auth input failure" : "auth input"}
            name="password"
            type="password"
            value={form.password}
            onChange={changeHandler}
          />
        </div>
        <br />
      </form>
      <div className="btn-wrapper">
        <DLBtn text="Sign In" clickHandler={submitHandler}/>
      </div>
      <br/>
      <div className="auth register-container">
          Click&nbsp;
          <Link className="auth sign-in" to="/register">here</Link>
          &nbsp;if you need to create an account.
        </div>
    </div>
  );
}