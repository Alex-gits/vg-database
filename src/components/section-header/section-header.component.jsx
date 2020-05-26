import React from 'react';

import './section-header.styles.scss';

const SectionHeader = ({ children, bottom }) => (
  <div className={`${bottom ? 'section-header__wrapper' : ''}`}>
    <h2 className='section-header'>{children}</h2>
  </div>
);

export default SectionHeader;