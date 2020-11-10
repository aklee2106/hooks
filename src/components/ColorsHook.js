import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, shuffleData } from '../actions/demo_actions';

const ColorsHook = ({ token, data, fetchData, shuffleData }) => {
  
  const shuffleDataList = () => {
    shuffleData(data.sort(() => Math.random() - 0.5));
  };

  const generateDataList = () => {

    return data.map((item, i) => (
        <a href={item.url} target="_blank" rel="noopener noreferrer" key={i}>
            <div className="module" >
              <img src={item.url} alt=''/>
              <div className="description">
                <div>
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          </a>
        ))
        
  };

  useEffect(() => { if (token) fetchData() }, [fetchData, token]);

  return (
      <> 
        <div className="Content">
          {data ? generateDataList(): <div className="placeholder">Loading...</div>}
        </div>

        <div className="contact">
          {data ? <button onClick={() => shuffleDataList()}>RANDOMIZE</button> : ''}
        </div>
      </>
  );
}

const msp = state => ({
  token: state.token,
  data: state.data
})

const mdp = dispatch => ({
  fetchData: () => dispatch(fetchData()),
  shuffleData: data => dispatch(shuffleData(data))
})

export default connect(msp, mdp)(ColorsHook);