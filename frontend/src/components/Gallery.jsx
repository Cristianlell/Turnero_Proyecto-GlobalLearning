import React from "react";
import image1 from "../assets/img/consultorio1.webp";
import image3 from "../assets/img/consultorio3.webp";
import image4 from "../assets/img/consultorio4.webp";
import image5 from "../assets/img/consultorio8.webp";
import image7 from "../assets/img/consultorio7.webp";

function Gallery() {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto lg:pt-24">
        <div className="flex flex-wrap">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={image3}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={image7}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={image1}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={image4}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={image3}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={image5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
