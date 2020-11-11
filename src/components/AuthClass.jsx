import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/demo_actions';

const AuthHook = ({login}) =>{


    const [username, setUserName] = useState("");
    const [password, setPassword] = useState(""); 

    const handleSubmit = () => login({username:username, password: password})

    const handleDemo = () => login({username: 'User', password:'123456' });

   
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
                    onChange={e=> setUserName(e.target.value)} 
                    />
                  <input
                    name="password"
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
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
  
export default connect(null, mdp)(AuthHook);
  