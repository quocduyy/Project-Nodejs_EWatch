import React from 'react';
import data from './data';
 

function App() {
  return (
    <div class="grid-container">
    <header class="header">
      <div class="brand">
        <button onclick="openMenu()">
          &#9776;
        </button>
        <a href="/">WATCH STORE</a>
      </div>
      <div class="header-links">
        <a href="/cart">Giỏ Hàng</a>
        <a href="/signin">Đăng nhập</a>
      </div>
    </header>
    <aside class="sidebar">
      <h3>Shopping Categories</h3>
      <button class="sidebar-close-button" onclick="closeMenu()">x</button>
      <ul>
        <li>
          <a href="index.html">Pants</a>
        </li>

        <li>
          <a href="index.html">Shirts</a>
        </li>

      </ul>
    </aside>
    <main class="main">
      <div class="content">
        {
          data.products.map(( product =>
            <ul key={product._id}  class="products">
              
            <li>
              <div class="product">

                <a href= {`/product/${product._id}`}>
                <img class="product-image" src={product.image} alt={product.name} />
                   </a>
              
                <div class="product-name">
                  <a href="product.html">{product.name}</a>
                </div>
                <div class="product-brand">{product.category}</div>
                <div class="product-price">{product.price}  VND</div>
                <div class="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
          
  
          </ul>
          ))
        }
       
      </div>

    </main>
    <footer class="footer">
      đây là footer.
    </footer>
  </div>
 
  );
}

export default App;
