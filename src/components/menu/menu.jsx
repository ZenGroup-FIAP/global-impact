import {React, useState} from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import CadastroAlimentos from '../cadastroAlimentos/CadastroAlimentos'
import CadastroSupermercados from '../cadastroSupermercado/CadastroSupermercado'
import Painel from '../painel/Painel'
import { ButtonHeaderStyle, HeaderStyled, Container } from '../../styled'

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
                        <li><Link to="/">Painel</Link></li>
                        <li><Link to="/formalimentos">Alimentos</Link></li>
                        <li><Link to="/formsupermercados">Supermercados</Link></li>
                    </ul>
                </nav>
                <ButtonHeaderStyle className={toggle} onClick={() => switchToggle()}>Menu</ButtonHeaderStyle>
                <nav className={menuResponsive}>
                    <ul>
                        <li><Link to="/" onClick={() => switchToggle()}>Painel</Link></li>
                        <li><Link to="/formalimentos" onClick={() => switchToggle()}>Alimentos</Link></li>
                        <li><Link to="/formsupermercados" onClick={() => switchToggle()}>Supermercados</Link></li>
                    </ul>
                </nav>
        </HeaderStyled>
                <section>
                    <Switch>

                        <Route path="/formalimentos">
                            <Container>
                                <CadastroAlimentos />
                            </Container>
                        </Route>

                        <Route path="/formsupermercados">
                            <Container>
                                <CadastroSupermercados />
                            </Container>
                        </Route>

                        <Route path="/">
                            <Painel />
                        </Route>

                    </Switch>
                    
                </section>
            </>
    )
}
