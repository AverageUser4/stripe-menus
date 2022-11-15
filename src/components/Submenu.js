import React from 'react';

import { useMyContext } from '../context.js';
import sublinks from '../resources/data.js';

const Submenu = () => {
  const { hoveredData, setHoveredData } = useMyContext();
  const sublink = sublinks[hoveredData.index];

  const positionStyle = {
    left: hoveredData.x + hoveredData.width / 2,
  };

  if(!sublink)
    return <article className="submenu"></article>

  return (
    <article
      style={positionStyle}
      className="submenu show"
      onMouseEnter={() => setHoveredData(prev => ({ ...prev, index: hoveredData.index }))}
      onMouseLeave={() => setHoveredData(prev => ({ ...prev, index: -1 }))}
    >

      <h4>{sublink.page}</h4>

      <div className={`submenu-center col-${sublink.links.length}`}>

        {
          sublink.links.map(link =>
            <a
              key={link.label} 
              href={link.url}
            >
              {link.icon}
              {link.label}
            </a>
          )
        }

      </div>

    </article>
  );
}

export default Submenu
