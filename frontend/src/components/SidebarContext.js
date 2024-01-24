import React, { createContext, useContext, useEffect, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarActive, setSidebarActive] = useState(window.innerWidth > 768);
  console.log(`sidebar context: ${isSidebarActive}`);


  const toggleSidebar = () => {
    setSidebarActive((prev) => !prev);

    const sidebar = document.querySelector('.sidebar');
    const arrowIcon = document.querySelector('.navbar');
  
    if (sidebar && arrowIcon) {
      sidebar.classList.toggle("active");
      arrowIcon.classList.toggle("active");
    }
  };

  return (
    <SidebarContext.Provider value={{ isSidebarActive, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};


export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  const { isSidebarActive, toggleSidebar } = context;

  // Close the sidebar automatically when the window width is below a certain threshold
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800 && isSidebarActive) {
        toggleSidebar();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSidebarActive, toggleSidebar]);


  useEffect(() => {
    const arrowIcon = document.querySelector('.navbar');
    const overlayStripeElem = document.querySelectorAll(".overlay-stripe-elements");
    
    if (arrowIcon) {
      arrowIcon.classList.toggle('active', isSidebarActive);
    }

    if (overlayStripeElem) {
      overlayStripeElem.forEach((element) => {
        if (isSidebarActive) {
          element.classList.add("sidebar-active");
          element.classList.remove("sidebar-inactive");
        } else {
          element.classList.remove("sidebar-active");
          element.classList.add("sidebar-inactive");
        }
      });
    }
  }, [isSidebarActive]);

  return { isSidebarActive, toggleSidebar };
};