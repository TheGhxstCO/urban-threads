import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <h1><span className="white">ESTILO URBANO</span> <span className="orange">REDEFINIDO</span></h1>
      <p>Descubre nuestra colección exclusiva de ropa urbana minimalista</p>
      <Link to="/productos#productos" className="btn-primary">EXPLORAR COLECCIÓN</Link>
    </section>
  )
}

export default Hero