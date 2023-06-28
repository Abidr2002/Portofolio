import React from "react";
import FotoDiri from "../assets/fotodiri2.png";
import { TbSquareRoundedArrowRight } from "react-icons/tb";
import { Link } from "react-scroll";

const Beranda = () => {
  return (
    <div
      name="beranda"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-blue-950 flex flex-col justify-center"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col justify-center w-full md:w-1/2 mt-12 md:mt-0 md:order-2">
            <h2 className="text-4xl sm:text-6xl font-bold text-white text-center md:text-left">
              Mahasiswa UPN Veteran JATIM
            </h2>
            <p className="text-gray-400 py-4 max-w-md text-center md:text-left">
              Mahasiswa Informatika semeseter 5. Saat ini suka belajar
              pengembangan web dan mencoba mengimplementasikan berbagai
              framework seperti Tailwind, React, Bootstrap, dll.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-slate-500 to-zinc-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-500">
                  <TbSquareRoundedArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-1/2 md:order-1">
            <img
              src={FotoDiri}
              alt="my profile"
              className="rounded-2xl w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
