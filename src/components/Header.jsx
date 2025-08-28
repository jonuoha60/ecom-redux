import React, { useState, useEffect } from "react";
import "./css/header.css";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../cart/CartItem";
import { nigerianMenu } from "./Products";
import { clearCart } from "../store/cart";


export const Header = ({ scrollToAbout, scrollToContact, openCart, setOpenCart }) => {
  const [cartItems, setCartItems] = useState(0);
  const dispatch = useDispatch()
  const carts = useSelector(store => store.cart.items);
const totalPrice = carts.reduce((acc, item) => {
  // Find the product by ID
  const product = nigerianMenu.find(p => p.id === item.productId);
  if (!product) return acc; // Skip if not found
  return acc + product.price * item.quantity;
}, 0);

  // Calculate total quantity
  useEffect(() => {
    console.log(carts.map((item, i) => item))
    let totalQty = 0;
    carts.forEach((item) => (totalQty += item.quantity));
    setCartItems(totalQty);
    
  }, [carts]);

  // Calculate total price

  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => setShowCart(prev => !prev);

  const handlePlaceOrder = () => {
    alert(`Order placed! Total: CA$${totalPrice.toFixed(2)}`);
    // You can also clear cart or navigate to checkout page here
  };

  const removeItem = () => {
    dispatch(clearCart(carts))
    setCartItems(0)
  }

  return (
    <header>
      <section>
        <nav className="navbar">
          <ul>
            <div className="header-logo">Logo</div>
          </ul>
          <ul
            className="right nav"
            style={{ display: "flex", gap: "1rem", listStyle: "none" }}
          >
            <li>
              <a href="/" className="active">Home</a>
            </li>
            <li onClick={scrollToAbout}><a>About</a></li>
            <li onClick={scrollToContact}><a>Contact</a></li>
            <li style={{ position: "relative" }}>
              <button onClick={toggleCart} className="cart-btn">
                🛒 Cart
                {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
              </button>
            </li>
          </ul>
        </nav>
      </section>

      {/* Overlay */}
      {(showCart || openCart) && (
        <div
          className="cart-overlay"
          onClick={() => setShowCart(false)}
        ></div>
      )}

      {/* Slide-in Drawer */}
      <div className={`cart-drawer ${showCart || openCart ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="close-drawer" onClick={() => {
            setOpenCart(false);
            setShowCart(false);
          }}>✖</button>
        </div>

        <div className="cart-body">
          {cartItems === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <div>
              <p>You have {cartItems} item(s) in your cart.</p>
              {carts.map((item, key) => (
                <CartItem key={key} data={item} />
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer with Total and Place Order */}
        <div className="cart-footer">
          <p className="cart-total">Total With Tax: CA${totalPrice.toFixed(2)}</p>
          <button onClick={handlePlaceOrder} className="place-order-btn">
            Place Order
          </button>
          <button onClick={removeItem} className="clear-cart">
            Clear Cart
          </button>
        </div>
      </div>
    </header>
  );
};
