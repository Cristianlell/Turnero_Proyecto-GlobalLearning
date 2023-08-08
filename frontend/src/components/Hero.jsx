import React from "react";
import "../styles.css"; // Importar la hoja de estilos

function Hero() {
  return (
    <section id="hero" className="flex items-center hero-bg w-full">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-black">Bienvenido a VitalCare</h1>
        <h2 className="text-2xl text-black">
          Tu salud en nuestras manos
        </h2>
      </div>
    </section>
  );
}

export default Hero;
