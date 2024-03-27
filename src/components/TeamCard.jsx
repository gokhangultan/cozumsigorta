import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CategoryCard() {
  return (
    <div className="shadow-sm bg-[#FFFFFF] w-[305px] md:h-[383px] h-[483px] border-2 ">
      <img
        src="team1.png"
        className="md:w-[316px] md:h-[231px] w-[305px] h-[323px]"
      />
      <div className="flex-col flex items-center gap-3 mt-4">
        <h5 className="font-bold text-base leading-6 text-[#252B42]">
          Username
        </h5>
        <h6 className="font-bold text-sm text-secondaryColor leading-6">
          Profession
        </h6>
        <div className="flex flex-row gap-4 ">
          <a href="" target="_blank">
            <button className="hover:bg-gray-300 rounded-full p-1">
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                style={{ color: "#203682" }}
              />
            </button>
          </a>
          <a href="" target="_blank">
            <button className="hover:bg-gray-300 rounded-full p-1">
              <FontAwesomeIcon
                icon={faMailBulk}
                size="lg"
                style={{ color: "#203682" }}
              />
            </button>
          </a>
          <a href="" target="_blank">
            <button className="hover:bg-gray-300 rounded-full p-1">
              <FontAwesomeIcon
                icon={faPhone}
                size="lg"
                style={{ color: "#203682" }}
              />
            </button>
          </a>
          <a href="" target="_blank">
            <button className="hover:bg-gray-300 rounded-full p-1">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                style={{ color: "#203682" }}
              />
            </button>
          </a>
          <a href="" target="_blank">
            <button className="hover:bg-gray-300 rounded-full p-1">
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                style={{ color: "#203682" }}
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
