import React from 'react'
import '../../styles/style.css';
// import Pro from './Pro';
import Pro4 from './Pro4';
// import ProComp4 from './ProComp4';

const Products = () => {
  return (
    <div>
        <div class="card-container">
                <h1>All product</h1>
                <div class="filters">
                    <p>filter:</p>
                    <select value="Allproducts">
                        <option value="Allproducts" selected>All Products</option>
                    </select>
                    <p>Sort:</p>
                    <select value="Bestselling">
                        <option value="Bestselling" selected>Best Selling</option>
                    </select>
                </div>
                <section>


                    <Pro4 />

                </section>
            </div>
    </div>
  )
}

export default Products;
