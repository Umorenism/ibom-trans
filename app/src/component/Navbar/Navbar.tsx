"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Darkmode } from "../Darkmode";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { ResponsiveMenu } from "../ResponsiveMenu";
import { usePathname } from "next/navigation";

export const Navlink = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Features",
    link: "/features",
  },
  {
    id: 4,
    name: "Booking",
    link: "/booking",
    submenu: [
      // {
      //   id: 1,
      //   name: "BookingID",
      //   link: "/booking/:id",
      // },
      // {
      //   id: 2,
      //   name: "Reschedule",
      //   link: "/booking/reschedule",
      // },
    ],
  },
  {
    id: 5,
    name: "Booking ID",
    link: "/bookingid",
  },
  {
    id: 6,
    name: "Reshedule",
    link: "/reshedule",
  },
];

export const Navbar = () => {
  const pathName = usePathname();
  const [showmenu, setShowMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleMenu = () => {
    setShowMenu(!showmenu);
  };

  const handleMouseEnter = (id: number) => {
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="fixed z-10 top-0 left-0 right-0 shadow-md w-full dark:bg-black dark:text-white bg-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold">
            <span>I</span>
            <span className="text-primary">ET</span>
          </Link>
          {/* Desktop menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              {Navlink.map(({ id, name, link, submenu }) => {
                const isActive = pathName === link;
                return (
                  <li
                    key={id}
                    className="relative py-4"
                    onMouseEnter={
                      submenu ? () => handleMouseEnter(id) : undefined
                    }
                    onMouseLeave={submenu ? handleMouseLeave : undefined}
                  >
                    <Link
                      href={link}
                      className={`${
                        isActive ? "bg-primary dark:text-black" : ""
                      } text-lg font-medium text-black dark:text-white py-2 px-4 rounded-full hover:bg-primary duration-300`}
                    >
                      {name}
                    </Link>
                    {submenu && openDropdown === id && (
                      <ul
                        className="absolute top-full left-0 mt-2 bg-white dark:bg-black shadow-md rounded-md py-2"
                        style={{ zIndex: 1000 }} // Ensure the dropdown is on top
                        onMouseEnter={() => setOpenDropdown(id)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {submenu.map(({ id, name, link }) => (
                          <li key={id}>
                            <Link
                              href={link}
                              className="block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
              {/* Darkmode features implement */}
              <Darkmode />
            </ul>
          </div>

          {/* mobile menu section */}
          <div className="md:hidden flex items-center gap-4">
            <Darkmode />
            {showmenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showmenu={showmenu} />
    </nav>
  );
};
