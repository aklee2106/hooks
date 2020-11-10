import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/demo_actions';

class AuthClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidUpdate() {
        document.title = this.state.username;
    }

    handleInput = e => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => this.props.login(this.state)

    handleDemo = () => this.props.login({username: 'User', password: '123456'})

    render() {
        return (
            <div id="auth" className="column"> 
              <div className="auth module">
                <h1 className="title">Log In.</h1>
                <form className="column">
                  <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={this.username}
                    onChange={this.handleInput} 
                    />
                  <input
                    name="password"
                    type="password" 
                    placeholder="Password"
                    value={this.password}
                    onChange={this.handleInput}
                    />
                  <div className="row submit">
                    <button onClick={this.handleDemo}>Demo User</button>
                    <button onClick={this.handleSubmit}>Submit &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
        );
    }
}

const mdp = dispatch => ({
    login: payload => dispatch(login(payload))
  });
  
export default connect(null, mdp)(AuthClass);
  