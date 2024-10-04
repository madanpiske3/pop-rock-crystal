import React from 'react';
import '../../styles/SimpleClipWise.css';
import Logo1 from '../temp/Logo1';
import { Basket } from '../temp/Basket';

const SimpleClipWise = () => {
  return (
<div class="container">
            <nav class="nav-bar">
                
                <a href="/" class="logo"><Logo1 />Pop Rock Crystal</a>
                    <div class="nav-items">
                        <a href="/">Home</a>
                        <a href="/">Shop</a>
                        <a href="/">About Us</a>
                        <a href="/">Help</a>
                    </div>
                <div class="flexRow">
                    <div class="icon">00</div>
                    
                    <Basket />
                </div>
            </nav>

            <div class="inner-container">
            <div class="content-container">
                <h1>Welcome to<br/><span>Pop Rock Crystal Shop!</span></h1>
            <p>Here you will find unique phone accessories,
                 crystals, jewelry and more. Free shipping inside the U.S. and
                  our phone grips come with a limited warranty. Enjoy!</p>
            <div class="shopAbout">
                <button>SHOP NOW</button>
                <p>about us</p>
            </div>
            </div>
            <div class="poster-container">
                <div class="new-lot">New lot</div>
                <div class="poster">
                    <img class="img1" src="https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvPk-RVEKsKia~4MWGPIdnJk1HGBcShriplX4cD~6azlzZ7Pd5XutQc9D93KUooMXSV~iR2KSlJd0nlykhAPEqmhdZZEQasy~dpEsEwflj6A2nC6UvsWWyLwzQJQW8MG6tWvLcaqPtjq9M6IM3CN2UUqNxKEShZXBm~gAdRbS57CwdbEtFH~GbDEbZfhb9KoyZZ7Zwz4Lii7K3-2z0mzIdSgFTXtl3TCgFMhzcFVZYOFo6XuCLlXVa7CyivUqx8pNBXzDWHG6O-LS7~J1ifOMnLvt-ncst~nxTQsutpv6BSmOz7PkOX8hWFkaNuv240Fk8lszaz9BUz5Pll-xkRJ0A__" alt='page'/>
                    <p class="image-price">Crystal Agate Phone Grip - <span>18.99$</span></p>
                </div>
            </div>
            </div> 
            <div class="scroll">
                <p><i class="fas fa-mouse mouseStyle"></i>Scroll down</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318"><path fill="#ffffff" fill-opacity="1" d="M0,320L40,314.7C80,309,160,299,240,277.3C320,256,400,224,480,213.3C560,203,640,213,720,218.7C800,224,880,224,960,213.3C1040,203,1120,181,1200,149.3C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>
  )
}

export default SimpleClipWise;
