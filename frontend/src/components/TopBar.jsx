import React from "react";

function TopBar() {
  return (
    <div
      id="topbar"
      className="flex items-center fixed-top bg-white h-10 text-black text-sm"
    >
      {" "}
      {/* Cambiado el color del texto a negro */}
      <div className="container flex justify-between">
        <div className="contact-info flex items-center">
          <i className="bi bi-envelope pr-1 ml-4"></i>
          <a
            href="mailto:medicalsur2018@gmail.com"
            className="hover:text-blue-800 transition-colors duration-300"
          >
            medicalsur2018@gmail.com
          </a>
          <i className="bi bi-phone pr-1 ml-4"></i> 0381 - 4855253
          <i className="bi bi-whatsapp pr-1 ml-4"></i>
          <a
            href="https://api.whatsapp.com/send?phone=+5493815242500"
            className="hover:text-blue-800 transition-colors duration-300"
          >
            3815242500
          </a>
        </div>
        <div className="hidden lg:flex social-links items-center text-blue-400 pl-4">
          <a
            href="https://www.facebook.com/medicalsurtuc"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook hover:text-blue-800 transition-colors duration-300 ml-4"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/medicalsurtuc"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram hover:text-blue-800 transition-colors duration-300 ml-4"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
