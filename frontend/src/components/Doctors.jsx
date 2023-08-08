import React from "react";
import DoctorCard from "./DoctorCard";
import doctor1 from '../assets/img/doctors/doctor-1.png';
import doctor2 from '../assets/img/doctors/doctor-2.png';
import doctor3 from '../assets/img/doctors/doctor-3.png';
import doctor4 from '../assets/img/doctors/doctor-4.png';
import doctor5 from '../assets/img/doctors/doctor-5.png';
import doctor6 from '../assets/img/doctors/doctor-6.png';
import doctor7 from '../assets/img/doctors/doctor-7.png';
import doctor8 from '../assets/img/doctors/doctor-8.png';
import doctor9 from '../assets/img/doctors/doctor-9.png';


const doctors = [
    {
      name: "LESCANO, JOSE HUMBERTO",
      specialty: "CARDIOLOGIA",
      studies: ["ECG ELECTROCARDIOGRAMA", "ECG ELECTROCARDIOGRAMA PREQUIRURGICO"],
      healthPlans: ["ACA SALUD", "AMSTERDAM SALUD", "BRAMED"],
      pic: doctor1
    },
    {
      name: "CHAILE, LINA",
      specialty: "GINECOLOGÍA",
      studies: ["TOCOGINECOLOGO"],
      healthPlans: ["COLEGIO MEDICO", "IOSFA", "JURAMENTO SIST.DE S."],
      pic: doctor2
    },
    {
      name: "DIAZ SINGH, VICTOR FERNANDO",
      specialty: "CIRUGÍA GENERAL",
      studies: [],
      healthPlans: ["MEDIFE", "mosaistas", "O.S.JE.R.A."],
      pic: doctor3
    },
    {
      name: "FIGUEROA, CHRISTIAN",
      specialty: "CARDIOLOGIA",
      studies: ["ECG ELECTROCARDIOGRAMA", "ECG ELECTROCARDIOGRAMA PREQUIRURGICO"],
      healthPlans: ["OMINT", "OSDE 210", "AMSTERDAM SALUD"],
      pic: doctor4
    },
    {
      name: "ABDALA, ANDREA",
      specialty: "HEMATOLOGÍA",
      studies: [],
      healthPlans: ["BRAMED", "CAMIONEROS", "ACA SALUD"],
      pic: doctor5
    },
    {
      name: "GIORGIS, PAMELA",
      specialty: "REUMATOLOGÍA",
      studies: [],
      healthPlans: ["COLEGIO MEDICO", "OMINT", "BRAMED"],
      pic: doctor6
    },
    {
      name: "CLARASO, FLORENCIA",
      specialty: "NUTRICIÓN",
      studies: [],
      healthPlans: ["OSDE 210", "AMSTERDAM SALUD", "ACA SALUD"],
      pic: doctor7
    },
    {
      name: "MEDINA, MERCEDES",
      specialty: "ENDOCRINOLOGÍA",
      studies: [],
      healthPlans: ["MEDIFE", "mosaistas", "O.S.JE.R.A."],
      pic: doctor8
    },
    {
      name: "BUSTOS, CLAUDIA",
      specialty: "NEUMONOLOGÍA",
      studies: ["ESPIROMETRIA"],
      healthPlans: ["IOSFA", "JURAMENTO SIST.DE S.", "COLEGIO MEDICO"],
      pic: doctor9
    }
  ];

  function Doctors() {
    return (
      <div className="bg-white" id="doctors">
        <h2
          className="text-2xl font-bold mb-5 pb-5 text-black relative mx-auto text-center"
          style={{ fontSize: "32px" }}
        >
          Profesionales
          <div className="absolute w-24 h-px bg-gray-400 bottom-1 left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute w-10 h-1 bg-blue-600 bottom-0 left-1/2 transform -translate-x-1/2"></div>
        </h2>
        <div className="flex flex-wrap justify-center">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Doctors;   