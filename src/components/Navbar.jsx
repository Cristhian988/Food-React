import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import user from "../assets/user1.jpg";

export default function Navbar() {
  return (
    <div className="py-4">
      <div className="container flex justify-between items-center">
        <div>
          <p className="text-xl font-semibold">
            FOOD <span className="text-red-500">EAT</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-6">
          <ul className="gap-8 hidden sm:flex">
            <li>
              <a href="#" className="hover:border-b-2 border-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:border-b-2 border-primary">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:border-b-2 border-primary">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <img src={user} alt="user" className="w-10 rounded-full" />
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}
