import { useState, useEffect, useRef } from "react"
import { useProfessional } from '../store/useProfessional.js';

export const Turn = () => {
      const { professionals, setProfessionals, specialties, setSpecialties } = useProfessional()
      const [professionalId, setProfessionalId] = useState(0)
      const [professionalName, setProfessionalName] = useState([])
      const [professional, setProfessional] = useState([])
      const [hoursProfessional, setHoursProfessional] = useState([])
      const [hourProfessional, setHourProfessional] = useState('')
      const [specialty, setSpecialty] = useState('')
      const [disabled, setDisabled] = useState(false)
      const formRef = useRef(null)
      useEffect(() => {
            setSpecialties()
            setProfessionals()

      }, [setSpecialties, setProfessionals])

      const handleSubmit = (e) => {
            e.preventDefault()
            const formData = new FormData(formRef.current)
            const body = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  phone: formData.get('phone'),
                  dni: formData.get('dni'),
                  lastname: formData.get('lastname'),
                  specialty: formData.get('specialty'),
                  professional: formData.get('professional'),
                  date: formData.get('date'),
                  hour: formData.get('hour'),
                  socialwork: formData.get('socialwork'),
                  affiliateNumber: 'ebf12b10-48ad-45c5-96c5-62e8aa2e61da', //obtener este dato con context
                  professionalId: professionalId,
            }

      }

      const handleChangeSpecialty = (e) => {
            setSpecialty(e.target.value)
            const nameProfessionals = professionals.filter(professional => {
                  if (professional.specialty === e.target.value) {
                        return professional
                  }
            })
            setProfessionalName(nameProfessionals)
      }

      const handleChangeProfessionalName = (e) => {
            const professionalSelected = professionalName.filter(professional => professional.id === Number(e.target.value))
            setProfessional(professionalSelected)
            setHoursProfessional(professionalSelected[0].hour)
            setProfessionalId(professionalSelected[0].id)
            setDisabled(true)
      }

      const handleChangeHour = (e) => {
            console.log("hour: ", e.target.value);
      }

      return (
            <section className="bg-slate-800 text-white">
                  <h1 className="text-3xl text-center">Turnos</h1>
                  <form className="border-1 flex flex-col items-center " ref={formRef} onSubmit={handleSubmit}>
                        <div className="mt-3 p-2 bg-slate-700 flex flex-col items-center w-5/6 rounded-md">
                              <h2 className="text-slate-300 text-2xl text-center">Datos del turno</h2>
                              <div className="form-control w-full max-w-xs ">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Seleccione especialidad</span>
                                    </label>
                                    <select value={specialty} onChange={handleChangeSpecialty} name="specialty" className="text-slate-600 select select-bordered">
                                          <option disabled={specialty ? true : false}>Seleccione..</option>

                                          {
                                                specialties.map((specialty, index) => (

                                                      <option value={specialty} key={index}>{specialty}</option>
                                                ))
                                          }
                                    </select>
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Seleccione un profesional</span>
                                    </label>
                                    <select value={professional?.id} onChange={handleChangeProfessionalName} name="professional" className="text-slate-600 select select-bordered">
                                          <option disabled={disabled}>Seleccione..</option>
                                          {
                                                professionalName.map((professional, index) => (

                                                      <option value={professional.id} key={index}>
                                                            {
                                                                  professional.length !== 0 ? `${professional.name} ${professional.lastname}` : ''
                                                            }
                                                      </option>
                                                ))
                                          }
                                    </select>

                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Fecha</span>
                                    </label>
                                    <input type="date" placeholder="Type here" name="date" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Seleccione un Horario</span>
                                    </label>
                                    <select value={hourProfessional} onChange={handleChangeHour} name="hour" className="text-slate-600 select select-bordered">
                                          <option disabled={disabled}>Seleccione..</option>
                                          {
                                                hoursProfessional?.map((hour, index) => (
                                                      <option value={hour} key={index}>{hour}</option>
                                                ))
                                          }
                                    </select>
                              </div>
                        </div>
                        <div className="mt-3 p-2 bg-slate-700 flex flex-col items-center w-5/6 rounded-md">
                              <h2 className="text-slate-300 text-2xl text-center">Datos del paciente</h2>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Nombre</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Nombre" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Apellido</span>
                                    </label>
                                    <input type="text" name="lastname" placeholder="Apellido" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">DNI</span>
                                    </label>
                                    <input type="number" name="dni" placeholder="DNI" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Teléfono</span>
                                    </label>
                                    <input type="number" name="phone" placeholder="Teléfono" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="text-slate-400 label-text">Obra social</span>
                                    </label>
                                    <input type="text" name="socialwork" placeholder="Obra social" className="input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs" />
                              </div>
                        </div>
                        <button className="mt-3 mb-2 btn btn-primary ">Solicitar</button>

                  </form>
            </section>
      )
}
