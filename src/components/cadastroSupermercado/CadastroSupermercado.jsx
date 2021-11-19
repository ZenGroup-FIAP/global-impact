import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Titulo, BtnAzul, Container } from '../../styled'
import { urlBase } from '../../utils'

export default function CadastroSupermercados(props) {

    let codigo = null
    
    if (props.match.path.toLowerCase().includes("editar")) {
        codigo = props.match.params.id
    }

    const [novo, setNovo] = useState({
        id: codigo,
        nome: "",
        usuarios: [],
        alimentos: []
    })

    let metodo = "post"

    if (codigo) {
        metodo = "put"
    }

    const handleChange = e => {
        setNovo({...novo, [e.target.name]: e.target.value})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        console.log(novo)
        fetch(urlBase+"/rest/supermercado/"+(codigo ? codigo : ""), {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo)
        }).then(() => {
            console.log("Funciona porfavo")
            //window.location = "/"
        })
    }

    useEffect(() => {
        if (codigo) {
            fetch(urlBase+"/rest/supermercado/"+codigo)
                .then(resp => {
                    return resp.json()
                }).then(data=> {
                    setNovo(data)
                })
        }
    }, [codigo])
    
    return (
        <Container>
        <Titulo>
            Cadastro de Supermercados
        </Titulo>
        <Form>
            <label htmlFor="nome">Nome do supermercado</label>
            <input type="text" name="nome" id="nomeSupermercadoId" placeholder={novo.nome} onChange={handleChange} />
            <input type="hidden" name="usuarios" value={novo.usuarios} />
            <input type="hidden" name="alimentos" value={novo.alimentos} />

            <BtnAzul className="BtnHover BtnFlexEnd" onClick={handleSubmit}>
                <p>Enviar</p>
            </BtnAzul>
            <Link to="/">Cancelar</Link>
        </Form>
        </Container>
    )
}
