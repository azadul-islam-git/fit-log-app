"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import PlanButton from "../button/PlanButton";
import SavedButton from "../button/SavedButton";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={
            pathName === "/"
              ? "rounded-full bg-[#17220e] px-5 py-2 font-semibold text-[#C2F800]"
              : "font-semibold font-inter text-white rounded-full px-5 py-2"
          }
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className={
            pathName === "/my-plan"
              ? "rounded-full bg-[#17220e] px-5 py-2 font-semibold text-[#C2F800]"
              : "font-semibold font-inter text-white rounded-full px-5 py-2"
          }
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <nav className="border-b border-[#202328]">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu />
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 font-oswald text-2xl font-extrabold text-white"
          >
            <Image src={logoImg} width={30} height={30} alt="Fitlog logo" />
            FITLOG
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 items-center">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-4">
          <Link href="/plan">
            <PlanButton />
          </Link>

          <Link href="/saved">
            <SavedButton />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
