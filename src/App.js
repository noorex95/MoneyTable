import React, { Component } from 'react';
import './App.css';
import Total from './components/Total';
import New from './components/New';
import User from './components/User';



class App extends Component {
  state = {
    foods: [
    {id: 1, name: 'Молоко', cost: 1.10, quantity: 75},
    {id: 2, name: 'Хлеб', cost: 0.75, quantity: 150},
    {id: 3, name: 'Мясо', cost: 4.50, quantity: 50},
    {id: 4, name: 'Рыба', cost: 4.10, quantity: 65},
    ], name: '', cost: '', quantity: '', total: 0,
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
//Methods to write data for new position





addFood = (event) => {
  this.state.foods.push({id: this.state.foods.length + 1, name: this.state.name, cost: this.state.cost, quantity: this.state.quantity},)
  this.setState({foods: this.state.foods})
  this.setState({name: '', cost: '', quantity: ''})
  event.preventDefault()
}
//add position (button)

deleteUser = (id) => {
  this.setState(prevState => ({
    foods: prevState.foods.filter(item => item !== id)
  }))
}
//delete position (button)


totalResult = () => {
  var result = 0
  this.state.foods.map(item => (
    result += (item.cost * item.quantity)
  ))
  return result
}
//sum price for all position (result money)


foods = () =>
 this.state.foods.map((item, index) => 
  (
    <User 
    key={item.id} 
    name={item.name} 
    cost={item.cost} 
    quantity={item.quantity} 
    total={item.cost * item.quantity}
    deleteUser={this.deleteUser.bind(this, item)}  
    />
  ))
 //table showing the result of data entry




 render() {
  const newFood = <New 
      name={this.state.name} 
      cost={this.state.cost} 
      quantity={this.state.quantity} 
      id={this.state.id} 
      newName={(event) => this.newName(event)} 
      newCost={(event) => this.newCost(event)} 
      newQuantity={(event) => this.newQuantity(event)} 
      addFood={this.addFood.bind(this)} 
      />//inputs for create new position

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