import React, { useState } from 'react';

import './index.scss';

import { LinkButton } from '../../components/LinkButton/LinkButton';
import { Logo } from '../../components/Logo/Logo';

const navLinks = [
  { displayText: 'Home', destination: '/' },
  { displayText: 'About Me', destination: '/About' },
  { displayText: 'Experience', destination: '/Experience' },
  { displayText: 'Resume', destination: '/Resume' },
  { displayText: 'Contact Me', destination: '/Contact' },
];

export const Header = () => {
  const [isActive, setIsActive] = useState('/');
  const updateActivePath = (path) => setIsActive(path);
  return (
    <div className={'header'}>
      <div className={'logo'}>
        <Logo />
      </div>
      <div className={'nav-links'}>
        {navLinks.map((link) => {
          return (
            <div
              className={`link`}
              key={`nav-item-${navLinks.indexOf(link)}`}
              onClick={() => updateActivePath(link.destination)}
            >
              <LinkButton
                isActive={isActive === link.destination}
                displayText={link.displayText}
                destination={link.destination}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
