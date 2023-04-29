import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";

const Login = () => {

  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  useEffect(()=>{if (store.auth===true){navigate("/private")} },[store.auth])

  return (
      <div>
        <h1 className='mt-4 mb-4 text-center'>Login Form</h1>
        <form className='form col-6 text-center'>
        <div className="d-grid gap-2">
            <label className="form-label ml-4"><h3>Email</h3></label>
              <div className="d-grid gap-2">
                  <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                </div>
            </div>


            <div className="mb-3">
                <label className="col-sm-2 col-form-label mt-3"><h3>Password</h3></label>
                <div className="d-grid gap-2">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Your Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                    />
                </div>
            </div>
        </form>
     
        <button 
            className="loginbtn btn btn-primary text-center" onClick={() => {
              actions.login({
                email: email,
                password: password,
              })
            }}>
        Login
      </button>
      
    </div>
    
  );
}

export default Login;