import React, { useState, useContext } from 'react'

const MyContext = React.createContext();

function MyProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [linkButtonsPositions, setLinkButtonsPositions] = React.useState([]);
  const [hoveredData, setHoveredData] = useState({
    index: -1,
    x: 0
  });

  function toggleSidebar() {
    setIsSidebarOpen(prev => !prev);
  }

  return (
    <MyContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        hoveredData,
        setHoveredData,
        linkButtonsPositions,
        setLinkButtonsPositions
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