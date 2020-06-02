import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Banner } from '../components/Banner';

export const Error = () => (
  <Hero>
    <Banner
      title="404"
      subtitle="page not found"
    >
      <Link
        to="Home"
        className="btn-primary"
      >
        return home
      </Link>
    </Banner>
  </Hero>
);
