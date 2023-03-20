import React from 'react';
import Product from './components/Product';
import data from './data';


function App() {
  return (
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onclick="openMenu()">
          &#9776;
        </button>
        <a href="/">WATCH STORE</a>
      </div>
      <div className="header-links">
        <a href="/cart">Giỏ Hàng</a>
        <a href="/signin">Đăng nhập</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onclick="closeMenu()">x</button>
      <ul>
        <li>
          <a href="index.html">Pants</a>
        </li>

        <li>
          <a href="index.html">Shirts</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        
           <ul   class="products">
            {
             data.products.map(( product =>
            <Product key={product._id} product={product}/>
          ))
             }
           </ul>
         
        
       
      </div>

    </main>
    <footer className="footer">
      đây là footer.
    </footer>
  </div>
 
  );
}

export default App;
