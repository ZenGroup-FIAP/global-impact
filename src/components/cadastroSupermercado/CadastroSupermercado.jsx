import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Titulo, BtnAzul, Container } from '../../styled'

export default function CadastroSupermercados(props) {

    let codigo = null
    
    if (props.match.path.toLowerCase().includes("editar")) {
        codigo = props.match.params.id
    }

    const [novo, setNovo] = useState({
        id: codigo,
        nome: ""
    })

    let metodo = "post"

    if (codigo) {
        metodo = "put"
    }

    const handleChange = e => {
        setNovo({...novo, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()

        fetch("/rest/supermercado/"+(codigo ? codigo : ""), {
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
            fetch("/rest/supermercado/"+codigo)
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
        <Form onSubmit={handleSubmit}>
            <label htmlFor="nomeSupermercado">Nome do supermercado</label>
            <input type="text" name="nomeSupermercado" id="nomeSupermercadoId" placeholder={novo.nome} onChange={handleChange} />

            <BtnAzul className="BtnHover BtnFlexEnd" type="submit">
                <p>Enviar</p>
            </BtnAzul>
            <Link to="/">Cancelar</Link>
        </Form>
        </Container>
    )
}
