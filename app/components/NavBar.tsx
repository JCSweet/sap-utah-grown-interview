import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="pt-12 z-10 w-3/4">
      <ul id="navbar" className="flex flex-row justify-evenly flex-wrap gap-4">
        <li><Link href="#">APPOINTMENTS</Link></li>
        <li><Link href="#">MEDICAL CARD INFO</Link></li>
        <li><Link href="#">FAQs</Link></li>
        <li><Link href="#">PHARMACIES</Link></li>
        <li><Link href="#">ABOUT</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;
