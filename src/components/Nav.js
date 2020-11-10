import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/demo_actions';

const Nav = ({token, logout}) => {

  return(
    
      <nav>
        <div className="title">
          <p>Demo Project: Colors</p>
        </div>
        <div className="links">
          {token ? <button onClick={() => logout()}>Logout</button> : null}
        </div>
      </nav>

  )
}

const msp = state => ({
  token: state.token
})

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Nav);
