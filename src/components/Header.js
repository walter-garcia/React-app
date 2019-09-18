import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <img src="../../assets/facebook_logo.png" alt="Facebook-logo"/>
        <div>
          <span>Profile</span>
          <i className="fas fa-user-circle"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;