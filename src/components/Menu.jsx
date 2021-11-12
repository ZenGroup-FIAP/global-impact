import React, {useState, useEffect} from 'react'
import {Routes, Link, Route} from 'react-router-dom'


export default function Menu(props) {
    let id = null
    const [usuario, setUsuario] = useState([])

    if (props.match.path.toLowerCase().includes('teste')) {
        id = props.match.params.id
    }

    useEffect(() => {
        fetch("/rest/usuario/" + id)
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                setUsuario(resp)
                console.log(resp)  
            })
            .catch((erro) => {
                console.log(erro)
            }) 
    }, [])

    return (
        <>
            <header>
                <p>{usuario.login}</p>
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/cadastro">CADASTRO</Link></li>
                        <li><Link to="/login">LOGIN</Link></li>
                        <li><Link to="/projeto">PROJETO</Link></li>
                    </ul>
                </nav>
            </header>
            <div>
                <Routes>
                    <Route path="/">
                   
                    </Route>
                    <Route path="/cadastro">
                     
                    </Route>
                    <Route path="/login">
                      
                    </Route>
                    <Route path="/projeto">
                        
                    </Route>
                    <Route  path="/painel/:id"/>
                </Routes>
            </div>
        </>
    )
}
