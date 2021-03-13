import Order from './Order';

const Cart = (props) => {
  const { cart } = props
  return (
    <section>
      {cart.map((order) => <Order order={order} />)}
    </section>
  )
}

export default Cart;