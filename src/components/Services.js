import React, { useState } from 'react';
import { Title } from './Title';
import { services } from '../constants';

export const Services = () => (
  <section className="services">
    <Title title="services" />
    <div className="services-center">
      {services.length && services.map((item, index) => (
        <article
          key={index}
          className="service"
        >
          <span>{item.icon}</span>
          <h6>{item.title}</h6>
          <p>{item.info}</p>
        </article>
      ))}
    </div>
  </section>
);
