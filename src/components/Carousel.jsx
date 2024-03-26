import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UncontrolledCarousel } from "reactstrap";

function CustomCarousel() {
  return (
    <div className="shadow-[#203682] shadow-xl  opacity-100">
      <style>{`
        .carousel-item  {
          height: 750px;
          object-fit: contain; 
          
        }
      `}</style>
      <div className="">
        <UncontrolledCarousel
          items={[
            {
              key: 1,
              src: "e2textlogo.png",
            },
            {
              key: 2,
              src: "e2textlogo.png",
            },
            {
              key: 3,
              src: "e2textlogo.png",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default CustomCarousel;
