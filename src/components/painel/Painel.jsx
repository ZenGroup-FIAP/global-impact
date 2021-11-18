import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Container, BgPadrao, FlexBoxLogo, FlexBoxBoasVindas, Btn, Titulo, FlexBoxListagem, FlexBoxListagemItemTitulo, FlexBoxListagemItem, FlexBoxListagemLast, AcoesBtn } from '../../styled'
import { RiDeleteBin2Fill, RiEdit2Fill } from "react-icons/ri"
import Logo from '../../img/logo/logo.svg'

export default function Painel() {
    const [supermercados, setSupermercados] = useState([])
    const [alimentos, setAlimentos] = useState([])
    let selected = true

    useEffect(() => 
        fetch("/rest/supermercado").then((resp) => {
            return resp.json()
        }).then((resp) => {
            console.log(resp)
            setSupermercados(resp)
        }).catch((erro) => {
            console.log(erro)
        }),[])

    const handleDelete = (id) => {
        fetch("/rest/supermercado/"+id, {
            method: "delete"
        }).then(() => {
            window.location = "/"
        }).catch((erro) => {
            console.log(erro)
        })
    }


    if (alimentos.length === 0) {
        selected = false
    }

    console.log(new Date())

    return (
        <>
            <BgPadrao>
                <FlexBoxLogo>
                    <img src={Logo} alt="Logo" />
                    <h1>Gerenciar:</h1>
                </FlexBoxLogo>

                <FlexBoxBoasVindas>
                    <Btn>
                        <p>Alimentos</p>
                    </Btn>
                    <Btn>
                        <p>Supermercados</p>
                    </Btn>
                </FlexBoxBoasVindas>
            </BgPadrao>

            <Container>
                <section className="tabela">
                    <Titulo>Supermercados</Titulo>
                    <FlexBoxListagem className="colunas">
                        <FlexBoxListagemItemTitulo>Nome</FlexBoxListagemItemTitulo>
                        <FlexBoxListagemItemTitulo>ID</FlexBoxListagemItemTitulo>
                        <FlexBoxListagemItemTitulo>Lista de produtos</FlexBoxListagemItemTitulo>
                        <FlexBoxListagemItemTitulo>Ações</FlexBoxListagemItemTitulo>
                    </FlexBoxListagem>

                    {supermercados.map(mercado => (
                        <FlexBoxListagem className="valores">
                            <FlexBoxListagemItem>{mercado.nome}</FlexBoxListagemItem>
                            <FlexBoxListagemItem>{mercado.id}</FlexBoxListagemItem>
                            <FlexBoxListagemItem><button onClick={() => {
                                setAlimentos(mercado.alimentos)
                                }}>Alimentos</button></FlexBoxListagemItem>
                            <FlexBoxListagemItem>
                                <Link className="AcoesBtn" to="/" onClick={() => handleDelete(mercado.id)}><RiDeleteBin2Fill /></Link>
                                <Link className="AcoesBtn" to="/formsupermercados"><RiEdit2Fill /></Link>
                            </FlexBoxListagemItem>
                        </FlexBoxListagem>
                    ))}

                    <FlexBoxListagemLast>
                        <p>São Paulo, Brasil, FIAP - ZenGroup - 1TDSG</p>
                    </FlexBoxListagemLast>
                </section>
                <section>
                    {selected ? 
                    alimentos.map((alimento) => (
                        <h1>{alimento.nome}</h1>
                        )) : false}
                    {
                        !selected ? <p>....</p> : false
                    }
                </section>
            </Container>
        </>
    )
}
