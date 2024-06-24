import Link from "next/link";
// import { motion } from "framer-motion";
import Logo from "../components/Logo";
import { NAVIGATION } from "../constants";
import Image from "next/image";
import BlackLogo from "../assets/svg/logoBlack.svg";

function Layout({ children }) {
  return (
    <>
      <div className="relative flex h-[100vh] flex-col md:flex-row z-0">
        {/* This is the parent container of the entire app */}
        <div
          className="w-full h-full text-white bg-black md:w-1/2"
          // initial={{ x: "-100%", opacity: 1 }}
          // animate={{ x: "0%", opacity: 1 }}
          // transition={{ duration: 1.5, delay: 3 }}
        >
          {/* This is the black left side with navigation links */}
          <div className="flex justify-between">
            <Link href={"/"} className="absolute group flex justify-center gap-4 top-10 left-10">
              <Logo color="fill-white group-hover:fill-blue-600" size={25} />
              <span className="text-2xl font-medium uppercase group-hover:text-blue-600">
                Pixel Prysm
              </span>
            </Link>

            {/* <Navbar /> */}
            <header className="absolute flex flex-col bottom-10 left-10">
              {NAVIGATION.map((link, index) => (
                <div key={index}>
                  <Link
                    href={link.path}
                    onClick={() => console.log("Pressed a link")}
                    className={`${link.animation} -my-1 text-6xl font-semibold tracking-tighter uppercase hover:text-blue-600`}
                  >
                    {link.title}
                  </Link>
                </div>
              ))}
            </header>
          </div>
        </div>

        <div
          className="flex flex-col items-start w-full h-full pt-10 pl-10 overflow-y-auto text-black bg-white md:w-1/2 gap-y-16"
          // initial={{ x: "100%", opacity: 1 }}
          // animate={{ x: "0%", opacity: 1 }}
          // transition={{ duration: 1.5, delay: 3 }}
        >
          {/* This is the white right side with showcase */}
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
