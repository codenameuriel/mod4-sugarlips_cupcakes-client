import React from 'react'
import { Link } from 'react-router-dom';

const Login = props => {

  const {handleChange, handleLoginSubmit, username} = props

  return (
    <div className="con">
      <div className="card">
        <div className="about-login">
          <h1>Login</h1>
          <p>Welcome Back Sugar Friend!!</p>
        </div>
    
        <form autoComplete="off">
          <div className="inputs-login">
            <input 
              type="text" 
              name="username" 
              value={username} 
              onChange={handleChange}  
              placeholder="enter username" 
              required /><br/>
  
            <input 
              type="password" 
              name="password" 
              placeholder="enter password" 
              required/>
          </div>
    
          <button
            onClick={event => { 
              handleLoginSubmit(event, username)
              props.history.push('/cupcakes') 
              }
            }
            className="submit-login"
          >Login</button>
  
          <div className="login-to">
            <label id="login-to" ><p> Not a member? <Link to="/ sign-up"><span>Hurry   sign up!</span></Link></p></label> 
          </div>  
        </form>
      </div>
    </div>
  )
}

export default Login
