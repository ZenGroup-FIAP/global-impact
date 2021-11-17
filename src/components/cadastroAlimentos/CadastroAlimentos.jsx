import React from 'react'
import { Form, BtnAzul, Titulo } from '../../styled'

export default function CadastroAlimentos() {
    return (
        <>
        <Titulo>
            Cadastro de Alimentos
        </Titulo>
        <Form action="">
            <label htmlFor="nomeAlimento">Nome do alimento</label>
            <input type="text" name="nomeAlimento" id="nomeAlimentoId" />
            <label htmlFor="dataFabricacaoAlimento">Data de fabricação</label>
            <input type="text" name="dataFabricacaoAlimento" id="dataFabricacaoAlimentoId" />
            <label htmlFor="dataVencimentoAlimento">Data de vencimento</label>
            <input type="text" name="dataVencimentoAlimento" id="dataVencimentoAlimentoId" />
            <label htmlFor="supermercadoAlimento">Supermercado</label>
            <select name="supermercadoAlimento" id="supermercadoAlimentoId">
                <option value="111" key="mercado1">mercado1</option>
                <option value="112" key="mercado2">mercado2</option>
                <option value="113" key="mercado3">mercado3</option>
                <option value="114" key="mercado4">mercado4</option>
            </select>

            <BtnAzul className="BtnHover BtnFlexEnd" type="submit">
                <p>Enviar</p>
            </BtnAzul>
        </Form>
        </>
    )
}
