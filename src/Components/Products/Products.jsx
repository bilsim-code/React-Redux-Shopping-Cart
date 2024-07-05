import "./Products.css";
import PropTypes from "prop-types";
import {useDispatch, useSelector, } from 'react-redux'
import { addToCart, removeFromCart } from "../../slices/cart-slice";

const Products = ({ product }) => {
    const dispatch = useDispatch();
    const {cart} = useSelector(state => state);

    function handleAddToCart() {
        dispatch(addToCart(product))
    }
``
    function handleRemoveFromCart() {
        console.log('removed ');
        dispatch(removeFromCart(product.id))
    }
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <div className="product-content">
        <h1>{product.title ? product.title.slice(0, 20) + '...' : 'No Title'}</h1>
        <div className="product-cart">
            <button onClick={cart.some(item => item.id === product.id) ? handleRemoveFromCart : handleAddToCart} className="add-to-cart">
                {
                    cart.some(item => item.id === product.id) ? 'Remove from cart' : 'Add to cart'
                }
                </button>
        </div>
      </div>
    </div>
  );
};

Products.propTypes = {
  product: PropTypes.object,
};

export default Products;
