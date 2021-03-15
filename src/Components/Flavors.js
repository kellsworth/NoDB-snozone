import Flavor from './Flavor';

const Flavors = (props) => {
  const { flavors, handleAddToCart } = props
  return (
    <section className="flavor-button-container">
      {flavors.map((flavor) => <Flavor flavor={flavor} handleAddToCart={handleAddToCart} />)}
    </section>
  )
}

export default Flavors;