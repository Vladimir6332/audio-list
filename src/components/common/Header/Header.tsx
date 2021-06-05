import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../AppNavigation/AppNavigation';
import './Header.scss';
const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo></Logo>
      <Navigation></Navigation>
    </header>
  );
};

export default Header;
