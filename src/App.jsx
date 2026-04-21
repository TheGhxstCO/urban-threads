import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/productos" element={<Features />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App