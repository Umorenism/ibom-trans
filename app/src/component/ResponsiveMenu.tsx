import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Navlink } from "../component/Navbar/Navbar";
import Link from "next/link";
interface ResponsiveMenuProps {
  showmenu: any;
}
export const ResponsiveMenu = ({ showmenu }: ResponsiveMenuProps) => {
  return (
    <div
      className={`${
        showmenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex flex-col h-screen w-[75%] justify-between bg-white dark:bg-dark dark:text-white px-8 pb-6 pt-16 text-black duration-300 md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        <div className="flex items-center justify-normal gap-3">
          <FaUserCircle size={30} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        {/* Navigation section */}
        <nav className="mt-12">
          <ul>
            {Navlink.map(({ id, name, link }) => {
              return (
                <li key={id} className="py-4">
                  <Link
                    href={link}
                    className={`text-lg font-medium text-black dark:text-white duration-300`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* footer bottom */}
      <div>
        <h1 className="footer">
          Code by{" "}
          <a href="https://dealdrivetechnology.com">Dealdrivetechnology</a>
        </h1>
      </div>
    </div>
  );
};
