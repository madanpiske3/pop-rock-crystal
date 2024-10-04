import React from 'react';
import product from '../../assets/product.png';
import '../../styles/procont.css';

const ProComp3 = () => {
  return (

    <div class="product-card">
            <img src={product} alt="Crystal Agate Phone Grip" class="product-image"/>
            <h2 class="product-title">CRYSTAL AGATE PHONE GRIP</h2>
            <p class="product-price">18.99$</p>
            <button class="buy-button">BUY NOW</button>
    </div>

  )
}

export default ProComp3;
