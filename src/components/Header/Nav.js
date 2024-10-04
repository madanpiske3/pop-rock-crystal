import React from 'react';
import '../../styles/style.css';

const Nav = () => {
  return (
        <nav class="nav-bar">
                <a href="" class="logo">Pop Rock Crystal</a>
                    <div class="nav-items">
                        <a href="">Home</a>
                        <a href="">Shop</a>
                        <a href="">About Us</a>
                        <a href="">Help</a>
                    </div>
                <div class="flexRow">
                    <div class="icon">00</div>
                    <i class="fas fa-shopping-basket basketStyle"></i>
                </div>
        </nav>
  )
}

export default Nav;
