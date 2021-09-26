import React from "react";
import { withRouter } from "react-router-dom";
import dundies from "../../assets/61pv_bacdql._sl1000_720x.jpg";
import "./main-section.styles.scss";

const MainSection = ({ history }) => {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={dundies} alt='dundies' />
        </div>
        <div className='ms-m-description'>
          <h2>Seen On: Season 3 Episode 16, Business School</h2>
          <p>
            Michael Scott was very proud of Pam when he saw the watercolor art
            of the Dunder Mifflin building. After all, it showed his window and
            his car!
          </p>
          <button
            className='button is-black'
            id='shop-now'
            onClick={() => history.push("/product/1")}
          >
            The Beesly Painting
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainSection);
