import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>URBAN THREADS</h3>
          <p>Redefiniendo el estilo urbano con diseños minimalistas y calidad premium.</p>
        </div>
        <div className="footer-section">
          <h4>ENLACES</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>AYUDA</h4>
          <ul>
            <li><a href="#tallas">Guía de tallas</a></li>
            <li><a href="#envios">Envíos</a></li>
            <li><a href="#devoluciones">Devoluciones</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>SÍGUENOS</h4>
          <div className="social-icons">
            <a href="#twitter"><i className="fab fa-twitter"></i></a>
            <a href="#pinterest"><i className="fab fa-pinterest"></i></a>
            <a href="#instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <p className="copyright">© 2024 Urban Threads. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer