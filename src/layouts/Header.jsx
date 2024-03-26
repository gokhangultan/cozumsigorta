import React, { useState } from "react";
import {
  faBars,
  faCarBurst,
  faDumbbell,
  faHouseCrack,
  faPhone,
  faShoppingBasket,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
203682;
export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <div className="container my-2">
      <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
        <logo>
          <img
            src="/cozumlogo.png"
            className="lg:max-w-[150px] max-w-[100px] object-contain  "
          />
        </logo>
        <nav className=" hidden lg:flex flex-col sm:flex-row justify-between gap-3 basis-2/6 header-nav ">
          <button className="  hover:text-[#203682]">Home</button>
          <button>About</button>
          <button>Team</button>
          <button>Pricing</button>
          <button>Contact</button>
        </nav>
        <div className="flex flex-col sm:flex-row justify-between gap-5 basis-1/12 items-center ">
          <button>
            <FontAwesomeIcon
              icon={faCarBurst}
              className="text-2xl "
              style={{ color: "#203682" }}
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faHouseCrack}
              className="text-2xl "
              style={{ color: "#203682" }}
            />
          </button>
          <button onClick={() => (window.location.href = "tel:+902324842829")}>
            <FontAwesomeIcon
              icon={faPhone}
              className="text-2xl "
              style={{ color: "#203682" }}
            />
          </button>
          <button className="flex lg:hidden" onClick={toggleNavVisibility}>
            <FontAwesomeIcon icon={faBars} className="text-4xl" />
          </button>
        </div>
      </div>
      <nav
        className={` mobile-menu flex flex-col justify-between gap-3 items-center my-2 header-nav ${
          isNavVisible ? "" : "hidden"
        }`}
      >
        <button>Home</button>
        <button>About</button>
        <button>Team</button>
        <button>Pricing</button>
        <button>Contact</button>
      </nav>
    </div>
  );
}
