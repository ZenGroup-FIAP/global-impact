import React from 'react'
import BoasVindas from './components/boasVindas/BoasVindas'
import Menu from './components/menu/menu'
import { Container } from './styled.js'


export default function App() {
  return (
    <div>
      <Menu />
      <BoasVindas />
    </div>
  )
}
