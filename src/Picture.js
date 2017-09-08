import React from 'react';

const Picture = ({ url }) =>
  <div className="circular--landscape">
    <img className="portfolio-picture" src={url} alt={url} />
  </div>;

export default Picture;
