import {
  RECEIVE_DATA,
  RECEIVE_LOGIN,
  RECEIVE_LOGOUT
} from '../actions/demo_actions';

const initialState = {
  token: null,
  data: null
};

export default function (state = initialState, action) {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LOGIN:
      return {
        ...state,
        token: action.payload
      };

    case RECEIVE_DATA:
      return {
        ...state,
        data: Object.values(action.payload).slice(0, 50)
      };

    case RECEIVE_LOGOUT:
      return initialState;

    default:
      return state;
  }

}