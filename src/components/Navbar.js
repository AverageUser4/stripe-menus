import React from 'react'
import logo from '../resources/logo.svg'
import { FaBars } from 'react-icons/fa'
import sublinks from '../resources/data';

import { useMyContext } from '../context.js';

const Navbar = () => {
  const { toggleSidebar, setHoveredIndex } = useMyContext();

  return (
    <nav className="nav">

      <div className="nav-center">

        <header className="nav-header">

          <img src={logo}/>

          <button 
            className="btn toggle-btn"
            onClick={toggleSidebar}
          >
            <FaBars/>
          </button>

        </header>

        <ul className="nav-links">

          {
            sublinks.map((sublink, index) =>
              <li key={sublink.page}>
                <button 
                  className="link-btn"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                >{sublink.page}</button>
              </li>
            )
          }

        </ul>

      </div>

      <button className="btn signin-btn">Sign in</button>

    </nav>
  );
}

export default Navbar
