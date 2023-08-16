import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProfessional } from '../store/useProfessional.js';
import { useTurn } from '../store/useTurn.js';
import { isEmpty } from '../utils/verifyForm.js';
import { Spinner } from '../components/Spinner'
import { Sucess } from '../components/Sucess/index.jsx';
import { useUserContext } from '../utils/UserContext.jsx';

const style = {
      error: "input input-error text-slate-700 input-bordered border-4 w-full max-w-xs ",
      notError: "input text-slate-700 focus:outline-none focus:border-slate-700 focus:ring-slate-border-slate-700 focus:ring-2 w-full max-w-xs",
      select: "text-slate-600 select select-bordered",
      errorSelect: "text-slate-600 select select-error w-full max-w-xs"
}

export const Turn = () => {
      const navigate = useNavigate();
      const { isLoggedin, userData } = useUserContext()
      useEffect(() => {
            if (!isLoggedin) {
                  navigate('/login')
            }
      }, [isLoggedin, navigate])

      const { professionals, setProfessionals, specialties, setSpecialties } = useProfessional()
      const { postTurn, loading, sucess } = useTurn()

      const [professionalId, setProfessionalId] = useState(0)
      const [professionalName, setProfessionalName] = useState([])
      const [professional, setProfessional] = useState([])
      const [hoursProfessional, setHoursProfessional] = useState([])
      const [hour, setHour] = useState('')
      const [specialty, setSpecialty] = useState('')
      const [disabled, setDisabled] = useState(true)
      const [error, setError] = useState({ error: false, nameInput: '' })

      const today = new Date(); // Obtiene la fecha actual
      today.setDate(today.getDate() + 1); // Agrega un día a la fecha actual
      const minDate = today.toISOString().split('T')[0]; // Obtiene la fecha mínima en formato YYYY-MM-DD
      const formRef = useRef(null)

      useEffect(() => {
            setSpecialties()
            setProfessionals()
      }, [setSpecialties, setProfessionals])

      const handleSubmit = (e) => {
            e.preventDefault()
            const formData = new FormData(formRef.current)
            const { empty, nameInput } = isEmpty(formData)
            if (!empty) {
                  const formData = new FormData(formRef.current)
                  const body = {
                        name: formData.get('name'),
                        email: formData.get('email'),
                        phone: formData.get('phone'),
                        dni: formData.get('dni'),
                        lastname: formData.get('lastname'),
                        specialty: formData.get('specialty'),
                        professional: `${professional[0].name} ${professional[0].lastname}`,
                        date: formData.get('date'),
                        hour: formData.get('hour'),
                        socialwork: formData.get('socialwork'),
                        affiliateNumber: userData.dni,
                        professionalId: professionalId,
                  }
                  postTurn(body)
                  setTimeout(() => {
                        navigate('/')
                  }, 5000);
            }
            setError({ error: true, name: nameInput })
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
      }

      const handleChangeHour = (e) => {
            setHour(e.target.value)
      }

      const handleChangeSocialWork = () => {
            const formData = new FormData(formRef.current)
            const { empty } = isEmpty(formData)
            setDisabled(empty)
      }

      return (
            <section className="bg-slate-800 text-white">
                  <h1 className="text-3xl text-center">Turnos</h1>
                  <form className="border-1 flex flex-col items-center " ref={formRef} onSubmit={handleSubmit}>
                        <div className="mt-3 p-2 bg-slate-700 grid grid-cols-1 gap-4 w-5/6 rounded-md md:grid-cols-2 md:w-3/5 lg:justify-items-center">
                              <h2 className="text-slate-300 mt-2 mb-2 text-2xl text-center md:col-span-2 ">Datos del turno</h2>
                              <div className="form-control w-full col-span-1 lg:w-72 xl:w-80 ">
                                    <label className="label">
                                          <span className="text-slate-300 label-text">Seleccione especialidad</span>
                                    </label>
                                    <select value={specialty} onChange={handleChangeSpecialty} name="specialty" className={error.name === "specialty" ? style.errorSelect : style.select}>
                                          <option disabled={specialty ? true : false}>Seleccione...</option>
                                          {
                                                specialties.map((specialty, index) => (

                                                      <option value={specialty} key={index}>{specialty}</option>
                                                ))
                                          }
                                    </select>
                              </div>
                              <div className="form-control w-full col-span-1 lg:w-72 xl:w-80">
                                    <label className="label">
                                          <span className="text-slate-300 label-text">Seleccione un profesional</span>
                                    </label>
                                    <select value={professional?.id} onChange={handleChangeProfessionalName} name="professional" className={error.name === "professional" ? style.errorSelect : style.select}>
                                          <option disabled={professional.length === 0 ? false : true}>Seleccione...</option>
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
                              <div className="form-control w-full col-span-1 lg:w-72 xl:w-80">
                                    <label className="label">
                                          <span className="text-slate-300 label-text">Fecha</span>
                                    </label>
                                    <input type="date" min={minDate} placeholder="Type here" name="date" className={error.name === 'date' ? style.error : style.notError} />
                              </div>
                              <div className="form-control w-full col-span-1 mb-2 lg:w-72 xl:w-80">
                                    <label className="label">
                                          <span className="text-slate-300 label-text">Seleccione un Horario</span>
                                    </label>
                                    <select value={hour} onChange={handleChangeHour} name="hour" className={error.name === "hour" ? style.errorSelect : style.select}>
                                          <option disabled={hour === '' ? true : false}>Seleccione...</option>
                                          {
                                                hoursProfessional?.map((hour, index) => (
                                                      <option value={hour} key={index}>{hour}</option>
                                                ))
                                          }
                                    </select>
                              </div>
                        </div>
                        <div className="mt-3 p-2 bg-slate-700 grid grid-cols-1 gap-4 w-5/6 rounded-md md:grid-cols-2 md:w-3/5 lg:grid-cols-3 ">
                              <h2 className="text-slate-300 mt-2 mb-2 text-2xl text-center md:col-span-2 lg:col-span-3 ">Datos del paciente</h2>
                              <div className="form-control w-full col-span-1 ">
                                    <label className="label">
                                          <span className="text-slate-300 label-text">Nombre</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Nombre" className={error.name === 'name' ? style.error : style.notError} />
                              </div>
                              <div className="form-control w-full col-span-1">
                                    <label className="label">
                                          <span className="text-slate-300 label-text">Apellido</span>
                                    </label>
                                    <input type="text" name="lastname" placeholder="Apellido" className={error.name === 'lastname' ? style.error : style.notError} />
                              </div>
                              <div className="form-control w-full col-span-1 ">
                                    <label className="label">
                                          <span className="text-slate-300 label-text">DNI</span>
                                    </label>
                                    <input type="number" name="dni" placeholder="DNI" className={error.name === 'dni' ? style.error : style.notError} />
                              </div>
                              <div className="form-control w-full col-span-1">
                                    <label className="label">
                                          <span className="text-slate-300 label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className={error.name === 'email' ? style.error : style.notError} />
                              </div>
                              <div className="form-control w-full col-span-1">
                                    <label className="label">
                                          <span className="text-slate-300 label-text">Teléfono</span>
                                    </label>
                                    <input type="number" name="phone" placeholder="Teléfono" className={error.name === 'phone' ? style.error : style.notError} />
                              </div>
                              <div className="form-control w-full col-span-1 mb-2">
                                    <label className="label">
                                          <span className="text-slate-300 label-text">Obra social</span>
                                    </label>
                                    <input onChange={handleChangeSocialWork} type="text" name="socialwork" placeholder="Obra social" className={error.name === 'socialwork' ? style.error : style.notError} />
                              </div>
                        </div>
                        {
                              disabled
                                    ?
                                    <button disabled tabIndex="-1" role="button" aria-disabled="true" className="mt-3 mb-2 p-3 rounded-md bg-slate-900 text-[#94a3af94]" >Solicitar</button>
                                    :
                                    <button className='mt-3 mb-2 btn btn-primary'>
                                          {
                                                loading
                                                      ? <Spinner />
                                                      : "Solicitar"
                                          }
                                    </button>
                                    
                        }
                        <button className='mt-3 mb-2 btn btn-primary'> <Link to={'/dashboard'}>Ver Turno</Link></button>
                  </form>
                  {sucess ? <Sucess message={'Turno registrado'} /> : null}
            </section>
      )
}
