import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Container, BgPadrao, FlexBoxLogo, FlexBoxListagemAlimentos, FlexBoxListagemItemAlimentos, Titulo, FlexBoxListagem, FlexBoxListagemItemTitulo, FlexBoxListagemLastAlimentos, FlexBoxListagemItem, FlexBoxListagemLast } from '../../styled'
import { RiDeleteBin2Fill, RiEdit2Fill } from "react-icons/ri"
import { urlBase } from '../../utils'
import Logo from '../../img/logo/logo.svg'

export default function Painel() {
    const [supermercados, setSupermercados] = useState([])
    const [alimentos, setAlimentos] = useState([])
    let selected = true

    useEffect(() => 
        fetch(urlBase+"/rest/supermercado").then((resp) => {
            return resp.json()
        }).then((resp) => {
            console.log(resp)
            setSupermercados(resp)
        }).catch((erro) => {
            console.log(erro)
        }),[])

    const handleDelete = (id) => {
        fetch(urlBase+"/rest/supermercado/"+id, {
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
                </FlexBoxLogo>
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
                                <Link title="Editar" className="AcoesBtn" to={`/editar/supermercado/${mercado.id}`}><RiEdit2Fill /></Link>
                            </FlexBoxListagemItem>
                        </FlexBoxListagem>
                    ))}

                    <FlexBoxListagemLast>
                        <p>São Paulo, Brasil, FIAP - ZenGroup - 1TDSG</p>
                    </FlexBoxListagemLast>
                </section>
                <section className="tabela">
                    <Titulo>Alimentos</Titulo>
                    <FlexBoxListagemAlimentos className="colunas">
                        <FlexBoxListagemItemTitulo>Nome</FlexBoxListagemItemTitulo>
                        <FlexBoxListagemItemTitulo>Quantidade</FlexBoxListagemItemTitulo>
                        <FlexBoxListagemItemTitulo>Fabricação</FlexBoxListagemItemTitulo>
                        <FlexBoxListagemItemTitulo>Validade</FlexBoxListagemItemTitulo>
                        <FlexBoxListagemItemTitulo>Ações</FlexBoxListagemItemTitulo>
                    </FlexBoxListagemAlimentos>
                    {selected ? 
                    alimentos.map((alimento) => (
                        <FlexBoxListagemAlimentos className="valores">
                            <FlexBoxListagemItemAlimentos>{alimento.nome}</FlexBoxListagemItemAlimentos>
                            <FlexBoxListagemItemAlimentos>{alimento.quantidade}</FlexBoxListagemItemAlimentos>
                            <FlexBoxListagemItemAlimentos>{alimento.fabricacao}</FlexBoxListagemItemAlimentos>
                            <FlexBoxListagemItemAlimentos>{alimento.validade}</FlexBoxListagemItemAlimentos>
                            <FlexBoxListagemItemAlimentos>
                                <Link className="AcoesBtn" to="/" onClick={() => handleDelete(alimento.id)}><RiDeleteBin2Fill /></Link>
                                <Link title="Editar" className="AcoesBtn" to={`/editar/alimento/${alimento.id}`}><RiEdit2Fill /></Link>
                            </FlexBoxListagemItemAlimentos>
                        </FlexBoxListagemAlimentos>
                        )) : false}
                    {
                        !selected ? 
                        <FlexBoxListagemAlimentos>
                            <FlexBoxListagemItemAlimentos>Vazio...</FlexBoxListagemItemAlimentos>
                        </FlexBoxListagemAlimentos>
                         : false
                    }
                    <FlexBoxListagemLastAlimentos>
                        <p>São Paulo, Brasil, FIAP - ZenGroup - 1TDSG</p>
                    </FlexBoxListagemLastAlimentos>
                </section>
            </Container>
        </>
    )
}
