import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Load item catalog
    fetch('/items.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to load items:', err));
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('carts')) || [];
    setItems(storedCart);
  }, [products]);

  useEffect(() => {
    let newTotal = 0;
    items.forEach((item) => {
      const product = products.find(p => p.id === item.product_id);
      if (product) {
        newTotal += product.price * item.quantity;
      }
    });
    setTotal(newTotal);
  }, [items, products]);

  const updateCart = (updatedCart) => {
    setItems(updatedCart);
    localStorage.setItem('carts', JSON.stringify(updatedCart));
  };

  const changeQuantity = (productId, type) => {
    const updatedCart = items.map((item) => {
      if (item.product_id === productId) {
        if (type === 'plus') {
          return { ...item, quantity: item.quantity + 1 };
        } else if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return null; // if quantity becomes 0, remove it
      }
      return item;
    }).filter(Boolean);
    updateCart(updatedCart);
  };

  const clearCart = () => {
    localStorage.removeItem('carts');
    setItems([]);
    setTotal(0);
  };

  return (
    <main>
      <div className="top-part">
        <h1>Cart 🍔🐾</h1>
      </div>
      <div className="cart-container">
        <div className="cart-wrap">
          <div className="cart-list">
            {items.length > 0 ? (
              items.map((cartItem) => {
                const product = products.find(p => p.id === cartItem.product_id);
                if (!product) return null;
                return (
                  <div className="item" key={product.id} data-id={product.id}>
                    <div className="name">{product.name}</div>
                    <div className="total-price">
                      ${ (product.price * cartItem.quantity).toFixed(2) }
                    </div>
                    <div className="quantity">
                      <span className="minus" onClick={() => changeQuantity(product.id, 'minus')}>◀</span>
                      <span>{cartItem.quantity}</span>
                      <span className="plus" onClick={() => changeQuantity(product.id, 'plus')}>▶</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="cart-message">
                <h2>Your cart is empty 😿</h2>
                <Link to="/menu" className="order-button">Order Now 😺</Link>
              </div>
            )}
          </div>

          <div className="cart-summary">
            <div className="total">Total: ${total.toFixed(2)}</div>
            <button className="checkout-btn">Checkout 🐱</button>
            <button className="clear-cart" onClick={clearCart}>Clear Cart 🙀</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;

