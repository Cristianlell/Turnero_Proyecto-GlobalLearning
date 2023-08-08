import React from 'react';

const WhyUs = () => {
  const specialtiesList = [
    'Cardiología',
    'Cirugía General',
    'Cirugía Plástica',
    'Clínica',
    'Dermatología',
    'Ecografía',
    'Endocrinología',
    'Flebología',
    'Gastroenterología',
    'Ginecología',
    'Hematología',
    'Infectología',
    'Neumonología',
    'Neurología',
    'Nutrición',
    'Oftalmología',
    'Pediatría',
    'Psiquiatría',
    'Reumatología',
    'Reumatología Infantil',
    'Diagnóstico por Imagen',
    'Ecografías de la Mujer',
    'Ecografías Generales',
    'Ecodoppler'
  ];

  return (
    <section id="Especialidades" className="py-16 overflow-hidden bg-white">
      <div className="container mx-auto">
        <div className="section-title text-center pb-8">
          <h2 className="text-2xl font-bold mb-5 pb-5 text-black relative" style={{ fontSize: '32px' }}>
            Especialidades
            <div className="absolute w-24 h-px bg-gray-400 bottom-1 left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute w-10 h-1 bg-blue-600 bottom-0 left-1/2 transform -translate-x-1/2"></div>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {specialtiesList.map((specialty, index) => (
            <div
              key={index}
              className="text-center border border-gray-300 p-20 transition-all ease-in-out duration-300 rounded text-black hover:bg-blue-400 hover:text-white"
              style={{ padding: '80px 20px' }}
            >
              {specialty}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;