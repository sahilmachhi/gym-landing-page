import { FloatingNav } from "@/components/ui/floating-navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";

const Outlet = ({ children }: { children: React.ReactNode }) => {
  const navItems = [
    {
      name: "home",
      link: "#",
    },
    {
      name: "about",
      link: "#about",
    },
  ];
  return (
    <div>
     <nav>
     <FloatingNav navItems={navItems} className="" />
     </nav>
      <main>
      {children}
      </main>
    </div>
  );
};

export default Outlet;
