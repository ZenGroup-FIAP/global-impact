import {React, useState} from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import CadastroAlimentos from '../cadastroAlimentos/CadastroAlimentos'
import CadastroSupermercados from '../cadastroSupermercado/CadastroSupermercado'
import CadastroUsuarios from '../cadastroUsuario/CadastroUsuario'
import { ButtonHeaderStyle, HeaderStyled } from '../../styled'

export default function Menu() {
    const [toggle, setToggle] = useState("off")
    const [menuResponsive, setMenuResponsive] = useState("closed")

    const switchToggle = () => {
        if (toggle === "off") {
            setToggle("on")
            setMenuResponsive("open")
        } else {
            setToggle("off")
            setMenuResponsive("closed")
        }
    }


    return (
        <>
        <HeaderStyled>
                <nav>
                    <ul>
                        <li><Link to="/cadastroalimentos">Alimentos</Link></li>
                        <li><Link to="/cadastrousuarios">Usuarios</Link></li>
                        <li><Link to="/cadastrosupermercados">Supermercados</Link></li>
                    </ul>
                </nav>
                <ButtonHeaderStyle className={toggle} onClick={() => switchToggle()}>Menu</ButtonHeaderStyle>
                <nav className={menuResponsive}>
                    <ul>
                        <li><Link to="/cadastroalimentos" onClick={() => switchToggle()}>Alimentos</Link></li>
                        <li><Link to="/cadastrousuarios" onClick={() => switchToggle()}>Usuarios</Link></li>
                        <li><Link to="/cadastrosupermercados" onClick={() => switchToggle()}>Supermercados</Link></li>
                    </ul>
                </nav>
        </HeaderStyled>
                <section>
                    <Switch>

                        <Route path="/cadastroalimentos">
                            <CadastroAlimentos />
                        </Route>

                        <Route path="/cadastrousuarios">
                            <CadastroSupermercados />
                        </Route>

                        <Route path="/cadastrosupermercados">
                            <CadastroUsuarios />
                        </Route>

                    </Switch>
                    
                </section>
            </>
    )
}
