import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <td><span><p>Продукция</p></span>{this.props.name}</td>
            <td><span><p>Цена</p></span>{this.props.cost}$</td>
            <td><span><p>Кол-во</p></span>{this.props.quantity}шт</td>
            <td><span><p>Итого</p></span>{this.props.total}$</td>
            <td><button onClick={this.props.deleteUser.bind(this, this.props.item)}>Удалить</button></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default User;