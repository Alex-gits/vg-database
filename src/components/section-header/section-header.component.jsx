import React from 'react';

import './section-header.styles.scss';

const SectionHeader = ({ children }) => (
  <div>
    <h2 className='section-header'>{children}</h2>
  </div>
);

export default SectionHeader;