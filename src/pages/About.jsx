import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Team from "./Team";
import Companies from "../components/Companies";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function About() {
  return (
    <div className="mt-5 ">
      <div>
        <div className="flex lg:flex-row flex-col container  ">
          <div className="  flex flex-col  gap-4  basis-3/4 justify-center ">
            <h5 className="font-bold text-base leading-6 text-[#252B42]">
              Cozum Sigorta
            </h5>
            <h1 className="font-bold text-6xl leading-[80px] text-[#252B42]">
              Hakkımızda
            </h1>
            <h4 className="text-xl text-secondaryColor leading-7">
              Firmamız 1993 yılında İzmir'de Sami Zeybek ve Vildan Zeybek
              tarafından OYAK Sigorta Acenteliği olarak kurulmuştur. Kurulduğu
              günden beri sektörün öncü şirketlerinin acenteliğini yapmıştır.
              Güncel olarak İzmir'de profesyonel olarak acenteliğe devam
              etmektedir.
            </h4>
            <div>
              <Link to="/contact">
                <button className="bg-[#203682] px-5 py-3 rounded-md text-white  hover:bg-gray-300">
                  İletişim
                </button>
              </Link>
            </div>
          </div>
          <div className=" ">
            <img src="aboutus2.png" className="" />
          </div>
        </div>
      </div>
      <div className="container collection-text">
        <div className="pt-[100px]  ">
          <p className="text-sm leading-5 text-[#E74040] mb-3">
            Problems trying
          </p>

          <div className="flex md:flex-row flex-col justify-between gap-[80px]">
            <div className="flex basis-1/3">
              <h3 className="font-bold text-2xl leading-8 text-[#252B42]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent.
              </h3>
            </div>
            <div className="flex basis-2/3">
              <p className="text-secondaryColor text-sm leading-5 text-start">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
          </div>
        </div>

        <div className=" text-center py-5 ">
          <div className="flex md:flex-row flex-col gap-3 justify-between">
            <div className="flex-col">
              <h1 className="font-bold text-6xl leading-[80px] text-[#252B42]">
                15K
              </h1>
              <h5 className="text-base text-secondaryColor font-bold leading-6">
                Happy Customers
              </h5>
            </div>
            <div>
              <h1 className="font-bold text-6xl leading-[80px] text-[#252B42]">
                150K
              </h1>
              <h5 className="text-base text-secondaryColor font-bold leading-6">
                Monthly Visitors
              </h5>
            </div>
            <div>
              <h1 className="font-bold text-6xl leading-[80px] text-[#252B42]">
                15
              </h1>
              <h5 className="text-base text-secondaryColor font-bold leading-6">
                Countries Worldwide
              </h5>
            </div>
            <div>
              <h1 className="font-bold text-6xl leading-[80px] text-[#252B42]">
                100+
              </h1>
              <h5 className="text-base text-secondaryColor font-bold leading-6">
                Top Partners
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] py-[100px] ">
        <div className="flex flex-col text-center gap-5  ">
          <h2 className="text-[#252B42] font-bold text-[40px] leading-[40px]">
            Big Companies Are Here
          </h2>
          <p className="text-sm text-secondaryColor leading-5 ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="bg-[#FAFAFA] py-5 ">
          <Companies />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between bg-[#2A7CC7] px-[50px] md:px-[200px]">
        <div className="flex-col  basis-1/3 flex justify-center gap-4 mx-20 sm:mx-40 py-5 collection-text ">
          <h5 className="text-sm font-bold text-white leading-6">
            WORK WITH US
          </h5>
          <h2 className="font-bold leading-[50px] text-[40px] text-white">
            Now Let’s grow Yours
          </h2>
          <p className="text-sm leading-5 text-white">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <div>
            <button className="border-1 border-white px-4 py-2 rounded-md text-white sm:w-[193px] w-[123px] h-[52px] hover:bg-gray-300 hover:text-primaryColor">
              Button
            </button>
          </div>
        </div>
        <div className="justify-end flex items-end">
          <img
            src="aboutus.jpg"
            className="md:w-[590px] w-full h-[640px] hidden md:flex "
          />
        </div>
      </div>
    </div>
  );
}
