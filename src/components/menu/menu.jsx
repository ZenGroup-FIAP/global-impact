import {React, useState} from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import CadastroAlimentos from '../cadastroAlimentos/CadastroAlimentos'
import CadastroSupermercados from '../cadastroSupermercado/CadastroSupermercado'
import BoasVindas from '../boasVindas/BoasVindas'
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/painel">Painel</Link></li>
                        <li><Link to="/cadastroalimentos">Alimentos</Link></li>
                        <li><Link to="/cadastrosupermercados">Supermercados</Link></li>
                    </ul>
                </nav>
                <ButtonHeaderStyle className={toggle} onClick={() => switchToggle()}>Menu</ButtonHeaderStyle>
                <nav className={menuResponsive}>
                    <ul>
                        <li><Link to="/" onClick={() => switchToggle()}>Home</Link></li>
                        <li><Link to="/painel" onClick={() => switchToggle()}>Painel</Link></li>
                        <li><Link to="/cadastroalimentos" onClick={() => switchToggle()}>Alimentos</Link></li>
                        <li><Link to="/cadastrosupermercados" onClick={() => switchToggle()}>Supermercados</Link></li>
                    </ul>
                </nav>
        </HeaderStyled>
                <section>
                    <Switch>

                        <Route path="/cadastroalimentos">
                            <Container>
                                <CadastroAlimentos />
                            </Container>
                        </Route>

                        <Route path="/cadastrosupermercados">
                            <Container>
                                <CadastroSupermercados />
                            </Container>
                        </Route>

                        <Route path="/painel">
                            <Container>
                                <Painel />
                            </Container>
                        </Route>

                        <Route path="/">
                            <BoasVindas />
                        </Route>

                    </Switch>
                    
                </section>
            </>
    )
}
