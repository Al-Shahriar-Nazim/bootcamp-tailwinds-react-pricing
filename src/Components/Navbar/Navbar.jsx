import React, { useState } from "react";
import LInk from "../Link/LInk";
// import { Menu } from 'lucide-react';


const Navbar = () => {
    const[open,setOpen]=useState(false)
  const links = [
    {
      id: 1,
      page: "Home",
      href: "/",
    },
    {
      id: 2,
      page: "About",
      href: "/about",
    },
    {
      id: 3,
      page: "Contact",
      href: "/Contact",
    },
    {
      id: 4,
      page: "Sevices",
      href: "/Servies",
    },
  ];
  return (
    <div className="flex justify-between mx-6">
      <div onClick={()=>setOpen(!true)}>
        {open?"ase":"nai"}
        <span>My Blogs</span>
      </div>

      <div className="flex">
        {links.map((link) => (
          <LInk key={link.id} link={link}></LInk>
        ))}
      </div>
      <div>
        <button>MYButton</button>
      </div>
    </div>
  );
};

export default Navbar;
