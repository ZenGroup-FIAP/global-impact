import React, {useState, useEffect} from 'react'

export default function Usuarios() {
    const [listaUsuarios, setListaUsuarios] = useState([])

    useEffect(() => {
        fetch("/rest/usuario")
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                setListaUsuarios(resp)
                console.log(resp)  
            })
            .catch((erro) => {
                console.log(erro)
            }) 
    }, [])

    console.log(listaUsuarios)
    
    return (
        <div>
            <ul>
                {listaUsuarios.map((usuario) =>(
                    <li>{usuario.login}</li>
                ))}
            </ul>
        </div>
    )
}
