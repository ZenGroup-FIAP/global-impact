import React from 'react'
import { Form } from '../../styled'

export default function CadastroSupermercados() {
    return (
        <Form action="">
            <label htmlFor="nomeSupermercado">Nome do supermercado</label>
            <input type="text" name="nomeSupermercado" id="nomeSupermercadoId" />
            <label htmlFor="unidadeSupermercado">Unidade do supermercado</label>
            <input type="text" name="unidadeSupermercado" id="unidadeSupermercadoId" />
            <label htmlFor="enderecoSupermercado">Endereço do supermercado</label>
            <input type="text" name="enderecoSupermercado" id="enderecoSupermercadoId" />

            <button type="submit">Enviar</button>
        </Form>
    )
}
