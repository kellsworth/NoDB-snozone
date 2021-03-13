const Flavor = (props) => {
  const { flavor, handleAddToCart } = props
  return (
    <button onClick={() => handleAddToCart(flavor)} >{flavor}</button>
  )
}

export default Flavor;