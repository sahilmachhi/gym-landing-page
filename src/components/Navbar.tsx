import React from "react";
import { content } from "../lib/constant";
import { HoverButton } from "./ui/hover-button";
const Navbar = () => {
  const NavbarItems = content.navbar.navbarItems;
  const mobileNavItems = content.navbar.mobileNavItems;
  return (
    <div className="mx-auto flex items-center justify-center">
      <div className="flex items-center top-3 fixed justify-center lg:justify-between container mx-auto w-full z-50">
        <div className="text-2xl font-bold hidden lg:block">logo</div>
        <nav className="hidden lg:flex gap-1 p-0.5 border border-white/15 rounded-full backdrop-blur-3xl z-50">
          {NavbarItems.map(({ href, text }, i) => (
            <a
              href={href}
              data-scroll
              className={`navbar_text ${
                i === NavbarItems.length - 1
                  ? `bg-white/80 text-black hover:bg-white hover:text-black`
                  : ``
              }`}
              key={i}
            >
              {text}{" "}
            </a>
          ))}{" "}
        </nav>
        <nav className="lg:hidden flex gap-1 p-0.5 border border-white/15 rounded-full backdrop-blur-3xl z-50">
          {mobileNavItems.map(({ href, text }, i) => (
            <a href={href} data-scroll className="navbar_text" key={i}>
              {text}{" "}
            </a>
          ))}{" "}
        </nav>
        <HoverButton className="hidden lg:block poppins-bold">Get Started</HoverButton>
        {/* <div className="w-auto">
          <button className="text-white">Get Started</button>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
