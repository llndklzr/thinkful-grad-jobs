import React , {useState} from "react";
import { useHistory, Link } from "react-router-dom";
import { loginUser } from "../utils/apiFetcher";
import "../styles/styles.scss";
import handleSessionStorage from "../utils/handleSessionStorage";

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
  }
  

  const submitHandler = async (e) => {
    e.preventDefault();
    const abortController = new AbortController();
    await loginUser(form, abortController.signal)
      .then(user =>{
        handleSessionStorage(user)
      })
      .catch(err=>{
        if(!err){
          setError(null);
        } else{
          setError(err);
        }
      });
    if(error===null){
      history.push(`/graduates`);
    }
    return () => abortController.abort();
  }

  const errorMessage =<p className="auth error-msg top">Sorry, we couldn't find an account with those credentials. Please try again.</p>
  
  console.log("ERROR", error)

  return (
    <div >
      <h3 className="auth page-header">Sign In</h3>
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
        <div>
          Don't have an account? <Link to={"/register"}>Make one</Link>
        </div>
      </form>
      <div className="btn-wrapper">
        <button className="btn" onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
}