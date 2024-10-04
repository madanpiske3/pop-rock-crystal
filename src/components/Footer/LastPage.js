import '../../styles/procss3.css';
import React from 'react';
import product_png from '../../assets/product.png';

const LastPage = () => {
  return (
    <>
    <section>
    <div className="best-price">
      <div className="best-price-details">
        <h2><span>BEST PRICE </span>Agate Phone Grip</h2>
        <b><span id="spen1">44.50$</span><span>19.50$</span></b>
        <p className="price-arpoe">These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood,
          outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another
          color or design!b</p>
        <div id="price-btn">
          <button>BUY NOW</button>
        </div>


      </div>
      <div className="best-price-image">
        <div className="image-one">
          <img src={product_png} alt="propage" />
        </div>
        
      </div>
    </div>
  </section>
    <footer></footer>
  </>
  )
}

export default LastPage;
