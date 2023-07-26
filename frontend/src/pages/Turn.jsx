/* import { useEffect } from 'react';
import { useProfessional } from '../store/useProfessional.js';
 */
export const Turn = () => {
      /*  const { professionals, setProfessionals } = useProfessional()
 
       useEffect(() => {
             setProfessionals()
       }, [setProfessionals])
 
       console.log(professionals); */
      return (
            <section className="bg-slate-800 text-white">
                  <h1 className="text-3xl text-center">Turnos</h1>
                  <form className="border-1 flex flex-col items-center  ">
                        <div className="mt-3 p-2 bg-slate-700 flex flex-col items-center w-96 rounded-md">
                              <h2 className="text-slate-300 text-2xl text-center">Datos del turno</h2>
                              <div className="form-control w-full max-w-xs ">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Seleccione especialidad</span>
                                    </label>
                                    <input type="text" placeholder="Clínico" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Seleccione un profesional</span>
                                    </label>
                                    <input type="text" placeholder="Type here" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Fecha</span>
                                    </label>
                                    <input type="date" placeholder="Type here" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Horario</span>
                                    </label>
                                    <input type="text" placeholder="Type here" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                        </div>
                        <div className="mt-3 p-2 bg-slate-700 flex flex-col items-center w-96 rounded-md">
                              <h2 className="text-slate-300 text-2xl text-center">Datos del paciente</h2>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Nombre</span>
                                    </label>
                                    <input type="text" placeholder="Nombre" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Apellido</span>
                                    </label>
                                    <input type="text" placeholder="Apellido" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">DNI</span>
                                    </label>
                                    <input type="number" placeholder="DNI" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Teléfono</span>
                                    </label>
                                    <input type="number" placeholder="Teléfono" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Obra social</span>
                                    </label>
                                    <input type="text" placeholder="Obra social" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">ID de afiliado</span>
                                    </label>
                                    <input type="text" placeholder="ID de afiliado" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                        </div>
                  </form>
            </section>
      )
}
