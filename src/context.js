import React, { useState, useContext } from 'react'
import sublinks from './resources/data'

const MyContext = React.createContext();

function MyProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  function toggleSidebar() {
    setIsSidebarOpen(prev => !prev);
  }

  return (
    <MyContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        hoveredIndex,
        setHoveredIndex
      }}
    >

      {children}

    </MyContext.Provider>
  );
}

function useMyContext() {
  return useContext(MyContext);
}

export {
  MyProvider,
  useMyContext
};