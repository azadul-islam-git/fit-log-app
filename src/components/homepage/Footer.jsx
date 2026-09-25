import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#202328] bg-black px-5 py-8 sm:px-8 mt-12">
      <div className="mx-auto flex container flex-col items-center justify-between gap-5 sm:flex-row">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-oswald text-sm font-bold text-white"
        >
          <Image
            src={logo}
            alt="FitLog logo"
            width={22}
            height={22}
            className="object-contain -rotate-45"
          />
          FITLOG
        </Link>

        {/* Copyright */}
        <p className="text-center text-xs leading-5 text-[#6B7280] sm:text-right sm:text-sm">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log
          honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
