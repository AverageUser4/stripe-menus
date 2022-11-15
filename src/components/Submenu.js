import React, { useState, useRef, useEffect } from 'react'

import { useMyContext } from '../context.js';
import sublinks from '../resources/data.js';

const Submenu = () => {
  const { hoveredIndex, setHoveredIndex } = useMyContext();
  const sublink = sublinks[hoveredIndex];

  console.log(sublink)

  if(!sublink)
    return <article className="submenu"></article>

  return (
    <article 
      className="submenu show"
      onMouseEnter={() => setHoveredIndex(hoveredIndex)}
      onMouseLeave={() => setHoveredIndex(-1)}
    >

      <h4>{sublink.page}</h4>

      <div className="submenu-center col-3">

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
