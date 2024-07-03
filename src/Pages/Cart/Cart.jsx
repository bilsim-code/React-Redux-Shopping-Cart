import {  useSelector } from "react-redux";
import "./Cart.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { removeFromCart } from "../../slices/cart-slice";
import CartItem from "./CartItem";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);
  console.log(cart, totalCart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  
  return (
    <div className="product-container">
      {cart && cart.length ? (
        <>
          <div className="cart-summary">
            <span>Total Items: {cart.length}</span>
            <span>Total Amount: ${Math.floor(totalCart)}</span>
          </div>
          <div className="products">
            {cart.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem}/>
            ))}
          </div>
        </>
      ) : (
        <div className="cart-empty">
          <h1>Cart is empty</h1>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
