import React , {useState} from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../utils/apiFetcher";
import "../styles/styles.scss";

export default function LoginUser(){
  const initialForm = {
    username: "",
    password: ""
  }
  const history = useHistory();
  let [form, setForm] = useState({...initialForm});
  let [error, setError] = useState(null);

  const changeHandler= (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }
  

  const submitHandler = async (e) => {
    e.preventDefault();
    const abortController = new AbortController();
    await loginUser(form, abortController.signal)
      .then(user =>{
        sessionStorage.setItem("user", user.passport.user);
        sessionStorage.setItem("expires", new Date(user.cookie.expires));
      })
      .catch(setError) // set some error component
    if(!error){
      history.push(`/graduates`);
    }
    return () => abortController.abort();
  }

  const errorMessage =<p className="error-msg top">Sorry, we couldn't find an account with those credentials. Please try again.</p>
  


  return (
    <div>
      <h3 className="page-header">Sign In</h3>
      <form onSubmit={submitHandler}>
        {error ? errorMessage : null}
        <div className="input-wrapper">
          <label>Email</label>
          <br/>
          <input
            className={error ? "failure" : "none"}
            name="username" 
            type="text"
            value={form.username}
            onChange={changeHandler}
          />
        </div>
        <div className="input-wrapper">
          <label>Password</label>
          <br/>
          <input
            className={error ? "failure" : "none"}
            name="password"
            type="password"
            value={form.password}
            onChange={changeHandler}
          />
        </div>
      </form>
      <div className="btn-wrapper">
        <button className="btn" onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
}