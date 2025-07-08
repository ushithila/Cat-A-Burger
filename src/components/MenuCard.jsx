import React from 'react';

const MenuCard = ({ product, onAddToCart }) => {
  return (
    <div className="menu-card" data-id={product.id}>
      <img src={product.image} alt={product.name} />
      <div className="menu-info">
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <span className="price">${product.price.toFixed(2)}</span>
        <button className="add-to-cart" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
