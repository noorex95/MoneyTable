import React, { Component } from 'react';

class Total extends Component {

  render() {
    return (
      <div>
        <p>Общая сумма: {this.props.totalResult} $</p>
      </div>
    )
  }
}

export default Total;