import { Component } from 'react';
import './Order.css';


class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
    }
  }

  handleChange = (e) => {
    this.setState({ nameInput: e.target.value })
  }

  handleUpdate = (order) => {
    this.props.handleUpdateOrder(order.id, this.state.nameInput)
    this.setState({ nameInput: "" })

  }

  render() {
    const { order, handleDeleteOrder } = this.props
    return (
      <section className="cart-item-container">
        <h4> {order.nameInput} </h4>
        <h5> {order.flavor} </h5>
        <div className="order-input-container">
          <input placeholder="Change Name" value={this.state.nameInput} onChange={(e) => this.handleChange(e)} />
          <button onClick={() => this.handleUpdate(order)}> Update </button>
          <button onClick={() => handleDeleteOrder(order.id)}> Delete </button>
        </div>
      </section>
    )
  }
}

export default Order;