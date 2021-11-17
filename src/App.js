import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import BoasVindas from './components/boasVindas/BoasVindas'
import Menu from './components/menu/menu'
import { Container } from './styled.js'


export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <BoasVindas />
    </BrowserRouter>
  )
}
