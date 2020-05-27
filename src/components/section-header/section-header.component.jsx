import React from 'react';

import './section-header.styles.scss';

const SectionHeader = ({ children, bottoms }) => (
  <div className={`${bottoms ? 'section-header__wrapper' : ''}`}>
    <h2 className='section-header'>{children}</h2>
  </div>
);

export default SectionHeader;