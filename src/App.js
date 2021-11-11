import { BrowserRouter } from "react-router-dom";
import React, {useState} from 'react'
import Menu from "./components/Menu";


function App() {
  const [userLogged, serUserLogged] = useState(false)

  return (
    <BrowserRouter>
      <Menu isLoged={userLogged}/>
    </BrowserRouter>
  );
}

export default App;
