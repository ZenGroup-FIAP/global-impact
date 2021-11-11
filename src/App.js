import { BrowserRouter } from "react-router-dom";
import React, {useState} from 'react'
import Menu from "./components/Menu";
import Usuarios from "./components/Usuarios";
import Login from "./components/Login";


function App() {
  const [userLogged, serUserLogged] = useState(false)

  return (
    <BrowserRouter>
      <Menu isLoged={userLogged}/>
      <Login />
    </BrowserRouter>
  );
}

export default App;
