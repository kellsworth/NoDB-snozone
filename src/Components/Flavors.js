import Flavor from './Flavor';

const Flavors = (props) => {
  const { flavors, handleAddToCart } = props
  return (
    <section>
      {flavors.map((flavor) => <Flavor flavor={flavor} handleAddToCart={handleAddToCart} />)}
    </section>
  )
}

export default Flavors;