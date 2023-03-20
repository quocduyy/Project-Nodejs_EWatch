import React from 'react'
export default function Product(props){
    const{product} = props;
    return(
                         
            <li key={product._id}>
            <div class="product">

                <a href= {`/product/${product._id}`}>
                <img class="product-image" src={product.image} alt={product.name} />
                </a>
            
                <div class="product-name">
                <a href="product.html">{product.name}</a>
                </div>
                <div class="product-brand">{product.category}</div>
                <div class="product-price">{product.price}  VND</div>
                 <div C>
                 </div>  
            </div>
            </li>
       
    )
}

