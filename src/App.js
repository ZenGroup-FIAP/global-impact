import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components'
import Login from "./components/Login";
import Painel from './components/Painel';


function App() {

  return (
    <BrowserRouter>
      <ContainerStyled>
        <Login isLoged={false}/>
        <Routes>
          <Route path="/painel/:id" component={Painel}/>
        </Routes>
      </ContainerStyled>
    </BrowserRouter>
  );
}

const ContainerStyled = styled.div`
  .show {
    display: flex;
  }

  .unshow {
    display: none;
  }
`


export default App;
