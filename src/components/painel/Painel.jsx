import React from 'react'
import {Link} from 'react-router-dom'
import { Container, BgPadrao, FlexBoxListagemAlimentos, FlexBoxListagemLastAlimentos, FlexBoxLogo, FlexBoxBoasVindas, Btn, Titulo, FlexBoxListagem, FlexBoxListagemItemTitulo, FlexBoxListagemItem, FlexBoxListagemLast, AcoesBtn } from '../../styled'
import { RiDeleteBin2Fill, RiEdit2Fill } from "react-icons/ri"
import Logo from '../../img/logo/logo.svg'

export default function Painel() {


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

                    <FlexBoxListagem className="valores">
                        <FlexBoxListagemItem>Extra</FlexBoxListagemItem>
                        <FlexBoxListagemItem>223</FlexBoxListagemItem>
                        <FlexBoxListagemItem>Lista de produtos</FlexBoxListagemItem>
                        <FlexBoxListagemItem>
                            <AcoesBtn className="AcoesBtn"><RiDeleteBin2Fill /></AcoesBtn>
                            <Link className="AcoesBtn" to="/formsupermercados"><RiEdit2Fill /></Link>
                        </FlexBoxListagemItem>
                    </FlexBoxListagem>
                    <FlexBoxListagem className="valores">
                        <FlexBoxListagemItem>Extra</FlexBoxListagemItem>
                        <FlexBoxListagemItem>223</FlexBoxListagemItem>
                        <FlexBoxListagemItem>Lista de produtos</FlexBoxListagemItem>
                        <FlexBoxListagemItem>
                            <AcoesBtn className="AcoesBtn"><RiDeleteBin2Fill /></AcoesBtn>
                            <Link className="AcoesBtn" to="/formsupermercados"><RiEdit2Fill /></Link>
                        </FlexBoxListagemItem>
                    </FlexBoxListagem><FlexBoxListagem className="valores">
                        <FlexBoxListagemItem>Extra</FlexBoxListagemItem>
                        <FlexBoxListagemItem>223</FlexBoxListagemItem>
                        <FlexBoxListagemItem>Lista de produtos</FlexBoxListagemItem>
                        <FlexBoxListagemItem>
                            <AcoesBtn className="AcoesBtn"><RiDeleteBin2Fill /></AcoesBtn>
                            <Link className="AcoesBtn" to="/formsupermercados"><RiEdit2Fill /></Link>
                        </FlexBoxListagemItem>
                    </FlexBoxListagem><FlexBoxListagem className="valores">
                        <FlexBoxListagemItem>Extra</FlexBoxListagemItem>
                        <FlexBoxListagemItem>223</FlexBoxListagemItem>
                        <FlexBoxListagemItem>Lista de produtos</FlexBoxListagemItem>
                        <FlexBoxListagemItem>
                            <AcoesBtn className="AcoesBtn"><RiDeleteBin2Fill /></AcoesBtn>
                            <Link className="AcoesBtn" to="/formsupermercados"><RiEdit2Fill /></Link>
                        </FlexBoxListagemItem>
                    </FlexBoxListagem><FlexBoxListagem className="valores">
                        <FlexBoxListagemItem>Extra</FlexBoxListagemItem>
                        <FlexBoxListagemItem>223</FlexBoxListagemItem>
                        <FlexBoxListagemItem>Lista de produtos</FlexBoxListagemItem>
                        <FlexBoxListagemItem>
                            <AcoesBtn className="AcoesBtn"><RiDeleteBin2Fill /></AcoesBtn>
                            <Link className="AcoesBtn" to="/formsupermercados"><RiEdit2Fill /></Link>
                        </FlexBoxListagemItem>
                    </FlexBoxListagem><FlexBoxListagem className="valores">
                        <FlexBoxListagemItem>Extra</FlexBoxListagemItem>
                        <FlexBoxListagemItem>223</FlexBoxListagemItem>
                        <FlexBoxListagemItem>Lista de produtos</FlexBoxListagemItem>
                        <FlexBoxListagemItem>
                            <AcoesBtn className="AcoesBtn"><RiDeleteBin2Fill /></AcoesBtn>
                            <Link className="AcoesBtn" to="/formsupermercados"><RiEdit2Fill /></Link>
                        </FlexBoxListagemItem>
                    </FlexBoxListagem><FlexBoxListagem className="valores">
                        <FlexBoxListagemItem>Extra</FlexBoxListagemItem>
                        <FlexBoxListagemItem>223</FlexBoxListagemItem>
                        <FlexBoxListagemItem>Lista de produtos</FlexBoxListagemItem>
                        <FlexBoxListagemItem>
                            <AcoesBtn className="AcoesBtn"><RiDeleteBin2Fill /></AcoesBtn>
                            <Link className="AcoesBtn" to="/formsupermercados"><RiEdit2Fill /></Link>
                        </FlexBoxListagemItem>
                    </FlexBoxListagem><FlexBoxListagem className="valores">
                        <FlexBoxListagemItem>Extra</FlexBoxListagemItem>
                        <FlexBoxListagemItem>223</FlexBoxListagemItem>
                        <FlexBoxListagemItem>Lista de produtos</FlexBoxListagemItem>
                        <FlexBoxListagemItem>
                            <AcoesBtn className="AcoesBtn"><RiDeleteBin2Fill /></AcoesBtn>
                            <Link className="AcoesBtn" to="/formsupermercados"><RiEdit2Fill /></Link>
                        </FlexBoxListagemItem>
                    </FlexBoxListagem><FlexBoxListagem className="valores">
                        <FlexBoxListagemItem>Extra</FlexBoxListagemItem>
                        <FlexBoxListagemItem>223</FlexBoxListagemItem>
                        <FlexBoxListagemItem>Lista de produtos</FlexBoxListagemItem>
                        <FlexBoxListagemItem>
                            <AcoesBtn className="AcoesBtn"><RiDeleteBin2Fill /></AcoesBtn>
                            <Link className="AcoesBtn" to="/formsupermercados"><RiEdit2Fill /></Link>
                        </FlexBoxListagemItem>
                    </FlexBoxListagem>
                    <FlexBoxListagemLast className="valores">
                        <FlexBoxListagemItem>Extra</FlexBoxListagemItem>
                        <FlexBoxListagemItem>223</FlexBoxListagemItem>
                        <FlexBoxListagemItem>Lista de produtos</FlexBoxListagemItem>
                        <FlexBoxListagemItem>
                            <AcoesBtn className="AcoesBtn"><RiDeleteBin2Fill /></AcoesBtn>
                            <Link className="AcoesBtn" to="/formsupermercados"><RiEdit2Fill /></Link>
                        </FlexBoxListagemItem>
                    </FlexBoxListagemLast>

                </section>
                <section>

                </section>

                <section className="tabela">
                    <FlexBoxListagemAlimentos className="colunas">
                        <FlexBoxListagemItemTitulo>Nome</FlexBoxListagemItemTitulo>
                        <FlexBoxListagemItemTitulo>Quantidade(KG)</FlexBoxListagemItemTitulo>
                        <FlexBoxListagemItemTitulo>Fabricação</FlexBoxListagemItemTitulo>
                        <FlexBoxListagemItemTitulo>Validade</FlexBoxListagemItemTitulo>
                        <FlexBoxListagemItemTitulo>Ações</FlexBoxListagemItemTitulo>
                    </FlexBoxListagemAlimentos>

                    <FlexBoxListagemAlimentos className="valores">
                        <FlexBoxListagemItem>Maçã</FlexBoxListagemItem>
                        <FlexBoxListagemItem>010</FlexBoxListagemItem>
                        <FlexBoxListagemItem>10/11/2021</FlexBoxListagemItem>
                        <FlexBoxListagemItem>20/11/2021</FlexBoxListagemItem>
                        <FlexBoxListagemItem>
                            <AcoesBtn className="AcoesBtn"><RiDeleteBin2Fill /></AcoesBtn>
                            <Link className="AcoesBtn" to="/formalimentos"><RiEdit2Fill /></Link>
                        </FlexBoxListagemItem>
                    </FlexBoxListagemAlimentos>
                    <FlexBoxListagemLastAlimentos className="valores">
                        <FlexBoxListagemItem>Manga</FlexBoxListagemItem>
                        <FlexBoxListagemItem>015</FlexBoxListagemItem>
                        <FlexBoxListagemItem>13/11/2021</FlexBoxListagemItem>
                        <FlexBoxListagemItem>20/11/2021</FlexBoxListagemItem>
                        <FlexBoxListagemItem>
                            <AcoesBtn className="AcoesBtn"><RiDeleteBin2Fill /></AcoesBtn>
                            <Link className="AcoesBtn" to="/formalimentos"><RiEdit2Fill /></Link>
                        </FlexBoxListagemItem>
                    </FlexBoxListagemLastAlimentos>
                </section>
            </Container>
        </>
    )
}
