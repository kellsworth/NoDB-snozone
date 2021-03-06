import { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Flavors from './Components/Flavors';
import Cart from './Components/Cart';
import axios from 'axios';
import cherry from './assets/images/Cherry.png';
import lime from './assets/images/Lime.png';
import orange from './assets/images/Orange.png';


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
    axios.post('/api/cart', { nameInput: this.state.nameInput, flavor: flavor })
      .then(response => {
        console.log(response.data)
        this.setState({ nameInput: "" })
        this.handleGetCart()
      })
      .catch(err => {
        console.log(err)
      })

  }

  handleUpdateOrder = (orderId, name) => {
    axios.put(`/api/order/${orderId}`, { name })
      .then(res => {
        console.log(res.data)
        this.handleGetCart()
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleDeleteOrder = (orderId) => {
    axios.put('/api/order', { orderId })
      .then(res => {
        console.log(res.data)
        this.handleGetCart()
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleClear = () => {
    axios.delete('/api/cart')
      .then(res => {
        console.log(res.data)
        this.handleGetCart()
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    return (
      <>
        <Header />
        <main className="App">
          <section className="image-container">
            <img src={cherry} />
            <img src={lime} />
            <img src={orange} />
          </section>
          <section className="order-container">
            <div className="flavor-container">
              <input placeholder="Enter Name" value={this.state.nameInput} onChange={(e) => this.handleChange(e)} />

              <Flavors flavors={this.state.flavors} handleAddToCart={this.handleAddToCart} />
            </div>
            <div className="cart-container">
              <Cart cart={this.state.cart} handleUpdateOrder={this.handleUpdateOrder} handleDeleteOrder={this.handleDeleteOrder} />

              <button onClick={() => this.handleClear()}> Clear </button>
            </div>
          </section>

        </main>
        <footer> copyright</footer>
      </>
    );
  }
}

export default App;
