import { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Flavors from './Components/Flavors';
import Cart from './Components/Cart';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      flavors: ['Cherry', 'Grape', 'Lime'],
      nameInput: "",
    }
  }

  handleChange = (e) => {
    this.setState({ nameInput: e.target.value })
  }

  handleGetCart = () => {
    axios.get('/api/cart')
      .then(response => {
        console.log(response.data)
        this.setState({ cart: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleAddToCart = (flavor) => {
    axios.post('http://localhost:4040/api/cart', { nameInput: this.state.nameInput, flavor: flavor })
      .then(response => {
        console.log(response.data)
        this.handleGetCart()
      })
      .catch(err => {
        console.log(err)
      })

  }

  render() {

    return (
      <div className="App">
        <Header />
        <input placeholder="Name" value={this.state.nameInput} onChange={(e) => this.handleChange(e)} />
        <Flavors flavors={this.state.flavors} handleAddToCart={this.handleAddToCart} />
        <Cart cart={this.state.cart} />
      </div>
    );
  }
}

export default App;
