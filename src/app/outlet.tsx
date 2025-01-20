import React from "react";

const Outlet = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>
      {children}
      </main>
    </>
    
  );
};

export default Outlet;
