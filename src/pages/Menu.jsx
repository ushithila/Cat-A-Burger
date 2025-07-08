import React, { useState, useEffect } from 'react';
import MenuCard from '../components/MenuCard'; // adjust path if needed

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    fetch('/items.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching items:', err));
  }, []);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 2000);
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('carts')) || [];
    const index = cart.findIndex(item => item.product_id === product.id);
    if (index >= 0) {
      cart[index].quantity += 1;
    } else {
      cart.push({ product_id: product.id, quantity: 1 });
    }
    localStorage.setItem('carts', JSON.stringify(cart));
    showNotification('Added to Cart 🐈!');
  };

  return (
    <main>
      <div className="top-part">
        <h1>Menu 🍔🍽️</h1>
      </div>

      <div className="menu-section">
        <div className="menu-grid">
          {products.length > 0 ? (
            products.map(product => (
              <MenuCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))
          ) : (
            <p style={{ padding: '2rem' }}>Loading menu...</p>
          )}
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className="notification show">{notification}</div>
      )}
    </main>
  );
};

export default Menu;


