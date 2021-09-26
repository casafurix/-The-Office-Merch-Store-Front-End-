import React from "react";
import { withRouter } from "react-router-dom";
import Layout from "../../shared/layout";

const Cancelled = ({ history }) => {
  return (
    <Layout>
      <div className='checkout'>
        <h1>Payment was unsuccessful.</h1>
        <p>Try again shortly.</p>
        <div>
          <button
            className='button is-black nomad-btn submit'
            onClick={() => history.push("/shop")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(Cancelled);
