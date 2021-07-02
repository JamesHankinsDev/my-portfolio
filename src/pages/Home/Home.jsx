import React, { useEffect, useState } from 'react';
import { DisplayCard } from '../../components/Display Card';
import HomeContent from './../../data/Home.json';
import './index.scss';

export const Home = ({ onRender }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => setIsActive(!isActive);
  useEffect(() => {
    toggleIsActive();
    return toggleIsActive();
  }, []);

  const { Main, AboutMe, Experience, Resume, Contact } = HomeContent;

  const homeContentArray = [Main, AboutMe, Experience, Resume, Contact];

  return (
    <div className={`home-page`}>
      {homeContentArray.map((content) => (
        <DisplayCard content={content} />
      ))}
    </div>
  );
};
