import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from '../resources/data'

import { useMyContext } from '../context.js';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useMyContext();

  return (
    <div className={isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}>

      <nav className="sidebar">

        <button 
          className="close-btn"
          onClick={toggleSidebar}
        ><FaTimes/></button>

        {
          sublinks.map(sublink => 
            <article key={sublink.page}>

              <h4>{sublink.page}</h4>
    
              <div className="sidebar-sublinks">
    
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
          )
        }


      </nav>

    </div>
  );
}

export default Sidebar
