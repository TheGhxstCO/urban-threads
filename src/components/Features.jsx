import './Features.css'

function Features() {
  return (
    <section id="productos" className="features">
      <div className="feature">
        <div className="feature-icon">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 28C12 28 10 24 14 20C18 16 22 18 24 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M28 16L32 12M32 12L36 16M32 12V20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <circle cx="20" cy="32" r="3" fill="white"/>
            <circle cx="14" cy="36" r="2.5" fill="white"/>
            <circle cx="26" cy="36" r="2.5" fill="white"/>
          </svg>
        </div>
        <h2>DISEÑO ÚNICO</h2>
        <p>Piezas exclusivas con estética urbana y minimalista</p>
      </div>
      <div className="feature">
        <div className="feature-icon">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="16" stroke="white" strokeWidth="2"/>
            <path d="M19 25L23 29L31 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2>CALIDAD PREMIUM</h2>
        <p>Materiales de alta calidad para máxima durabilidad</p>
      </div>
      <div className="feature">
        <div className="feature-icon">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 10L30 22H43L32 29L37 41L25 34L13 41L18 29L7 22H20L25 10Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2>ENVÍO RÁPIDO</h2>
        <p>Entrega express en 24-48 horas</p>
      </div>
    </section>
  )
}

export default Features