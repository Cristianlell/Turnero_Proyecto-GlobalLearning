import React from "react";

function Appointment() {
  return (
    <div className="bg-white text-center py-8">
      <h2
        className="text-2xl font-bold mb-5 pb-5 text-black relative mx-auto"
        style={{ fontSize: "32px" }}
      >
        Turnos
        <div className="absolute w-24 h-px bg-gray-400 bottom-1 left-1/2 transform -translate-x-1/2"></div>
        <div className="absolute w-10 h-1 bg-blue-600 bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </h2>
    </div>
  );
}

export default Appointment;