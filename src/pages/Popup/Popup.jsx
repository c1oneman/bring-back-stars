import React from 'react';

import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <h1 className="headingText">Bring back stars!</h1>
      <div>
        <img src={'icon-34.png'} alt="bring back amazon stars logos"></img>
        <p className="text">bring back amazon stars.</p>
        <p>
          made with <span className="heart">❤</span> by{' '}
          <a href="https://github.com/c1oneman">Clay</a>
        </p>
      </div>
      <a
        href="https://www.buymeacoffee.com/c1oneman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="buy-me-a-coffee-button">
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
            className="buy-me-a-coffee-button-img"
          />
          <p>Buy me a coffee</p>
        </div>
      </a>
    </div>
  );
};

export default Popup;
