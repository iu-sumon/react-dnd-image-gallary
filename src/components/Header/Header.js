import React from 'react';
import './Header.css'; // Create a new CSS file for styling

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <div>
            <span>Gallary</span>
        </div>
        <div>
            <span><input type="checkbox" /></span>
            <span>3 Files Selected</span>
        </div>
      </div>
      
      <div className="header-right">
        <span>Delete Files</span>
      </div>
    </header>
  );
};

export default Header;
