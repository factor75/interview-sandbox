import React from 'react';

const logoSrc = 'https://d1ji0ugdjn8rfz.cloudfront.net/r2d2-optimized/F_square-logo-outline.svg';

const Header = () => {
  // const onGetStartedClick = () => {
  //   console.log('Clicked Get Started!');
  // }

  return (
    <header className="Header">
      <img src={logoSrc} className="Header-logo" alt="logo" />
      <button className="Header-button">
        Get Started
      </button>
    </header>
  );
}
export default Header;
