import { Route, Routes, useLocation } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop.jsx'
import './App.css'

import Home from './pages/Home.jsx'
import Investigacion from './pages/Investigacion.jsx'
import Desarrollo from './pages/Desarrollo.jsx'
import Empaque from './pages/Empaque.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Catalogo from './pages/Catalogo.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import FloatingCartButton from './components/FloatingCartButton.jsx'
import { useState } from 'react'

function App() {
  
  const location = useLocation()

  const hideMainHeader = location.pathname === '/catalogo'

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <ScrollToTop/>
    { !hideMainHeader && <Header/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/investigacion' element={<Investigacion/>}/>
        <Route path='/desarrollo' element={<Desarrollo/>}/>
        <Route path='/empaque' element={<Empaque/>}/>
        <Route path='/catalogo' element={<Catalogo/>}/>
      </Routes>
      <Footer/>
      <FloatingCartButton onClick={() => setIsOpen(true)} />
      <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
    
  )
}

export default App
