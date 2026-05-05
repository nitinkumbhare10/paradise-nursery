import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import { useNavigate, Link } from 'react-router-dom';

const CartItem = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  const handleContinueShopping = () => {
    navigate('/plants');
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-logo">Paradise Nursery</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart" className="cart-icon-container">
            <span style={{fontSize: '1.5rem'}}>🛒</span>
            <span className="cart-count">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </Link>
        </div>
      </nav>

      <div className="cart-container">
        <div className="cart-header">
          <h1>Your Shopping Cart</h1>
          <p>Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
        </div>

        {cartItems.length === 0 ? (
          <div style={{textAlign: 'center', padding: '3rem'}}>
            <h2>Your cart is empty</h2>
            <button className="continue-shopping-btn" onClick={handleContinueShopping} style={{marginTop: '1rem'}}>
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="product-price">${item.price}</p>
                  </div>
                  <div className="quantity-controls">
                    <button className="quantity-btn" onClick={() => handleDecrement(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  <div className="item-total">
                    <strong>${(item.price * item.quantity)}</strong>
                  </div>
                  <button className="delete-btn" onClick={() => handleRemove(item.id)}>Delete</button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2 className="cart-total">Total Amount: ${calculateTotalAmount()}</h2>
              <div className="cart-actions">
                <button className="continue-shopping-btn" onClick={handleContinueShopping}>Continue Shopping</button>
                <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItem;
