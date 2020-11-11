import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/demo_actions';

const AuthHook = ({login}) =>{
    
    handleInput = e => {
        e.preventDefault()
    }

    handleSubmit = () => login()

    handleDemo = () => login({})

   
        return (
            <div id="auth" className="column"> 
              <div className="auth module">
                <h1 className="title">Log In.</h1>
                <form className="column">
                  <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleInput} 
                    />
                  <input
                    name="password"
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={handleInput}
                    />
                  <div className="row submit">
                    <button onClick={handleDemo}>Demo User</button>
                    <button onClick={handleSubmit}>Submit &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
        );
    
}

const mdp = dispatch => ({
    login: payload => dispatch(login(payload))
  });
  
export default connect(null, mdp)(AuthClass);
  