import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { useState } from "react";
import {
  faArrowRightArrowLeft,
  faMailBulk,
  faMobilePhone,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div>
      <div className=" home-slider flex flex-col md:flex-row justify-around items-center my-10 container gap-3">
        {/*<Carousel className=" " />*/}
        <div className=" flex flex-col items-center basis-3/4 gap-2">
          <div>
            <h5 className="font-2xl:bold 2xl:text-[16px] xl:text-[16px] lg:text-sm md:text-xs sm:text-xs text-[16px]  leading-[24px]">
              Since 1993
            </h5>
          </div>
          <div>
            <h1 className="font-bold text-[40px] lg:text-[58px]  leading-[80px]">
              Cozum Sigorta
            </h1>
          </div>
          <div>
            <h4 className=" text-base leading-[30px] ">
              Çözüm Sigorta Aracılık Hizmetleri Ltd. Şti.{" "}
            </h4>
          </div>
          <p className="font-sans text-base tracking-widest px-[20px] text-center">
            Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
            lorem sollicitudin, auci elit
          </p>
          203682
          <div>
            <Link to="/">
              <button className="bg-[#203682] px-5 py-2 rounded-lg text-white font-bold">
                Teklif Al
              </button>
            </Link>
          </div>
        </div>
        <div className="flex basis-3/4">
          <img src="aboutus.jpg " className="px-5 " />
        </div>
      </div>
      <div className="home-info flex flex-col items-center bg-[url('/info-bg.jpg')] my-10">
        <div className="flex flex-col gap-3 items-center mb-5">
          <h2 className="text-[#203682] font-bold leading-5 uppercase text-xl tracking-widest">
            What We Offer
          </h2>
          <h1 className="font-bold leading-5 uppercase text-3xl tracking-widest">
            Lorem ipsum proin
          </h1>
        </div>
        <div className="offers flex flex-col sm:flex-row justify-between gap-5 container">
          <div className="flex flex-col items-center text-center gap-4">
            <img src="/icon1.png" className="object-contain w-[84px]" />
            <h5 className="header-nav text-lg tracking-widest ">Title1</h5>
            <p className="font-sans text-base tracking-widest">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
              lorem sollicitudin, auci elit nascetur.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <img src="/icon2.png" className="object-contain w-[84px]" />
            <h5 className="header-nav text-lg tracking-widest ">Title2</h5>
            <p className="font-sans text-base tracking-widest">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
              lorem sollicitudin, auci elit nascetur.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <img src="/icon3.png" className="object-contain w-[84px]" />
            <h5 className="header-nav text-lg tracking-widest ">Title3</h5>
            <p className="font-sans text-base tracking-widest">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
              lorem sollicitudin, auci elit nascetur.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <img src="/icon4.png" className="object-contain w-[84px]" />
            <h5 className="header-nav text-lg tracking-widest ">Title4</h5>
            <p className="font-sans text-base tracking-widest">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
              lorem sollicitudin, auci elit nascetur.
            </p>
          </div>
        </div>
      </div>
      <section className="about-us container my-10">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <img
            src="/aboutus.jpg"
            className="rounded-lg w-[300px] lg:w-[600px] "
          ></img>
          <div className="flex-col flex items-center text-center gap-3 justify-center ">
            <h1 className="font-bold text-4xl">Cozum Sigorta Hakkında</h1>
            <h2 className="font-bold text-2xl text-[#203682]">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet.
            </h2>
            <p>
              Firmamız 1993 yılında İzmir'de Sami Zeybek ve Vildan Zeybek
              tarafından OYAK Sigorta Acenteliği olarak kurulmuştur. Kurulduğu
              günden beri sektörün öncü şirketlerinin acenteliğini yapmıştır.
              Güncel olarak İzmir'de profesyonel olarak acenteliğe devam
              etmektedir.
            </p>
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
              </button>
              <button
                className="font-bold text-xl bg-[#203682] px-4 py-2 rounded-lg"
                onClick={() =>
                  (window.location.href = "mailto:bilgi@sigortacozum.com.tr")
                }
              >
                <FontAwesomeIcon
                  icon={faMailBulk}
                  className="text-2xl "
                  style={{ color: "#ffffff" }}
                />
              </button>
              <button
                className="flex flex-row gap-2  px-4 py-2 rounded-lg bg-[#203682]"
                onClick={() => (window.location.href = "tel:+905554801111")}
              >
                <FontAwesomeIcon
                  icon={faMobilePhone}
                  className="text-2xl "
                  style={{ color: "#ffffff" }}
                />{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="home-programs container flex flex-col text-center gap-3">
        <h1 className="font-bold text-4xl">FAQ</h1>
        <h2 className="font-bold text-2xl text-[#203682]">
          Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
        </h2>
        <div>
          <Accordion
            flush
            open={open}
            toggle={toggle}
            className="font-bold text-md p-4 "
          >
            <AccordionItem>
              <AccordionHeader targetId="1">Question Item 1</AccordionHeader>
              <AccordionBody accordionId="1">
                <strong>This is the first item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">Question Item 2</AccordionHeader>
              <AccordionBody accordionId="2">
                <strong>This is the second item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">Question Item 3</AccordionHeader>
              <AccordionBody accordionId="3">
                <strong>This is the third item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
