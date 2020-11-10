import React from 'react';
import { connect } from 'react-redux';
import { fetchData, shuffleData } from '../actions/demo_actions';

class ColorsClass extends React.Component {
    constructor(props) {
        super(props)
    }  

    componentDidMount() {
        this.props.fetchData()
    }
    
    shuffleDataList = () => {
        this.props.shuffleData(this.props.data.sort(() => Math.random() - 0.5));
    };

    generateDataList = () => {
        if (this.props.data) {
            return this.props.data.map((item, i) => (
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
        } 
    };

    render() {
        return (
            <> 
                <div className="Content">
                    {this.props.data ? this.generateDataList(): <div className="placeholder">Loading...</div>}
                </div>

                <div className="contact">
                    {this.props.data ? <button onClick={() => this.shuffleDataList()}>RANDOMIZE</button> : ''}
                </div>
            </>
        )
    };
}

const msp = state => ({
  token: state.token,
  data: state.data
})

const mdp = dispatch => ({
  fetchData: () => dispatch(fetchData()),
  shuffleData: data => dispatch(shuffleData(data))
})

export default connect(msp, mdp)(ColorsClass);