import '../App.css'
import React, { Component } from 'react'

class LadyOrGentleman extends Component {
    render() {
        return (
            <div className="App-body">
              <div className="box mt-5">
                <img src={this.props.valueFromParent.picture}  className="Us-Photo" alt="logo" />
              </div>
              <div className="box">
                {this.props.valueFromParent.fname} {this.props.valueFromParent.lname} 
              </div>
            </div>
        );
    }
}

export default LadyOrGentleman;