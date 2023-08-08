import React, { useState } from 'react';

const Studies = () => {
  const [activeTab, setActiveTab] = useState('OFTALMOLOGICOS');

  const tabs = {
    OFTALMOLOGICOS: [
      'FONDO DE OJOS', 'CAMPO VISUAL COMPUTARIZADO', 'RETINOGRAFIA',
      'TOMOGRAFIA DE COHERENCIA OPTICA(OCT)', 'TOPOGRAFIA CORNEAL',
      'PAQUIMETRIA', 'ECONOMETRIA', 'TEST DE COLORES',
      'ATENCION OFTALMOLOGICA GENERAL Y PEDIATRICA'
    ],
    CARDIOLÓGICOS: [
      'COLOCACIÓN DE HOLTER', 'ELECTROCARDIOGRAMA (ECG)', 'ERGOMETRÍA',
      'ECODDOPLER CARDIACO, DE VASO DE CUELLO Y DE MIEMBROS INFERIORES.',
      'APTO FISICO', 'PRE-LABORALES'
    ],
    NEUROLOGICOS: ['ELECTROENCEFALOGRAMA'],
    GINECOLOGICOS: ['PAPANICOLAU (PAP)', 'COLPOSCOPIA', 'MONITOREO FETAL'],
    NEUMONOLÓGICOS: ['ESPIROMETRIA'],
    FONOAUDIOLOGICOS: ['AUDIOMETRIA', 'LOGOAUDIOMETRIA']
  };

  return (
    <section id="studies" className="departments bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center pb-8">
          <h2 className="text-2xl font-bold mb-5 pb-5 text-black relative" style={{ fontSize: '32px' }}>
            Estudios
            <div className="absolute w-24 h-px bg-gray-400 bottom-1 left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute w-10 h-1 bg-blue-600 bottom-0 left-1/2 transform -translate-x-1/2"></div>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/4">
            <ul className="space-y-2">
              {Object.keys(tabs).map((key) => (
                <li key={key}>
                  <button
                    className={`w-full text-left p-2 ${activeTab === key ? 'bg-blue-300' : 'hover:bg-blue-100'}`}
                    style={{ transition: '0.3s', color: activeTab === key ? '#000000' : '#2c4964' }}
                    onClick={() => setActiveTab(key)}
                  >
                    {key}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-3/4">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-5 text-black">{activeTab}</h3>
              <ul className="list-inside list-decimal pl-5">
                {tabs[activeTab].map((item, index) => (
                  <li key={index} className="text-gray-700 mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studies;
