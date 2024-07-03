import { useDispatch } from "react-redux";
import { removeFromCart } from "../../slices/cart-slice";
import PropTypes from 'prop-types'

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();
    function handleRemoveFromCart() {
        dispatch(removeFromCart(cartItem.id));
      }
  return (
    <div className="productz" key={cartItem.id}>
    <img src={cartItem.image} alt={cartItem.title} />
    <div className="product-content">
      <h1>
        {cartItem.title
          ? cartItem.title.slice(0, 20) + "..."
          : "No Title"}
      </h1>
      <div className="cart-details">
        <span className="product-price">
          Price: ${cartItem.price}
        </span>
        <span>Rating: {cartItem.rating.rate}</span>
        <span>Remaining Items: {cartItem.rating.count}</span>
      </div>

      <button onClick={handleRemoveFromCart}>
        Remove From cart
      </button>
    </div>
  </div>
  )
}

CartItem.propTypes = {
    cartItem: PropTypes.object
}

export default CartItem