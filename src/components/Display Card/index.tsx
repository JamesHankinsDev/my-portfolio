import React from 'react';
import './index.scss';

export const DisplayCard = (props: {
  content: { title: string; body: string };
}) => {
  console.log('Props are: ', props);

  const { title, body } = props.content;
  return (
    <div className={'home-div'}>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};
