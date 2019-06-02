import React, { Component } from 'react';

class New extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.addFood}>
          <input type='text' placeholder='Продукция' value={this.props.name} onChange={this.props.newName} />
          <input type='number' placeholder='Цена' value={this.props.cost} onChange={this.props.newCost} />
          <input type='number' placeholder='Кол-во' value={this.props.quantity} onChange={this.props.newQuantity} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default New;