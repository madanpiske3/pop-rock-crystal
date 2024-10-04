import React from 'react';
import '../../styles/pro4.css';

import products from '../../assets/product.png';

// import Pro4 from './Pro4';


const ProComp4 = () => {
  return (
    <div class="product1 ">
        <img src={products} alt="" />
        <h4>Crystal Agate Phone Grip <span>18.99$</span> </h4>
        <button id="first">buy now</button>
      </div>
  )
}

export default ProComp4;
