import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

const products = [
  {
    category: "Indoor Plants",
    items: [
      { id: 1, name: "Snake Plant", price: 15, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?w=500&q=80" },
      { id: 2, name: "Monstera Deliciosa", price: 25, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&q=80" },
      { id: 3, name: "Peace Lily", price: 18, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?w=500&q=80" },
      { id: 4, name: "Spider Plant", price: 12, image: "https://images.unsplash.com/photo-1572688066243-1bc2a72049e6?w=500&q=80" },
      { id: 5, name: "Pothos", price: 10, image: "https://images.unsplash.com/photo-1599598422142-275f92273d72?w=500&q=80" },
      { id: 6, name: "Fiddle Leaf Fig", price: 35, image: "https://images.unsplash.com/photo-1583327171620-297bc201630c?w=500&q=80" }
    ]
  },
  {
    category: "Outdoor Plants",
    items: [
      { id: 7, name: "Lavender", price: 14, image: "https://images.unsplash.com/photo-1595164530445-87dc587f29cc?w=500&q=80" },
      { id: 8, name: "Rosemary", price: 12, image: "https://images.unsplash.com/photo-1594315513237-2812644f5d68?w=500&q=80" },
      { id: 9, name: "Hydrangea", price: 20, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&q=80" },
      { id: 10, name: "Gardenia", price: 18, image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=500&q=80" },
      { id: 11, name: "Boxwood", price: 30, image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=500&q=80" },
      { id: 12, name: "Marigold", price: 8, image: "https://images.unsplash.com/photo-1589146197307-72cc3b5a1205?w=500&q=80" }
    ]
  },
  {
    category: "Succulents",
    items: [
      { id: 13, name: "Aloe Vera", price: 12, image: "https://images.unsplash.com/photo-1567331711402-509c2ca91ec4?w=500&q=80" },
      { id: 14, name: "Echeveria", price: 10, image: "https://images.unsplash.com/photo-1520302630591-fd1c66ed11a3?w=500&q=80" },
      { id: 15, name: "Jade Plant", price: 15, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e5f?w=500&q=80" },
      { id: 16, name: "Zebra Cactus", price: 12, image: "https://images.unsplash.com/photo-1509304140354-92790bd57244?w=500&q=80" },
      { id: 17, name: "String of Pearls", price: 18, image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500&q=80" },
      { id: 18, name: "Burro's Tail", price: 16, image: "https://images.unsplash.com/photo-1459411552884-841f9b3921d7?w=500&q=80" }
    ]
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const isItemInCart = (id) => cartItems.some(item => item.id === id);

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

      <div className="product-list-container">
        {products.map((categoryGroup, index) => (
          <section key={index} className="category-section">
            <h2 className="category-title">{categoryGroup.category}</h2>
            <div className="product-grid">
              {categoryGroup.items.map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price}</p>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => dispatch(addItem(product))}
                      disabled={isItemInCart(product.id)}
                    >
                      {isItemInCart(product.id) ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
