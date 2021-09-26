import React from "react";
import "./hero.styles.scss";

const Hero = () => {
  return (
    <section className='hero is-danger is-fullheight hero-image'>
      <div className='hero-body'>
        <div className='container'>
          {/* <h1 className='hero-title'>Dunder Mifflin Paper Company</h1> */}

          <h1>
            <span>DUNDER MIFFLIN </span>
            <span> PAPER COMPANY</span>
          </h1>
          <div className='shop-now-btn'>SHOP NOW</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// className="shop-now-btn">
//             <button className="button is-black" id="shop-now">
//               SHOP NOW
//             </button>
