import React from 'react'
import {Routes, Link, Route} from 'react-router-dom'


export default function Menu(props) {
    return (
        <>
            <header>
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
                </Routes>
            </div>
        </>
    )
}
