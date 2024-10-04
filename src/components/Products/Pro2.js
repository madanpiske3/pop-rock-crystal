import React from 'react';
import product from '../../assets/product.png';
import '../../styles/style.css';
import '../../styles/pro2.css';

const Pro2 = () => {
  return (
    <li>

        <img className='proimg' src={product} alt="Product IMG" />
        <p>Crystal Agate Phone Grip<br/><span>18.99$</span></p>
        <button class="buyBtn">BUY NOW</button>

    </li>
  )
}

export default Pro2;
