import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFax, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const showForm = () => {
    document.getElementById("contactForm").classList.remove("hidden");
  };
  return (
    <div>
      <div className="my-20 px-[10px] lg:px-[250px]">
        <div className="flex flex-col items-center gap-4 ">
          <h2 className="font-bold text-[40px] leading-10 md:w-[607px] w-[307px] text-center">
            Bizimle İletişime Geçin
          </h2>
          <h4 className="text-secondaryColor text-xl leading-8 md:w-[607px] w-[307px] text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:{" "}
          </h4>
          <button
            onClick={showForm}
            className="text-sm font-bold leading-6 bg-[#203682] rounded px-5 py-3 text-white hover:text-primaryColor hover:bg-gray-400 border-1 border-primaryColor "
          >
            MESAJ GÖNDER
          </button>
          M. Kemal Sahil Bul. No:615 A Göztepe Konak İzmir
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              className="flex flex-row gap-2  px-4 py-2 rounded-lg bg-[#203682]"
              onClick={() => (window.location.href = "tel:+902324842829")}
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="text-2xl "
                style={{ color: "#ffffff" }}
              />{" "}
              <p className="font-bold text-xl text-white">+90 232 484 2829</p>
            </button>
            <button
              className="font-bold text-xl bg-[#203682] px-4 py-2 rounded-lg flex flex-row gap-2 justify-between"
              onClick={() =>
                (window.location.href = "mailto:bilgi@sigortacozum.com.tr")
              }
            >
              <p className="text-white">Bize Ulaşın </p>
              <FontAwesomeIcon
                icon={faMailBulk}
                className="text-2xl "
                style={{ color: "#ffffff" }}
              />
            </button>
            <button
              className="flex flex-row gap-2  px-4 py-2 rounded-lg bg-[#203682]"
              onClick={() => (window.location.href = "tel:+902324843095")}
            >
              <FontAwesomeIcon
                icon={faFax}
                className="text-2xl "
                style={{ color: "#ffffff" }}
              />{" "}
              <p className="font-bold text-xl text-white">+90 232 484 30 95</p>
            </button>
            <button
              className="flex flex-row gap-2  px-4 py-2 rounded-lg bg-[#203682]"
              onClick={() => (window.location.href = "tel:+905554801111")}
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="text-2xl "
                style={{ color: "#ffffff" }}
              />{" "}
              <p className="font-bold text-xl text-white">+90 555 480 11 11</p>
            </button>
          </div>
          <div className="flex flex-row gap-1">
            <button className="hover:text-white hover:bg-gray-300 rounded-lg px-4 py-2 bg-[#203682]">
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                style={{ color: "#ffffff" }}
              />
            </button>

            <button className="hover:text-white hover:bg-gray-300 rounded-lg px-4 py-2 bg-[#203682]">
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                style={{ color: "#ffffff" }}
              />
            </button>
            <button className="hover:text-white hover:bg-gray-300 rounded-lg px-4 py-2 bg-[#203682]">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                style={{ color: "#ffffff" }}
              />
            </button>
            <button className="hover:text-white hover:bg-gray-300 rounded-lg px-4 py-2 bg-[#203682]">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
          <form
            id="contactForm"
            className="hidden"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex-col flex bg-[#F9F9F9] sm:w-[607px] w-[387px] sm:p-20 p-5 gap-5">
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Adınız"
                className="p-2 rounded-xl"
              />
              {errors.name && <span>İsim Alanı Zorunludur</span>}
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                className="p-2 rounded-xl"
              />
              {errors.email && <span>Lütfen Email Adresinizi Giriniz</span>}
              <textarea
                {...register("message", { required: true })}
                type="text"
                placeholder="Mesajınız"
                className="px-2 py-5 rounded-xl"
              />
              {errors.message && <span>Mesaj Alanı Boş Bırakılamaz</span>}
              <button
                type="submit"
                className="text-sm font-bold leading-6 bg-[#203682] rounded px-5 py-3 text-white hover:text-primaryColor hover:bg-gray-400 border-1 border-primaryColor"
              >
                İletişime Geç
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
