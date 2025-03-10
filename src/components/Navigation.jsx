/**
 * This code was generated by Builder.io.
 */
import React from "react";

function Navigation() {
  const navItems = [
    { text: "Home", className: "w-[89px]" },
    { text: "Therapist", className: "w-36" },
    { text: "Chat now", className: "w-[139px]" },
    { text: "About us", className: "w-[131px]" },
    { text: "Login", className: "w-[82px]" },
  ];

  return (
    <nav>
      <ul className="flex">
        {navItems.map((item, index) => (
          <li key={index} className={`mx-4 ${item.className}`}>
            <a
              href="#"
              className="text-black hover:text-red-600 transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
