import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import Nav from './components/Nav';
import AuthHook from './components/AuthHook';
import AuthClass from './components/AuthClass';
import ColorsHook from './components/ColorsHook';
import ColorsClass from './components/ColorsClass';
import './_css_reset.css'
import './App.css';

const App = ({ store, token }) => {

  // comment in/out any combination of Hook and Class. 
  const generateContent = () => {
    if (token) {
      // return <ColorsHook />
      return <ColorsClass />
    } else {
      // return <AuthHook />
      return <AuthClass />
    }
  }

  useEffect(() => {
    token ? document.title = token.username : document.title = "Demo App"
  })

  return (
    <Provider store={store}>
      <div className="App"> 

        <Nav />
        {generateContent()}

      </div>
    </Provider>
  );
}

const msp = state => ({
  token: state.token
})

export default connect(msp, null)(App);