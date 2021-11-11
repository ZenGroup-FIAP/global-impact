import React, {useState, useEffect} from 'react'

export default function Login(props) {
    const [usuario, setUsuario] = useState({
        login: "",
        senha: ""
    })

    const [status, setStatus] = useState(false)
    const [listUsuarios, setListUsuarios] = useState([])

    // Carregando dados de usuarios
    useEffect(() => {
        fetch("/rest/usuario")
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                setListUsuarios(resp)
                console.log(resp)  
            })
            .catch((erro) => {
                console.log(erro)
            }) 
    }, [])

    const handleChange = e => {
        setUsuario({...usuario,[e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()

        fetch("rest/usuario/"+usuario.login+"/"+usuario.senha, {
            
        }).then((resp) => {
            return resp.json()
        }).then((resp) => {
            console.log(resp)
            setStatus(resp)
        })

        if (status) {
            listUsuarios.forEach((u) => {
                if (u.login === usuario.login && u.senha === usuario.senha) {
                    setUsuario(u)
                }
            })

            window.location = "/painel/" + usuario.login
        }


        console.log(usuario)
    }
    
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="login" placeholder="Login" onChange={handleChange} />
                <input type="password" name="senha" placeholder="Senha" onChange={handleChange} />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}
