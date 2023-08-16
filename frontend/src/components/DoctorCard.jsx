import React, { useState } from 'react';

const DoctorCard = ({ doctor }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="card w-full md:w-96 bg-white shadow-xl mb-6 rounded-lg p-4 mx-2">
      <figure>
        <img
          src={doctor.pic}
          alt={doctor.name}
          className="rounded-full w-24 h-24 mx-auto md:w-32 md:h-32"
        />
      </figure>
      <div className="card-body text-center md:text-left">
        <h2 className="card-title text-xl font-bold text-black">{doctor.name}</h2>
        <p className="text-black">{doctor.specialty}</p>
        <ul className="text-black mb-4">
          {doctor.studies.map((study, index) => (
            <li key={index}>{study}</li>
          ))}
        </ul>
        <div className="card-actions justify-center md:justify-end">
          <button
            className="btn bg-black text-white px-4 py-2 rounded-full"
            onClick={() => setModalOpen(true)}
          >
            Ver obras sociales
          </button>
        </div>
      </div>
      {modalOpen && (
        <div className="modal-container fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-full max-w-md text-black border border-gray-300">
            <h4 className="text-xl font-bold mb-4 text-center">{doctor.name}</h4>
            <ul>
              {doctor.healthPlans.map((plan, index) => (
                <li key={index}>{plan}</li>
              ))}
            </ul>
            <div className="flex justify-center">
              <button
                className="mt-4 bg-black text-white px-4 py-2 rounded-full"
                onClick={() => setModalOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorCard;
