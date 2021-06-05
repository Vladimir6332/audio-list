import React from 'react';
import './Footer.scss';
import { ReactComponent as ReactGithubIcon } from '../../../assets/github-icon.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="github">
          <ReactGithubIcon></ReactGithubIcon>
          <p>
            <a href="https://github.com/Vladimir6332" className="github__link">
              Vladimir
            </a>
          </p>
        </div>
        <div className="classes">
          <span className="classes__year">2021</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
