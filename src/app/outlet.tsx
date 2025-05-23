import Navbar from "@/components/Navbar";
import React from "react";

const Outlet = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>
        <Navbar/>
      {children}
      </main>
    </>
    
  );
};

export default Outlet;
