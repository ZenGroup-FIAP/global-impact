import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menu from './components/menu/menu'
import Footer from './components/footer/Footer'


export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Footer />
    </BrowserRouter>
  )
}
