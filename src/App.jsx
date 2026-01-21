import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home.jsx'
import Investigacion from './pages/Investigacion.jsx'
import Desarrollo from './pages/Desarrollo.jsx'
import Empaque from './pages/Empaque.jsx'
import Header from './components/Header.jsx'

function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/investigacion' element={<Investigacion/>}/>
        <Route path='/desarrollo' element={<Desarrollo/>}/>
        <Route path='/empaque' element={<Empaque/>}/>
      </Routes>
    </>
    
  )
}

export default App
