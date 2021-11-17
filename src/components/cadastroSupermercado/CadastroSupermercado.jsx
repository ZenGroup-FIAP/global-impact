import React from 'react'
import { Form, Titulo, BtnAzul } from '../../styled'

export default function CadastroSupermercados() {
    return (
        <>
        <Titulo>
            Cadastro de Supermercados
        </Titulo>
        <Form action="">
            <label htmlFor="nomeSupermercado">Nome do supermercado</label>
            <input type="text" name="nomeSupermercado" id="nomeSupermercadoId" />

            <BtnAzul className="BtnHover BtnFlexEnd" type="submit">
                <p>Enviar</p>
            </BtnAzul>
        </Form>
        </>
    )
}
