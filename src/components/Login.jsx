import React, {useState, useEffect} from 'react'

export default function Login(props) {
    const [contaLogin, setLogin] = useState()
    const [contaSenha, setSenha] = useState()
    const [logado, setLogado] = useState("show")


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
            })
            .catch((erro) => {
                console.log(erro)
            }) 
    }, [])

    const handleChangeLogin = (e) => {
        setStatus(false)
        listUsuarios.forEach(element => {
            if (element.login === e.target.value) {
                setLogin(e.target.value) 
                setStatus(true)
            }
        })
    }

    const handleChangeSenha = (e) => {
        setStatus(false)
        listUsuarios.forEach(element => {
            if (element.senha === e.target.value) {
                setSenha(e.target.value)
                setUsuario({
                    login: contaLogin,
                    senha: contaSenha
                })
                setStatus(true)
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(status)
        if (status) {
            listUsuarios.forEach(element => {
                if (element.login === usuario.login) {
                    setLogado("unshow")
                    window.location = "/painel/" + element.id
                }
            })
            props.isLogged = true
        } else {
            alert("Login ou senha invalidos...")
        }
    }
    
    return (
        <div className={logado}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="login" placeholder="Login" onChange={handleChangeLogin} />
                <input type="password" name="senha" placeholder="Senha" onChange={handleChangeSenha} />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}
