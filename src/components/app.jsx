import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container-main">
        <div className="header">
          <img src="images/rocket-2.svg" className="logo" />
          <h1 className="">Coin Rocket</h1>
          <p id="portfolio-value-label">Portfolio Value</p>
          <p id="portfolio-value"></p>
        </div>
        <div className="placeholder">
          <p>Pull to refresh</p>
        </div>
        <div className="coin-cards-container">
          <div className="coin-card">
            <div className="icon">
              <div className="icon-flex">
                <img src="images/btc.svg" alt="" />
                <div className="percentage">74%</div>
              </div>
            </div>
            <div className="coin-info">
              <p className="coin-name">Bitcoin</p>
              <p className="coin-price">7'256.20 €</p>
            </div>
            <div className="holdings-info">
              <p className="holdings-value">36'281.20 €</p>
              <p className="holdings-amount">5 BTC</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
