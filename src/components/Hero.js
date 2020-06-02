/* eslint-disable react/prop-types */
import React from 'react';

export const Hero = ({ children, hero = 'defaultHero' }) => (
  <header className={hero}>
    {children}
  </header>
);
