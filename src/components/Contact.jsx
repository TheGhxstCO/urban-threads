import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.css'

function ContactItem({ icon, title, lines }) {
  return (
    <div className="contact-item">
      <div className="contact-icon" aria-hidden="true">
        {icon}
      </div>
      <div className="contact-item-text">
        <h4>{title}</h4>
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  )
}

function Contact() {
  const navigate = useNavigate()
  const [isSubjectOpen, setIsSubjectOpen] = useState(false)
  const [subjectValue, setSubjectValue] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const subjectRef = useRef(null)

  const subjectOptions = [
    { value: 'consulta-general', label: 'Consulta general' },
    { value: 'informacion-producto', label: 'Informacion de producto' },
    { value: 'estado-pedido', label: 'Estado de pedido' },
    { value: 'devoluciones', label: 'Devoluciones' },
    { value: 'otro', label: 'Otro' },
  ]

  useEffect(() => {
    function handleOutsideClick(event) {
      if (subjectRef.current && !subjectRef.current.contains(event.target)) {
        setIsSubjectOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  function handleSelectSubject(value) {
    setSubjectValue(value)
    setIsSubjectOpen(false)
  }

  function handleInputChange(event) {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const selectedSubjectLabel =
    subjectOptions.find((option) => option.value === subjectValue)?.label || 'Selecciona un asunto'

  function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)

    const dataToSend = {
      name: formData.name,
      lastName: formData.lastName,
      email: formData.email,
      subject: selectedSubjectLabel,
      message: formData.message,
    }

    console.log('Datos del formulario:', dataToSend)

    setTimeout(() => {
      navigate('/')
    }, 700)
  }

  return (
    <section className="contact-page">
      <div className="contact-shell">
        <h1>CONTACTO</h1>
        <p className="contact-intro">¿Tienes alguna pregunta? Nos encantaria escucharte</p>

        <div className="contact-grid">
          <article className="contact-info">
            <h2>INFORMACION DE CONTACTO</h2>

            <ContactItem
              title="DIRECCION"
              lines={['Calle Urban Style 123', '28001 Madrid, Espana']}
              icon={
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s-6-5.5-6-10a6 6 0 1112 0c0 4.5-6 10-6 10z" />
                  <circle cx="12" cy="12" r="2.3" />
                </svg>
              }
            />

            <ContactItem
              title="TELEFONO"
              lines={['+34 91 123 45 67']}
              icon={
                <svg viewBox="0 0 24 24">
                  <path d="M7 4h3l1.2 4-1.8 1.8a14 14 0 006.8 6.8L18 15l4 1.2v3a2 2 0 01-2.2 2A17.8 17.8 0 013 4.2 2 2 0 015 2h2z" />
                </svg>
              }
            />

            <ContactItem
              title="EMAIL"
              lines={['info@urbanthreads.com']}
              icon={
                <svg viewBox="0 0 24 24">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="1.2" />
                  <path d="M4 7l8 6 8-6" />
                </svg>
              }
            />

            <ContactItem
              title="HORARIO"
              lines={['Lun - Vie: 9:00 - 19:00', 'Sab: 10:00 - 14:00']}
              icon={
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 8v4l3 2" />
                </svg>
              }
            />
          </article>

          <article className="contact-form-card">
            <h2>ENVIANOS UN MENSAJE</h2>
            <p className="contact-alert">
              Demo: Este es un formulario de demostracion. Los mensajes no se envian realmente.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  NOMBRE
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  APELLIDOS
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <label>
                EMAIL
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                ASUNTO
                <div ref={subjectRef} className="custom-select">
                  <button
                    type="button"
                    className="custom-select-trigger"
                    onClick={() => setIsSubjectOpen((prevState) => !prevState)}
                    aria-expanded={isSubjectOpen}
                  >
                    {selectedSubjectLabel}
                  </button>
                  {isSubjectOpen && (
                    <ul className="custom-select-menu" role="listbox">
                      {subjectOptions.map((option) => (
                        <li key={option.value}>
                          <button type="button" onClick={() => handleSelectSubject(option.value)}>
                            {option.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </label>

              <label>
                MENSAJE
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </label>

              <button type="submit" disabled={isLoading} className={isLoading ? 'loading' : ''}>
                {isLoading && <span className="spinner" aria-hidden="true" />}
                {isLoading ? 'Enviando...' : 'ENVIAR MENSAJE'}
              </button>
            </form>

          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
