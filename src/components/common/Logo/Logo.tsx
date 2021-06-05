import React from 'react';
import './Logo.scss';
import imageBigWheel from '../../../assets/images/logo/big-wheel.svg';
import imageSmallWheel from '../../../assets/images/logo/small-wheel.svg';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <a className="logo__link" href="/">
        <div className="logo__picture">
          <img className="wheel wheel_1" src={imageBigWheel} alt="" />
          <img className="wheel wheel_2" src={imageSmallWheel} alt="" />
        </div>
        <h1 className="logo__title">Alist</h1>
      </a>
    </div>
  );
};

export default Logo;
