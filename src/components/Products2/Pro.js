import React from 'react';
// import ProComp from './ProComp';
import image1 from '../../assets/product.png';
// import '../../styles/procss2.css';
import '../../styles/procss2.css';


const Pro = () => {
  return (
    <section class="product-area">
    <div class="Rectangle-perent">
      <b>All product</b>
      <div class="Rectangle"></div>
    </div>

    <div class="filter">

      

    </div>
    <div class="product">
      <div class="product1 ">
        <img src={image1} alt="productimages"/>
        <h4>Crystal Agate Phone Grip <span>18.99$</span> </h4>
        <button id="first">buy now</button>
      </div>
      <div class="product1">
        <img src={image1} alt="smallproduct"/>
        <h4>Crystal Agate Phone Grip <span>18.99$</span> </h4>
        <button>buy now</button>
      </div>
      <div class="product1">
        <img src={image1} alt="ml"/>
        <h4>Crystal Agate Phone Grip <span>18.99$</span> </h4>
        <button>buy now</button>
      </div>
      <div class="product1">
        <img src={image1} alt="sm"/>
        <h4>Crystal Agate Phone Grip <span>18.99$</span> </h4>
        <button>buy now</button>
      </div>
      <div class="product1">
        <img src={image1} alt="safd"/>
        <h4>Crystal Agate Phone Grip <span>18.99$</span> </h4>
        <button>buy now</button>
      </div>
      <div class="product1">
        <img src={image1} alt="esfdf"/>
        <h4>Crystal Agate Phone Grip <span>18.99$</span> </h4>
        <button>buy now</button>
      </div>
      <div class="product1">
        <img src={image1} alt="dfsdf"/>
        <h4>Crystal Agate Phone Grip <span>18.99$</span> </h4>
        <button>buy now</button>
      </div>
      <div class="product1">
        <img src={image1} alt="phone grief"/>
        <h4>Crystal Agate Phone Grip <span>18.99$</span> </h4>
        <button>buy now</button>
      </div>


    </div>
    <button>View All</button>
  </section>
  )
}

export default Pro;
