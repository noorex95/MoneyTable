import React, { Component } from 'react';
import './App.css';

class Total extends Component {

  render() {
    return (
      <div>
        <p>Общая сумма: {this.props.totalResult} $</p>
      </div>
    )
  }
}



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
            <td><input type='checkbox' checked={this.props.checked} onChange={this.props.handleChangeChecked.bind(this)} /></td>
            <td><button onClick={this.props.deleteUser.bind(this, this.props.item)}>Удалить</button></td>
          </tr>
        </table>
      </div>
    )
  }
}



class App extends Component {
  state = {
    foods: [
    {id: 1, name: 'Молоко', cost: 1.10, quantity: 75, checked: true},
    {id: 2, name: 'Хлеб', cost: 0.75, quantity: 150, checked: true},
    {id: 3, name: 'Мясо', cost: 4.50, quantity: 50, checked: true},
    {id: 4, name: 'Рыба', cost: 4.10, quantity: 65, checked: true},
    ], name: '', cost: '', quantity: '',total: 0,
  }



newName = (event) => {
  this.setState({name: event.target.value})
}
newCost = (event) => {
  this.setState({cost: event.target.value})
}
newQuantity = (event) => {
  this.setState({quantity: event.target.value})
}



handleChangeChecked = (index) => {
  this.setState(prevState => {
    const newFood = [...prevState.foods]
    newFood[index].checked = !prevState.foods[index].checked
    return ({foods: newFood})
  })
  return
}

addFood = (event) => {
  this.state.foods.push({id: this.state.foods.length + 1, name: this.state.name, cost: this.state.cost, quantity: this.state.quantity},)
  this.setState({foods: this.state.foods})
  this.setState({name: '', cost: '', quantity: ''})
  event.preventDefault()
}

deleteUser = (id) => {
  this.setState(prevState => ({
    foods: prevState.foods.filter(item => item !== id)
  }))
}


totalResult = () => {
  var result = 0
  this.state.foods.map(item => (
    result += (item.cost * item.quantity)
  ))
  return result
}

// totalResult = (index) => {
//   this.setState(prevState => {
//     const newCheck = [...prevState.foods]
//     if (newCheck[index].checked) {
//       newCheck[index].sum = prevState.foods[index].cost * prevState.foods[index].quantity
//     } else {
//       newCheck[index].sum = 1
//     }
//     return ({foods: newCheck})
//   })
// }






foods = () =>
 this.state.foods.map((item, index) => 
  (
    <User 
    key={item.id} 
    //index={item.id}
    name={item.name} 
    cost={item.cost} 
    quantity={item.quantity} 
    total={item.cost * item.quantity}
    deleteUser={this.deleteUser.bind(this, item)} 
    checked={item.checked} 
    handleChangeChecked={this.handleChangeChecked.bind(this, index)} 
    />
  ))




 render() {
  const newFood = <New 
      name={this.state.name} 
      cost={this.state.cost} 
      quantity={this.state.quantity} 
      id={this.state.id} 
      newName={(event) => this.newName(event)} 
      newCost={(event) => this.newCost(event)} 
      newQuantity={(event) => this.newQuantity(event)} 
      addFood={this.addFood.bind(this)} />

  const total = <Total totalResult={this.totalResult()} />

  return (
    <div>
      {this.foods()}
      {newFood}
      {total}
    </div>
  )
 }
}


export default App;