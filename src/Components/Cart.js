import Order from './Order';

const Cart = (props) => {
  const { cart, handleUpdateOrder, handleDeleteOrder } = props
  return (
    <section>
      {cart.map((order) => <Order order={order} handleUpdateOrder={handleUpdateOrder} handleDeleteOrder={handleDeleteOrder} />)}
    </section>
  )
}

export default Cart;