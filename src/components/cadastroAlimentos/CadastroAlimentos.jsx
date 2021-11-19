import React, {useState, useEffect} from 'react'
import { Form, BtnAzul, Titulo, Container } from '../../styled'
import { urlBase } from '../../utils'

export default function CadastroAlimentos(props) {  

    const [supermercados, setSupermercados] = useState([])

    let codigo = null

    if (props.match.path.toLowerCase().includes("editar")) {
        codigo = props.match.params.id
    }

    useEffect(() => {
        fetch(urlBase+"/rest/supermercado").then((resp) => {
            return resp.json()
        }).then((resp) => {
            console.log(resp)
            setSupermercados(resp)
        }).catch((erro) => {
            console.log(erro)
        })
    }, [])

    const [novo, setNovo] = useState({
        id: codigo,
        idSupermercado: null,
        nome: "",
        quantidade: null,
        fabricacao: null,
        validade: null
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
        fetch(urlBase+"/rest/alimento/"+(codigo ? codigo : ""), {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo)
        }).then(() => {
            window.location = "/"
        })
    }

    useEffect(() => {
        if (codigo) {
            fetch(urlBase+"/rest/alimento/"+codigo)
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
            Cadastro de Alimentos
        </Titulo>
        <Form>
            <label htmlFor="nome">Nome do alimento</label>
            <input type="text" name="nome" id="nomeAlimentoId" placeholder={novo.nome} onChange={handleChange} />
            <label htmlFor="quantidade">Quantidade em Kg</label>
            <input type="number" name="quantidade" id="quantidadeId" placeholder={novo.quantidade} onChange={handleChange} />
            <label htmlFor="fabricacao">Data de fabricação</label>
            <input type="date" name="fabricacao" id="fabricacaoId" onChange={handleChange} />
            <label htmlFor="validade">Data de vencimento</label>
            <input type="date" name="validade" id="validadeId" onChange={handleChange}/>
            <label htmlFor="idSupermercado">Supermercado</label>
            <select name="idSupermercado" id="supermercadoAlimentoId" onChange={handleChange}>
                {supermercados.map((mercado) => (
                    <option value={mercado.id} key={mercado.nome}>{mercado.nome}</option>
                ))}
            </select>

            <BtnAzul className="BtnHover BtnFlexEnd" onClick={handleSubmit}>
                <p>Enviar</p>
            </BtnAzul>
        </Form>
        </Container>
    )
}
