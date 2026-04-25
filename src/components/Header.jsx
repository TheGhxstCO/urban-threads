import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">URBAN THREADS</div>
        <nav className="nav">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/productos">Productos</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header