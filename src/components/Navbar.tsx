import React from "react";

const Navbar = () => {
    const NavbarItems = [
        {
            href: "#home",
            text: "Home"
        },
        {
            href: "#about",
            text: "About"
        },
        {
            href: "#features",
            text: "Features"
        },
        {
            href: "#plan",
            text: "Plans"
        }, 
        {
            href: "#trainer",
            text: "Trainer"
        },
         {
            href: "#contact",
            text: "Contact"
        },     
         {
            href: "#cta",
            text: "Join Now"
        }
    ]
    const mobileNavItems = [
        {
            href:"#home",
            text:"Home"
        },
        {
            href:"#about",
            text:"About"
        },
        {
            href:"#features",
            text:"Features"
        },
        {
            href:"#contact",
            text:"Contact"
        }
    ]
    return (
        <div className="flex justify-center items-center top-3 fixed w-full z-50">
            <nav className="hidden lg:flex gap-1 p-0.5 border border-white/15 rounded-full backdrop-blur-3xl z-50">
                {
                NavbarItems.map(({
                    href,
                    text
                }, i) => <a href={href}
                    data-scroll
            
                    className={`navbar_text ${i === NavbarItems.length - 1 ? `bg-white/80 text-black hover:bg-white hover:text-black`: ``}`}
                    key={i}>
                    {text} </a>)
            } </nav>
             <nav className="lg:hidden flex gap-1 p-0.5 border border-white/15 rounded-full backdrop-blur-3xl z-50">
                {
                mobileNavItems.map(({
                    href,
                    text
                }, i) => <a href={href}
                    data-scroll
                    className="navbar_text"
                    key={i}>
                    {text} </a>)
            } </nav>
        </div>
    );
};

export default Navbar;
