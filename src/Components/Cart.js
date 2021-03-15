import Order from './Order';

const Cart = (props) => {
  const { cart, handleUpdateOrder, handleDeleteOrder } = props
  return (
    <aside>
      {cart.map((order) => <Order order={order} handleUpdateOrder={handleUpdateOrder} handleDeleteOrder={handleDeleteOrder} />)}
    </aside>
  )
}

export default Cart;