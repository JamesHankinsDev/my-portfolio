import React from 'react';
import './index.scss';
import { TypeWriter } from './../TypeWriter/TypeWriter';
import LogoDiscriptions from './../../data/LogoList.json';

export const Logo = () => {
  return (
    <div className={'Logo'}>
      <h1>James Hankins</h1>
      <TypeWriter textArray={LogoDiscriptions.textArray} typeSpeed={50} />
    </div>
  );
};
