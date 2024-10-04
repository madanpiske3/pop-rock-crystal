import React from 'react';
import '../../styles/style.css';

const MainWelcom = () => {
  return (
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
            <img class="img1" src="https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvPk-RVEKsKia~4MWGPIdnJk1HGBcShriplX4cD~6azlzZ7Pd5XutQc9D93KUooMXSV~iR2KSlJd0nlykhAPEqmhdZZEQasy~dpEsEwflj6A2nC6UvsWWyLwzQJQW8MG6tWvLcaqPtjq9M6IM3CN2UUqNxKEShZXBm~gAdRbS57CwdbEtFH~GbDEbZfhb9KoyZZ7Zwz4Lii7K3-2z0mzIdSgFTXtl3TCgFMhzcFVZYOFo6XuCLlXVa7CyivUqx8pNBXzDWHG6O-LS7~J1ifOMnLvt-ncst~nxTQsutpv6BSmOz7PkOX8hWFkaNuv240Fk8lszaz9BUz5Pll-xkRJ0A__"/>
            <p class="image-price">Crystal Agate Phone Grip - <span>18.99$</span></p>
        </div>
    </div>
    </div> 
  )
}

export default MainWelcom;
