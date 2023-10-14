import React, { Component } from 'react';

class AgeCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dob: '',
      age: '',
    };
  }

  handleDOBChange = (event) => {
    this.setState({ dob: event.target.value });
  };

  calculateAge = () => {
    const dob = new Date(this.state.dob);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    this.setState({ age });
  };

  render() {
    const buttonStyle = {
      backgroundColor: '#007FFF',
      color: 'white',
      padding: '10px',
      border: 'none',
      cursor: 'pointer',
    };

    return (
      <div className="age-calculator">
        <h2>Age Calculator</h2>
        <label><b>Enter your date of birth: </b></label> <br></br> <br></br> 
        <input type="date" value={this.state.dob} onChange={this.handleDOBChange} /><br></br> <br></br>
        <button style={buttonStyle} onClick={this.calculateAge}>
          Calculate Age
        </button>
        {this.state.age && <p>Your age is {this.state.age} years</p>}
      </div>
    );
  }
}

export default AgeCalculator;
