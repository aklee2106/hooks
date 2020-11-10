import axios from 'axios';

export const RECEIVE_DATA = 'RECEIVE_DATA';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';

const receiveData = payload => ({
  type: RECEIVE_DATA,
  payload
});


const receiveLogin = payload => ({
  type: RECEIVE_LOGIN,
  payload
});

const receiveLogout = () => ({
  type: RECEIVE_LOGOUT,
});


// clicked button <button onClick={() => fetchData()}>Fetch My Data</button>
export const fetchData = () => async dispatch => {

  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
    dispatch(receiveData(res.data));
  } catch (err) {
    
    console.log(err);
  }

};

export const shuffleData = data => async dispatch => {

  try {
    dispatch(receiveData(data));
  } catch (err) {
    console.log("Oh No");
  }

};

export const login = payload => async dispatch => {

  try {
    
    dispatch(receiveLogin(payload));
  } catch (err) {
    console.log("Oh No");
  }

};

export const logout = () => async dispatch => {

  try {
    dispatch(receiveLogout());
  } catch (err) {
    console.log("Oh No");
  }

};