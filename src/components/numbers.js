import React from 'react';
import { connect } from 'react-redux';

// import * as actions from '../store/app-actions.js';
import {actions} from '../store/numbers-actions';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Number extends React.Component {

  changeMyNumber = () => {

    let randNum = getRandomInt(100)
    this.props.handleChange(randNum);
  }


  render() {
    return (
      <React.Fragment>
      <div onClick={this.changeMyNumber}>
        NUMBER: {this.props.numbers.currentNumber}
      </div>
      <div onClick={this.props.handleReset}>
        RESET
      </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  numbers: state.numbers,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleChange: (newNumber) => dispatch(actions.changeNum(newNumber)),
  handleReset: () => dispatch(actions.resetNum())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Number);
